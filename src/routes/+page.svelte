<script lang="ts">
	import { users } from '$lib/stores/users';
	import { base } from '$app/paths';

	// Mock user for display
	const user = $users[0];

	const navItems = [
		{
			href: `${base}/courses`,
			title: 'Explorar Cursos',
			description: 'Navega por los cursos y mejora tus habilidades.',
			icon: '📚'
		},
		{
			href: `${base}/videos`,
			title: 'Ver Vídeos',
			description: 'Accede a todos los vídeos de formato corto.',
			icon: '🎬'
		},
		{
			href: `${base}/leaderboard`,
			title: 'Clasificación',
			description: 'Comprueba quién lidera la competición.',
			icon: '🏆'
		},
		{
			href: `${base}/badges`,
			title: 'Tus Logros',
			description: 'Revisa las insignias y logros que has conseguido.',
			icon: '🏅'
		}
	];
</script>

<div class="container mx-auto flex min-h-screen flex-col items-center justify-center p-4 text-white">
	<header class="text-center">
		<h1 class="text-5xl font-extrabold">Bienvenido a SkillUp Shorts</h1>
		<p class="mt-2 text-lg text-gray-400">Tu camino hacia el microaprendizaje empieza aquí.</p>
	</header>

	<div class="my-8 rounded-lg bg-gray-800 p-6 text-center">
		<h2 class="text-2xl font-bold">{user.full_name}</h2>
		<p class="text-xl text-yellow-400">{user.points} Puntos</p>
	</div>

	<div class="grid w-full max-w-4xl grid-cols-1 gap-6 md:grid-cols-2">
		{#each navItems as item}
			<a
				href={item.href}
				class="flex items-center space-x-4 rounded-lg bg-gray-800 p-6 transition-transform hover:scale-105 hover:bg-gray-700"
			>
				<div class="text-4xl">{item.icon}</div>
				<div>
					<h3 class="text-xl font-bold">{item.title}</h3>
					<p class="text-gray-400">{item.description}</p>
				</div>
			</a>
		{/each}
	</div>
</div>
