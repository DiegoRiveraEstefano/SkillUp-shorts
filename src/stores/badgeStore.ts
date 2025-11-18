// src/stores/badgeStore.ts
import { defineStore } from 'pinia'
import type { Badge } from '@/types'

export const useBadgeStore = defineStore('badge', {
  state: () => ({
    badges: [] as Badge[],
    newUnlockQueue: [] as Badge[], // Queue to show popup notifications
    loading: false,
  }),

  getters: {
    unlockedBadges: (state) => state.badges.filter((b) => b.isUnlocked),
    lockedBadges: (state) => state.badges.filter((b) => !b.isUnlocked),
    totalBadgesCount: (state) => state.badges.length,
    unlockedCount: (state) => state.badges.filter((b) => b.isUnlocked).length,
  },

  actions: {
    async fetchBadges() {
      this.loading = true
      // Simulate API loading
      setTimeout(() => {
        this.badges = [
          {
            id: 'b1',
            name: 'First Step',
            description: 'Complete your first video lesson.',
            icon: '🌱',
            requiredXp: 10,
            isUnlocked: true,
          },
          {
            id: 'b2',
            name: 'Team Player',
            description: 'Complete the "Effective Communication" module.',
            icon: '🤝',
            requiredXp: 500,
            isUnlocked: false,
          },
          {
            id: 'b3',
            name: 'Streak Master',
            description: 'Maintain a 7-day learning streak.',
            icon: '🔥',
            requiredXp: 0,
            isUnlocked: false,
          },
        ]
        this.loading = false
      }, 300)
    },

    /**
     * Call this when an action occurs to check if a badge should be unlocked.
     * Realistically, this logic might happen on the backend, but here is the frontend implementation.
     */
    unlockBadge(badgeId: string) {
      const badge = this.badges.find((b) => b.id === badgeId)
      if (badge && !badge.isUnlocked) {
        badge.isUnlocked = true
        this.newUnlockQueue.push(badge) // Add to queue to trigger UI modal
      }
    },

    clearNotificationQueue() {
      this.newUnlockQueue = []
    },
  },
})
