<script lang="ts">
	import type { Video } from '$lib/types';

	export let video: Video;
</script>

<a href={`/videos/${video.id}`} class="block rounded-lg bg-gray-800 p-4 transition-transform hover:bg-gray-700">
	<h4 class="text-lg font-semibold text-white">{video.title}</h4>
	<p class="text-sm text-gray-400">{video.description}</p>
	<span class="text-xs text-gray-500">Duración: {video.duration}s</span>
</a>
