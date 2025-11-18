// src/stores/courseStore.ts
import { defineStore } from 'pinia'
import type { Course } from '@/types'

export const useCourseStore = defineStore('course', {
  state: () => ({
    courses: [] as Course[],
    loading: false,
    activeCourseId: null as string | null,
  }),
  getters: {
    activeCourse: (state) => state.courses.find((c) => c.id === state.activeCourseId),
    totalProgress: (state) => {
      if (state.courses.length === 0) return 0
      const total = state.courses.reduce((acc, curr) => acc + curr.progress, 0)
      return total / state.courses.length
    },
  },
  actions: {
    async fetchCourses() {
      this.loading = true
      // Simulate API call
      setTimeout(() => {
        this.courses = [
          {
            id: '1',
            title: 'Effective Daily Standups',
            description: 'Master the art of brevity.',
            category: 'Communication',
            modules: [],
            progress: 30,
          },
        ] // Mock data
        this.loading = false
      }, 500)
    },
  },
})
