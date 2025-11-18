// src/stores/feedStore.ts
import { defineStore } from 'pinia'
import type { VideoContent } from '@/types'

export const useFeedStore = defineStore('feed', {
  state: () => ({
    feed: [] as VideoContent[],
    currentIndex: 0,
    isLoading: false,
    hasMore: true,
  }),

  getters: {
    currentVideo: (state): VideoContent | undefined => state.feed[state.currentIndex],
    isFirstVideo: (state) => state.currentIndex === 0,
    isLastVideo: (state) => state.currentIndex === state.feed.length - 1,
  },

  actions: {
    async loadFeed() {
      if (this.isLoading) return
      this.isLoading = true

      // Simulate fetching video feed
      setTimeout(() => {
        const newVideos: VideoContent[] = [
          {
            id: 'v1',
            title: 'Active Listening 101',
            url: '/videos/video-1.mp4', // placeholder
            durationSeconds: 45,
            thumbnailUrl: 'https://picsum.photos/seed/v1/300/500',
          },
          {
            id: 'v2',
            title: 'Giving Constructive Feedback',
            url: '/videos/video-2.mp4',
            durationSeconds: 60,
            thumbnailUrl: 'https://picsum.photos/seed/v2/300/500',
          },
          {
            id: 'v3',
            title: 'Email Etiquette for Devs',
            url: '/videos/video-3.mp4',
            durationSeconds: 30,
            thumbnailUrl: 'https://picsum.photos/seed/v3/300/500',
          },
          {
            id: 'v4',
            title: 'Building a Web App with Vue.js',
            url: '/videos/video-4.mp4',
            durationSeconds: 30,
            thumbnailUrl: 'https://picsum.photos/seed/v3/300/500',
          },
          {
            id: 'v5',
            title: 'Mastering CSS Animations',
            url: '/videos/video-5.mp4',
            durationSeconds: 30,
            thumbnailUrl: 'https://picsum.photos/seed/v3/300/500',
          },
        ]

        this.feed.push(...newVideos)
        this.isLoading = false
      }, 800)
    },

    nextVideo() {
      if (this.currentIndex < this.feed.length - 1) {
        this.currentIndex++
      } else if (this.hasMore) {
        this.loadFeed() // Auto-load more when reaching end
      }
    },

    prevVideo() {
      if (this.currentIndex > 0) {
        this.currentIndex--
      }
    },

    resetFeed() {
      this.currentIndex = 0
      this.feed = []
      this.hasMore = true
    },
  },
})
