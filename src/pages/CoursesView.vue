<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import { useCourseStore } from '@/stores/courseStore'
import BaseInput from '@/components/ui/BaseInput.vue'
import CourseCard from '@/components/ui/CourseCard.vue'

const courseStore = useCourseStore()
const searchQuery = ref('')
const selectedCategory = ref('All')

const categories = ['All', 'Communication', 'Leadership', 'Teamwork']

onMounted(() => {
  courseStore.fetchCourses()
})

// Filter logic
const filteredCourses = computed(() => {
  let result = courseStore.courses

  if (selectedCategory.value !== 'All') {
    result = result.filter(c => c.category === selectedCategory.value)
  }

  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase()
    result = result.filter(c => c.title.toLowerCase().includes(query))
  }

  return result
})
</script>

<template>
  <div class="min-h-full bg-gray-50">
    <div class="bg-white p-6 pb-4 rounded-b-[30px] shadow-soft mb-6">
      <h1 class="text-2xl font-bold text-gray-900 mb-1">Explore Skills</h1>
      <p class="text-sm text-gray-500 mb-4">What do you want to improve today?</p>

      <BaseInput v-model="searchQuery" placeholder="Search topics..." class="mb-4" />

      <div class="flex gap-2 overflow-x-auto pb-2 scrollbar-hide -mx-2 px-2">
        <button v-for="cat in categories" :key="cat" @click="selectedCategory = cat"
          class="whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-all duration-200" :class="selectedCategory === cat
            ? 'bg-primary text-white shadow-soft'
            : 'bg-gray-100 text-gray-500 hover:bg-gray-200'">
          {{ cat }}
        </button>
      </div>
    </div>

    <div class="px-6 flex flex-col gap-4 pb-24">
      <div v-if="courseStore.loading" class="space-y-4">
        <div class="h-32 bg-gray-200 rounded-2xl animate-pulse"></div>
        <div class="h-32 bg-gray-200 rounded-2xl animate-pulse"></div>
      </div>

      <template v-else>
        <CourseCard v-for="course in filteredCourses" :key="course.id" :course="course" />

        <div v-if="filteredCourses.length === 0" class="text-center py-10 text-gray-400">
          No courses found matching your search.
        </div>
      </template>
    </div>
  </div>
</template>
