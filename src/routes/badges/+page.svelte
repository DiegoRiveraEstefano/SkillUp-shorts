<script lang="ts">
	import { achievements } from '$lib/stores/achievements';
	import Badge from '$lib/components/Badge.svelte';
</script>

<div class="container mx-auto p-4">
	<h1 class="mb-8 text-4xl font-bold">Todos los Logros</h1>
	<div class="grid grid-cols-1 gap-6 md:grid-cols-2">
		{#each $achievements as achievement}
			<Badge {achievement} />
		{/each}
	</div>
</div>
