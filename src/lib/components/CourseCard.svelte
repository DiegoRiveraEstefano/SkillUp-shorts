<script lang="ts">
	import type { Course } from '$lib/types';

	export let course: Course;
</script>

<a href={`/courses/${course.id}`} class="block rounded-lg bg-gray-800 p-6 transition-transform hover:scale-105">
	<h3 class="text-xl font-bold text-white">{course.title}</h3>
	<p class="mt-2 text-gray-400">{course.description}</p>
</a>
