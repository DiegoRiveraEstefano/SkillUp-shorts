<script lang="ts">
	import type { LeaderboardEntry } from '$lib/types';

	export let entry: LeaderboardEntry;
</script>

<div class="flex items-center justify-between rounded-lg bg-gray-800 p-4">
	<div class="flex items-center space-x-4">
		<span class="text-lg font-bold text-gray-400">#{entry.rank}</span>
		<img src={entry.avatar_url} alt={entry.full_name} class="h-12 w-12 rounded-full" />
		<div>
			<h4 class="font-bold text-white">{entry.full_name}</h4>
		</div>
	</div>
	<div class="text-lg font-bold text-yellow-400">{entry.points} PTS</div>
</div>
