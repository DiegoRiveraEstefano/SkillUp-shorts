<script setup lang="ts">
import { onMounted } from 'vue'
import { useUserStore } from '@/stores/userStore'
import { useBadgeStore } from '@/stores/badgeStore'
import BaseAvatar from '@/components/ui/BaseAvatar.vue'
import BaseProgressBar from '@/components/ui/BaseProgressBar.vue'

const userStore = useUserStore()
const badgeStore = useBadgeStore()

onMounted(async () => {
  if (!userStore.currentUser) await userStore.fetchProfile()
  if (badgeStore.badges.length === 0) await badgeStore.fetchBadges()
})
</script>

<template>
  <div class="min-h-full bg-gray-50">
    <div class="bg-white p-6 pt-8 text-center rounded-b-[40px] shadow-soft mb-6 relative overflow-hidden">
      <div class="absolute top-[-50%] left-[-20%] w-[150%] h-[200%] bg-primary/5 rounded-full pointer-events-none">
      </div>

      <div class="relative z-10 flex flex-col items-center">
        <div class="p-1 bg-white rounded-full shadow-md mb-3">
          <BaseAvatar :name="userStore.currentUser?.name || 'User'" :src="userStore.currentUser?.avatarUrl" size="xl" />
        </div>

        <h2 class="text-xl font-bold text-gray-900">
          {{ userStore.currentUser?.name || 'Guest User' }}
        </h2>
        <p class="text-sm text-gray-500 mb-4">Junior Developer</p>

        <div class="w-full max-w-xs">
          <div class="flex justify-between text-xs font-bold text-gray-400 mb-1 uppercase tracking-wider">
            <span>Level {{ userStore.currentLevel }}</span>
            <span>{{ userStore.levelProgress }}/100 XP</span>
          </div>
          <BaseProgressBar :progress="userStore.levelProgress" color="primary" height="h-3" />
        </div>
      </div>
    </div>

    <div class="grid grid-cols-2 gap-4 px-6 mb-8">
      <div class="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center">
        <span class="text-3xl mb-1">🔥</span>
        <span class="text-2xl font-bold text-gray-900">{{ userStore.currentUser?.streak || 0 }}</span>
        <span class="text-xs text-gray-400 uppercase font-bold tracking-wide">Day Streak</span>
      </div>
      <div class="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center">
        <span class="text-3xl mb-1">🏆</span>
        <span class="text-2xl font-bold text-gray-900">{{ badgeStore.unlockedCount }}</span>
        <span class="text-xs text-gray-400 uppercase font-bold tracking-wide">Badges</span>
      </div>
    </div>

    <div class="px-6 pb-24">
      <h3 class="text-lg font-bold text-gray-900 mb-4">Achievements</h3>

      <div v-if="badgeStore.loading" class="grid grid-cols-3 gap-4">
        <div v-for="i in 3" :key="i" class="aspect-square bg-gray-200 rounded-2xl animate-pulse"></div>
      </div>

      <div v-else class="grid grid-cols-3 gap-4">
        <button v-for="badge in badgeStore.badges" :key="badge.id"
          class="group relative aspect-square rounded-2xl flex flex-col items-center justify-center p-2 transition-all duration-300"
          :class="badge.isUnlocked ? 'bg-white shadow-soft hover:-translate-y-1' : 'bg-gray-100 opacity-60'">
          <div class="text-3xl mb-2 filter transition-all duration-300"
            :class="{ 'grayscale blur-[1px]': !badge.isUnlocked }">
            {{ badge.icon }}
          </div>

          <span class="text-[10px] font-bold text-center leading-tight"
            :class="badge.isUnlocked ? 'text-gray-800' : 'text-gray-400'">
            {{ badge.name }}
          </span>

          <div v-if="!badge.isUnlocked" class="absolute top-2 right-2 text-gray-400">
            <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd"
                d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                clip-rule="evenodd"></path>
            </svg>
          </div>
        </button>
      </div>
    </div>
  </div>
</template>
