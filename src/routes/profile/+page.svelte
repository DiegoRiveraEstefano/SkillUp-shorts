<script lang="ts">
	import { users } from '$lib/stores/users';
	import UserProfile from '$lib/components/UserProfile.svelte';

	// For demonstration, we'll just display the first user.
	const user = $users[0];
</script>

<div class="container mx-auto p-4">
	<UserProfile {user} />
</div>
