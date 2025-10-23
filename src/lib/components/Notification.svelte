<script lang="ts">
	export let type: 'info' | 'success' | 'warning' | 'error' = 'info';
	export let message: string;

	const colors = {
		info: 'bg-blue-500',
		success: 'bg-green-500',
		warning: 'bg-yellow-500',
		error: 'bg-red-500'
	};
</script>

<div class="fixed top-20 right-4 rounded-lg p-4 text-white {colors[type]}">
	<p>{message}</p>
</div>
