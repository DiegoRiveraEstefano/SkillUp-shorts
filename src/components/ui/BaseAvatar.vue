<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(defineProps<{
  src?: string
  name: string
  size?: 'sm' | 'md' | 'lg' | 'xl'
}>(), {
  size: 'md'
})

const initials = computed(() => {
  return props.name
    .split(' ')
    .map(n => n[0])
    .slice(0, 2)
    .join('')
    .toUpperCase()
})

const sizeClasses = {
  sm: 'w-8 h-8 text-xs',
  md: 'w-12 h-12 text-sm',
  lg: 'w-16 h-16 text-base',
  xl: 'w-24 h-24 text-xl'
}
</script>

<template>
  <div
    class="relative rounded-full overflow-hidden bg-secondary/20 flex items-center justify-center text-secondary font-bold border-2 border-white shadow-soft"
    :class="sizeClasses[size]">
    <img v-if="src" :src="src" :alt="name" class="w-full h-full object-cover" />
    <span v-else>{{ initials }}</span>
  </div>
</template>
