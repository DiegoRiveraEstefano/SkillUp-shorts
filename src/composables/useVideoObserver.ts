import { onMounted, onUnmounted, ref } from 'vue'

export function useVideoObserver() {
  const observer = ref<IntersectionObserver | null>(null)
  // Track which video ID is currently active/visible
  const activeVideoId = ref<string | null>(null)

  /**
   * Callback for the IntersectionObserver.
   * It finds the element with the highest intersection ratio (most visible).
   */
  const handleIntersection = (entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Get the video ID from the data attribute
        const videoId = (entry.target as HTMLElement).dataset.videoId
        if (videoId) {
          activeVideoId.value = videoId

          // Logic to play the video element inside this container
          const videoEl = entry.target.querySelector('video')
          if (videoEl)
            videoEl.play().catch(() => {
              /* Auto-play prevented logic */
            })
        }
      } else {
        // Pause videos that scroll out of view to save resources
        const videoEl = entry.target.querySelector('video')
        if (videoEl) {
          videoEl.pause()
          videoEl.currentTime = 0 // Optional: reset to start
        }
      }
    })
  }

  // Setup the observer
  onMounted(() => {
    observer.value = new IntersectionObserver(handleIntersection, {
      root: null, // viewport
      rootMargin: '0px',
      threshold: 0.7, // Trigger when 70% of the video is visible
    })
  })

  onUnmounted(() => {
    observer.value?.disconnect()
  })

  /**
   * Helper to attach a DOM element to the observer
   */
  const observeElement = (el: Element | null) => {
    if (el && observer.value) {
      observer.value.observe(el)
    }
  }

  return {
    activeVideoId,
    observeElement,
  }
}
