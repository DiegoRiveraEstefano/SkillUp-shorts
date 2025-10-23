<script lang="ts">
	import type { Video } from '$lib/types';

	export let video: Video;

	let player: HTMLVideoElement;

	function handlePlay() {
		if (player.paused) {
			player.play();
		} else {
			player.pause();
		}
	}
</script>

<div class="relative h-full w-full snap-start overflow-hidden rounded-lg bg-black">
	<video
		bind:this={player}
		class="h-full w-full object-contain"
		src={video.video_url}
		loop
		playsinline
		preload="auto"
	></video>

	<div class="absolute inset-0 flex items-center justify-center" on:click={handlePlay}>
		{#if player && player.paused}
			<button class="text-white opacity-80 transition-opacity hover:opacity-100">
				<svg xmlns="http://www.w3.org/2000/svg" class="h-20 w-20" viewBox="0 0 20 20" fill="currentColor">
					<path
						fill-rule="evenodd"
						d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
						clip-rule="evenodd"
					/>
				</svg>
			</button>
		{/if}
	</div>

	<div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4 text-white">
		<h3 class="text-lg font-bold">{video.title}</h3>
		<p class="text-sm">{video.description}</p>
		<div class="mt-2 text-xs text-gray-300">Duración: {video.duration}s</div>
	</div>
</div>
