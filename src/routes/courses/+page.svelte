<script lang="ts">
	import { courses } from '$lib/stores/courses';
	import CourseCard from '$lib/components/CourseCard.svelte';
</script>

<div class="container mx-auto p-4">
	<h1 class="mb-8 text-4xl font-bold">Cursos</h1>
	<div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
		{#each $courses as course}
			<CourseCard {course} />
		{/each}
	</div>
</div>
