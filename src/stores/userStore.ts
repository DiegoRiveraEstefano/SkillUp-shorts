// src/stores/userStore.ts
import { defineStore } from 'pinia'
import type { User } from '@/types'

export const useUserStore = defineStore('user', {
  state: () => ({
    currentUser: null as User | null,
    isAuthenticated: false,
    loading: false,
  }),

  getters: {
    // Calculate level based on XP: Level 1 starts at 0 XP, Level 2 at 100 XP, etc.
    currentLevel: (state) => {
      if (!state.currentUser) return 1
      return Math.floor(state.currentUser.xp / 100) + 1
    },
    // percentage to next level for progress bars
    levelProgress: (state) => {
      if (!state.currentUser) return 0
      return state.currentUser.xp % 100
    },
  },

  actions: {
    async fetchProfile() {
      this.loading = true
      // Simulate API call
      setTimeout(() => {
        this.currentUser = {
          id: 'u1',
          name: 'Alex Dev',
          email: 'alex@skillup.com',
          xp: 350, // Level 4
          streak: 5,
          avatarUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Alex',
        }
        this.isAuthenticated = true
        this.loading = false
      }, 300)
    },

    addXp(amount: number) {
      if (this.currentUser) {
        this.currentUser.xp += amount
      }
    },

    incrementStreak() {
      if (this.currentUser) {
        this.currentUser.streak += 1
      }
    },
  },
})
