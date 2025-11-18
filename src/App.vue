<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'
import { RouterView } from 'vue-router'
import BottomNavigation from '@/components/layout/BottomNavigation.vue'
import BaseModal from '@/components/ui/BaseModal.vue'
import { useUserStore } from '@/stores/userStore'
import { useBadgeStore } from '@/stores/badgeStore'
import { useToast } from '@/composables/useToast'

// --- Global Stores & State ---
const userStore = useUserStore()
const badgeStore = useBadgeStore()
const { toasts, removeToast } = useToast()

// --- Badge System Logic ---
const showBadgeModal = ref(false)
const currentBadge = ref<unknown>(null)

// Load initial data (User profile, existing badges)
onMounted(async () => {
  await userStore.fetchProfile()
  await badgeStore.fetchBadges()
})

// Watch for new badges added to the queue
watch(
  () => badgeStore.newUnlockQueue,
  (queue) => {
    // If we have a badge in queue and no modal is currently open
    if (queue.length > 0 && !showBadgeModal.value) {
      currentBadge.value = queue[0]
      showBadgeModal.value = true

      // Play a subtle success sound if you had audio assets
      // new Audio('/sounds/unlock.mp3').play()
    }
  },
  { deep: true }
)

const closeBadgeModal = () => {
  showBadgeModal.value = false

  // Remove the displayed badge from the queue after animation delay
  setTimeout(() => {
    if (badgeStore.newUnlockQueue.length > 0) {
      badgeStore.newUnlockQueue.shift()
    }

    // If there are MORE badges stacked up, show the next one immediately
    if (badgeStore.newUnlockQueue.length > 0) {
      currentBadge.value = badgeStore.newUnlockQueue[0]
      showBadgeModal.value = true
    }
  }, 300)
}
</script>

<template>
  <!--
    Root Container:
    - Applies the specific gray background from Design System.
    - Handles font defaults.
  -->
  <div class="min-h-screen bg-gray-50 font-sans text-gray-900 antialiased selection:bg-primary/20 flex justify-center">

    <!--
      Mobile Simulator / Main Content Wrapper
      - On Mobile: Full width/height.
      - On Desktop: Centered, rounded corners, max-width of a phone (md).
    -->
    <main
      class="w-full max-w-md bg-white shadow-2xl sm:my-4 sm:rounded-[30px] sm:min-h-[calc(100vh-2rem)] sm:h-[calc(100vh-2rem)] sm:overflow-hidden relative flex flex-col">

      <!-- Scrollable Content Area -->
      <!-- pb-20 ensures the last item isn't hidden behind the navbar -->
      <div class="flex-1 overflow-y-auto overflow-x-hidden pb-20 scrollbar-hide">
        <RouterView v-slot="{ Component }">
          <Transition enter-active-class="transition-opacity duration-200 ease-out" enter-from-class="opacity-0"
            enter-to-class="opacity-100" leave-active-class="transition-opacity duration-150 ease-in"
            leave-from-class="opacity-100" leave-to-class="opacity-0" mode="out-in">
            <component :is="Component" />
          </Transition>
        </RouterView>
      </div>

      <!-- Toast Notifications Overlay (Top Center) -->
      <div class="absolute top-6 left-0 right-0 z-50 flex flex-col items-center gap-2 pointer-events-none px-4">
        <TransitionGroup enter-active-class="transition all duration-300 ease-out"
          enter-from-class="opacity-0 -translate-y-4" enter-to-class="opacity-100 translate-y-0"
          leave-active-class="transition all duration-200 ease-in" leave-from-class="opacity-100 translate-y-0"
          leave-to-class="opacity-0 -translate-y-2">
          <button v-for="toast in toasts" :key="toast.id"
            class="pointer-events-auto px-4 py-2.5 rounded-full shadow-soft text-sm font-medium flex items-center gap-2 backdrop-blur-sm"
            :class="{
              'bg-success/20 text-green-800 border border-success/30': toast.type === 'success',
              'bg-red-100 text-red-800 border border-red-200': toast.type === 'error',
              'bg-white text-gray-800 border border-gray-200': toast.type === 'info',
            }" @click="removeToast(toast.id)">
            <!-- Status Icons -->
            <span v-if="toast.type === 'success'">🎉</span>
            <span v-else-if="toast.type === 'error'">⚠️</span>
            <span v-else>ℹ️</span>

            <span>{{ toast.message }}</span>
          </button>
        </TransitionGroup>
      </div>

      <!-- Mobile Navigation Bar -->
      <!-- Rendered relative to the phone container -->
      <BottomNavigation class="absolute bottom-0 w-full" />
    </main>

    <!--
      Global Modals (Teleported to Body for z-index safety,
      but styled to match the app theme)
    -->
    <BaseModal :isOpen="showBadgeModal" @close="closeBadgeModal">
      <div class="flex flex-col items-center text-center p-2" v-if="currentBadge">
        <!-- Animated Emoji Icon -->
        <div class="text-7xl mb-6 animate-bounce drop-shadow-md filter">
          {{ currentBadge.icon }}
        </div>

        <h2 class="text-2xl font-bold text-gray-900 mb-2">Badge Unlocked!</h2>

        <div class="bg-primary/10 px-4 py-1 rounded-full mb-4">
          <h3 class="text-sm font-bold text-primary uppercase tracking-wider">{{ currentBadge.name }}</h3>
        </div>

        <p class="text-gray-500 mb-8 leading-relaxed px-4">
          {{ currentBadge.description }}
        </p>

        <button @click="closeBadgeModal"
          class="w-full py-3.5 bg-primary text-white rounded-2xl font-semibold hover:bg-sky-500 active:scale-95 transition-all shadow-soft shadow-primary/30">
          Keep Learning
        </button>
      </div>
    </BaseModal>

  </div>
</template>

<style>
/* Hide scrollbar for Chrome, Safari and Opera */
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.scrollbar-hide {
  -ms-overflow-style: none;
  /* IE and Edge */
  scrollbar-width: none;
  /* Firefox */
}
</style>
