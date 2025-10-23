<script lang="ts">
	import type { Challenge } from '$lib/types';

	export let challenge: Challenge;
</script>

<div class="rounded-lg p-6" class:bg-green-900={challenge.is_active} class:bg-gray-800={!challenge.is_active}>
	<h3 class="text-xl font-bold text-white">{challenge.title}</h3>
	<p class="mt-2 text-gray-300">{challenge.description}</p>
	<div class="mt-4 flex items-center justify-between">
		<span class="font-bold text-yellow-400">{challenge.reward_points} PTS</span>
		{#if challenge.is_active}
			<span class="text-sm text-green-300">Activo</span>
		{:else}
			<span class="text-sm text-gray-400">Completado</span>
		{/if}
	</div>
</div>
