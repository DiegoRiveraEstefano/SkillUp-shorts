<script setup lang="ts">
defineProps<{
  progress: number // 0 to 100
  color?: 'primary' | 'secondary' | 'accent'
  height?: string
}>()
</script>

<template>
  <div class="w-full bg-gray-100 rounded-full overflow-hidden" :class="height || 'h-2'">
    <div class="h-full rounded-full transition-all duration-700 ease-out shadow-sm"
      :style="{ width: `${Math.min(Math.max(progress, 0), 100)}%` }" :class="{
        'bg-primary': color === 'primary',
        'bg-secondary': color === 'secondary',
        'bg-accent': color === 'accent' || !color
      }"></div>
  </div>
</template>
