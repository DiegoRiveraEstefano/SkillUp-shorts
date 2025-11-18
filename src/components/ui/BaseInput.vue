<script setup lang="ts">
defineProps<{
  modelValue: string
  label?: string
  placeholder?: string
  type?: string
  error?: string
}>()

defineEmits(['update:modelValue'])
</script>

<template>
  <div class="flex flex-col gap-1.5 w-full">
    <label v-if="label" class="text-sm font-medium text-gray-700 ml-1">
      {{ label }}
    </label>
    <input :type="type || 'text'" :value="modelValue"
      @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)" :placeholder="placeholder"
      class="w-full px-4 py-3 rounded-2xl bg-gray-50 border border-transparent text-gray-900 placeholder-gray-400 outline-none transition-all duration-200 focus:bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 shadow-sm"
      :class="{ 'border-red-300 focus:border-red-400 focus:ring-red-100': error }" />
    <span v-if="error" class="text-xs text-red-500 ml-1">{{ error }}</span>
  </div>
</template>
