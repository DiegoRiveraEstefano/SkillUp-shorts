<script setup lang="ts">
import { ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const navItems = ref([
  { name: 'Home', path: '/', icon: 'material:home-outline' },
  { name: 'Feed', path: '/feed', icon: 'material:dynamic-feed-outline' },
  { name: 'Courses', path: '/courses', icon: 'material:school-outline' },
  { name: 'Badges', path: '/badges', icon: 'material:military-tech-outline' },
])
</script>

<template>
  <nav class="fixed bottom-0 left-0 right-0 bg-white shadow-soft">
    <div class="flex justify-around max-w-screen-sm mx-auto">
      <RouterLink
        v-for="item in navItems"
        :key="item.name"
        :to="item.path"
        class="flex flex-col items-center justify-center w-full pt-2 pb-1 text-sm"
        :class="route.path === item.path ? 'text-primary' : 'text-gray-500'"
      >
        <span :class="item.icon" class="text-2xl"></span>
        <span class="text-xs">{{ item.name }}</span>
      </RouterLink>
    </div>
  </nav>
</template>
