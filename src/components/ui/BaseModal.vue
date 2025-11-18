<script setup lang="ts">
defineProps<{
  isOpen: boolean
  title?: string
}>()

defineEmits(['close'])
</script>

<template>
  <Teleport to="body">
    <Transition enter-active-class="transition duration-200 ease-out" enter-from-class="opacity-0"
      enter-to-class="opacity-100" leave-active-class="transition duration-150 ease-in" leave-from-class="opacity-100"
      leave-to-class="opacity-0">
      <div v-if="isOpen" class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-900/40 backdrop-blur-sm"
        @click.self="$emit('close')">
        <div class="bg-white w-full max-w-sm rounded-3xl shadow-xl p-6 relative transform transition-all">
          <button @click="$emit('close')" class="absolute top-4 right-4 text-gray-400 hover:text-gray-600">
            ✕
          </button>

          <h3 v-if="title" class="text-xl font-bold text-center text-gray-800 mb-4">
            {{ title }}
          </h3>

          <div class="text-center">
            <slot />
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>
