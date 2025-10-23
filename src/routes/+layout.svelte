<script lang="ts">
	import NavBar from '$lib/components/NavBar.svelte';
	import './styles.css';
</script>

<div class="min-h-screen bg-gray-900 text-white">
	<NavBar />
	<main class="pt-20">
		<slot />
	</main>
</div>
