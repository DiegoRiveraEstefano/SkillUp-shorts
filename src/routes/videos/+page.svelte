<script lang="ts">
	import { videos } from '$lib/stores/videos';
	import VideoListItem from '$lib/components/VideoListItem.svelte';
</script>

<div class="container mx-auto p-4">
	<h1 class="mb-8 text-4xl font-bold">Todos los Videos</h1>
	<div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
		{#each $videos as video}
			<VideoListItem {video} />
		{/each}
	</div>
</div>
