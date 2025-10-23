<script lang="ts">
	import type { User, Achievement } from '$lib/types';
	import { achievements } from '$lib/stores/achievements';
	import Badge from './Badge.svelte';

	export let user: User;

	let userAchievements: Achievement[] = [];
	$: userAchievements = $achievements.filter((ach) => user.unlocked_achievements.includes(ach.id));
</script>

<div class="flex flex-col items-center space-y-6 rounded-lg bg-gray-800 p-8">
	<img src={user.avatar_url} alt={user.full_name} class="h-32 w-32 rounded-full border-4 border-blue-500" />

	<div class="text-center">
		<h2 class="text-3xl font-bold text-white">{user.full_name}</h2>
		<p class="text-lg text-yellow-400">{user.points} PTS</p>
	</div>

	<div class="w-full">
		<h3 class="mb-4 text-xl font-bold text-white">Logros Desbloqueados</h3>
		<div class="grid grid-cols-1 gap-4 md:grid-cols-2">
			{#each userAchievements as achievement}
				<Badge {achievement} />
			{:else}
				<p class="text-gray-400">Aún no has desbloqueado ningún logro.</p>
			{/each}
		</div>
	</div>

	<div class="w-full">
		<h3 class="mb-4 text-xl font-bold text-white">Videos Completados</h3>
		<p class="text-gray-400">Has completado {user.completed_videos.length} videos.</p>
	</div>
</div>
