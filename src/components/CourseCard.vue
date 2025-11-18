<script setup lang="ts">
import type { Course } from '@/data'

defineProps<{
  course: Course
}>()
</script>

<template>
  <div class="bg-white p-4 rounded-lg shadow-soft">
    <h3 class="text-lg font-semibold text-gray-800">{{ course.title }}</h3>
    <p class="mt-1 text-gray-600">{{ course.description }}</p>
    <div class="mt-4 flex items-center justify-between">
      <span class="text-sm text-gray-500">{{ Math.ceil(course.duration / 60) }} min</span>
      <button class="bg-primary text-white px-4 py-2 rounded-md text-sm font-medium">
        Start
      </button>
    </div>
  </div>
</template>
