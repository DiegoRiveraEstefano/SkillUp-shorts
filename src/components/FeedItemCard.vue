<script setup lang="ts">
import type { FeedItem } from '@/data'

defineProps<{
  item: FeedItem
}>()

const icons = {
  new_course: 'material:new-releases-outline',
  recommendation: 'material:recommend-outline',
  badge_earned: 'material:military-tech-outline',
}
</script>

<template>
  <div class="bg-white p-4 rounded-lg shadow-soft flex items-start space-x-4">
    <span :class="icons[item.type]" class="text-2xl text-primary"></span>
    <div class="flex-1">
      <h3 class="text-lg font-semibold text-gray-800">{{ item.title }}</h3>
      <p class="mt-1 text-gray-600">{{ item.description }}</p>
      <button
        v-if="item.courseId"
        class="mt-2 text-primary text-sm font-medium"
      >
        View Course
      </button>
    </div>
  </div>
</template>
