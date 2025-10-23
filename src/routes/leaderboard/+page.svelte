<script lang="ts">
	import { leaderboard } from '$lib/stores/leaderboard';
	import LeaderboardItem from '$lib/components/LeaderboardItem.svelte';
</script>

<div class="container mx-auto p-4">
	<h1 class="mb-8 text-4xl font-bold">Leaderboard</h1>
	<div class="flex flex-col space-y-4">
		{#each $leaderboard as entry}
			<LeaderboardItem {entry} />
		{/each}
	</div>
</div>
