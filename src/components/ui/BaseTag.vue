<script setup lang="ts">
defineProps<{
  variant?: 'primary' | 'secondary' | 'accent' | 'gray'
}>()
</script>

<template>
  <span class="inline-flex items-center px-2.5 py-0.5 rounded-lg text-xs font-semibold transition-colors" :class="{
    'bg-primary/10 text-primary': variant === 'primary' || !variant,
    'bg-secondary/10 text-secondary': variant === 'secondary',
    'bg-accent/20 text-green-700': variant === 'accent',
    'bg-gray-100 text-gray-600': variant === 'gray',
  }">
    <slot />
  </span>
</template>
