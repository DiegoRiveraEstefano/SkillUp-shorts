<script setup lang="ts">
import type { Course } from '@/types'

defineProps<{
  course: Course
}>()
</script>

<template>
  <div class="bg-white p-4 rounded-2xl shadow-soft border border-gray-100 flex flex-col gap-2">
    <div class="flex justify-between items-start">
      <span class="text-xs font-bold text-primary bg-blue-50 px-2 py-1 rounded-lg">
        {{ course.category }}
      </span>
    </div>
    <h3 class="text-lg font-semibold text-gray-900">{{ course.title }}</h3>
    <p class="text-sm text-gray-500">{{ course.description }}</p>

    <div class="w-full bg-gray-100 rounded-full h-2 mt-2">
      <div class="bg-accent h-2 rounded-full transition-all duration-500" :style="{ width: `${course.progress}%` }">
      </div>
    </div>
  </div>
</template>
