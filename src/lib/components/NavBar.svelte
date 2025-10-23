<script lang="ts">
	import { page } from '$app/stores';

	const navLinks = [
		{ href: '/courses', label: 'Cursos' },
		{ href: '/leaderboard', label: 'Leaderboard' },
		{ href: '/profile', label: 'Perfil' }
	];
</script>

<nav class="fixed top-0 left-0 right-0 z-10 bg-gray-900/80 backdrop-blur-sm">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="flex h-16 items-center justify-between">
			<div class="flex items-center">
				<a href="/" class="flex-shrink-0 text-white text-2xl font-bold">
					SkillUp
				</a>
			</div>
			<div class="hidden md:block">
				<div class="ml-10 flex items-baseline space-x-4">
					{#each navLinks as link}
						<a
							href={link.href}
							class="rounded-md px-3 py-2 text-sm font-medium transition-colors {
								$page.url.pathname === link.href
									? 'bg-gray-900 text-white'
									: 'text-gray-300 hover:bg-gray-700 hover:text-white'
							}"
							aria-current={$page.url.pathname === link.href ? 'page' : undefined}
						>
							{link.label}
						</a>
					{/each}
				</div>
			</div>
		</div>
	</div>
</nav>
