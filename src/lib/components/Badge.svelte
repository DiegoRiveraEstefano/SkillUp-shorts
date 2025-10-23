<script lang="ts">
	import type { Achievement } from '$lib/types';

	export let achievement: Achievement;
</script>

<div class="flex items-center space-x-4 rounded-lg bg-gray-800 p-4">
	<img src={achievement.icon_url} alt={achievement.title} class="h-16 w-16" />
	<div>
		<h3 class="text-lg font-bold text-white">{achievement.title}</h3>
		<p class="text-sm text-gray-400">{achievement.description}</p>
		<p class="text-xs text-gray-500">Criterio: {achievement.criteria}</p>
	</div>
</div>
