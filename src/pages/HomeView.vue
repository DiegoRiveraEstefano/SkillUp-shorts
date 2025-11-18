<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useFeedStore } from '@/stores/feedStore'
import { useGamification } from '@/composables/useGamification'
import { useVideoObserver } from '@/composables/useVideoObserver'
import { useToast } from '@/composables/useToast'
import type { VideoContent } from '@/types'

const feedStore = useFeedStore()
const { processAction } = useGamification()
const { observeElement } = useVideoObserver()
const { addToast } = useToast()

// State to track playing status for UI icons (optional overlay)
const isPlaying = ref(false)


onMounted(async () => {
  await feedStore.loadFeed()
})

// Trigger Gamification when video finishes naturally
const handleVideoEnd = (video: VideoContent) => {
  processAction('complete_video')
  addToast(`Lesson Completed: ${video.title}`, 'success')
}

// Handle tap to Play/Pause
const toggleVideo = (event: MouseEvent) => {
  const videoEl = event.currentTarget as HTMLVideoElement
  console.log('Toggling video playback', videoEl)
  if (videoEl) {
    if (videoEl.paused) {
      videoEl.play()
      isPlaying.value = true
    } else {
      videoEl.pause()
      isPlaying.value = false
    }
  }
}

// Handle Like (Double Tap)
const toggleLike = (e: MouseEvent) => {
  // Visual feedback logic could go here (e.g., heart animation)
  processAction('daily_login')
  addToast('Liked!', 'info')
}
</script>

<template>
  <div class="h-full w-full bg-black text-white">
    <!-- Loading State -->
    <div v-if="feedStore.isLoading" class="flex items-center justify-center h-full">
      <div class="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
    </div>

    <!-- Video Feed -->
    <div v-else class="h-full w-full overflow-y-scroll snap-y snap-mandatory scrollbar-hide">
      <div v-for="(video, index) in feedStore.feed" :key="video.id"
        class="relative w-full h-full snap-start snap-always flex items-center justify-center bg-gray-900"
        :data-video-id="video.id" :ref="(el) => observeElement(el as Element)">
        <!--
          REAL VIDEO IMPLEMENTATION
          1. playsinline: Prevents iOS fullscreen
          2. loop: Removed so we can detect 'ended' event for XP
          3. object-cover: Ensures "TikTok" style full screen fill
        -->
        <video class="absolute inset-0 w-full h-full object-cover cursor-pointer" :src="video.url" type="video/avi"
          :poster="video.thumbnailUrl" autoplay playsinline webkit-playsinline @click="toggleVideo($event)"
          @dblclick="toggleLike" @ended="handleVideoEnd(video)">
          Your browser does not support the video tag.
        </video>

        <!-- Play/Pause Icon Overlay (Fades out when playing) -->
        <div
          class="absolute inset-0 flex items-center justify-center pointer-events-none transition-opacity duration-300"
          :class="isPlaying ? 'opacity-0' : 'opacity-100'">
          <!-- Only show Play icon if we want a visual cue when paused manually -->
          <!-- <div class="bg-black/40 p-4 rounded-full backdrop-blur-sm">
            <span class="text-4xl">▶️</span>
          </div> -->
        </div>

        <!-- UI Overlays (Text & Buttons) -->
        <div class="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/60 pointer-events-none">

          <!-- Bottom Text Info -->
          <div class="absolute bottom-24 left-4 right-16 flex flex-col gap-2 text-left pointer-events-auto">
            <div class="inline-flex items-center gap-2">
              <span class="bg-primary/80 text-xs font-bold px-2 py-1 rounded-md backdrop-blur-md">
                New
              </span>
              <span class="bg-black/40 text-xs px-2 py-1 rounded-md backdrop-blur-md border border-white/10">
                ⏱️ {{ video.durationSeconds }}s
              </span>
            </div>
            <h2 class="text-xl font-bold text-white leading-tight drop-shadow-md">
              {{ video.title }}
            </h2>
            <p class="text-sm text-gray-200 opacity-90 line-clamp-2">
              Mastering soft skills in 60 seconds. #{{ video.id }}
            </p>
          </div>

          <!-- Right Sidebar Actions -->
          <div class="absolute bottom-24 right-2 flex flex-col items-center gap-6 pointer-events-auto">
            <button class="flex flex-col items-center gap-1 group" @click="toggleLike">
              <div
                class="w-10 h-10 rounded-full bg-gray-800/50 backdrop-blur-sm flex items-center justify-center group-active:scale-90 transition hover:bg-gray-700/50">
                ❤️
              </div>
              <span class="text-xs font-medium">872</span>
            </button>

            <button class="flex flex-col items-center gap-1 group">
              <div
                class="w-10 h-10 rounded-full bg-gray-800/50 backdrop-blur-sm flex items-center justify-center group-active:scale-90 transition hover:bg-gray-700/50">
                💬
              </div>
              <span class="text-xs font-medium">45</span>
            </button>

            <button class="flex flex-col items-center gap-1 group">
              <div
                class="w-10 h-10 rounded-full bg-gray-800/50 backdrop-blur-sm flex items-center justify-center group-active:scale-90 transition hover:bg-gray-700/50">
                🚀
              </div>
              <span class="text-xs font-medium">Share</span>
            </button>
          </div>
        </div>
      </div>

      <!-- Spacer for Bottom Nav -->
      <div class="h-20 snap-start"></div>
    </div>
  </div>
</template>
