<script lang="ts">
	import { courses } from '$lib/stores/courses';
	import { base } from '$app/paths';

	//const courseId = globalThis.page.params.id;
    const params = globalThis.Para;
	const course = $courses.find((c) => c.id === courseId);

	if (!course) {
		throw new Error(`Course ${courseId} not found`);
	}
</script>

<div class="container mx-auto p-4">
	<h1 class="mb-8 text-4xl font-bold">Curso #{course.id}</h1>
	<div class="grid grid-cols-1 gap-6 md:grid-cols-2">
		<div class="flex flex-col space-y-4">
			<h2 class="text-2xl font-bold">Descripción</h2>
			<p class="text-lg text-gray-400">{course.description}</p>
		</div>
		<div class="flex flex-col space-y-4">
			<h2 class="text-2xl font-bold">Videos</h2>
			<div class="grid grid-cols-1 gap-6 md:grid-cols-2">
				{#each course.videos as video}
					<a
						href={`${base}/videos/${video.id}`}
						class="flex items-center space-x-4 rounded-lg bg-gray-800 p-6 transition-transform hover:scale-105 hover:bg-gray-700"
					>
						<div class="text-4xl">{video.icon}</div>
						<div>
							<h3 class="text-xl font-bold">{video.title}</h3>
							<p class="text-gray-400">{video.description}</p>
						</div>
					</a>
				{/each}
			</div>
		</div>
	</div>
</div>