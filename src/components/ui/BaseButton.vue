<script setup lang="ts">
defineProps<{
  variant?: 'primary' | 'secondary' | 'outline'
}>()
</script>

<template>
  <button class="px-6 py-3 rounded-2xl font-medium transition-all duration-200 active:scale-95 shadow-soft" :class="{
    'bg-primary text-white hover:bg-opacity-90': variant === 'primary' || !variant,
    'bg-secondary text-white hover:bg-opacity-90': variant === 'secondary',
    'border-2 border-primary text-primary bg-transparent': variant === 'outline'
  }">
    <slot />
  </button>
</template>
