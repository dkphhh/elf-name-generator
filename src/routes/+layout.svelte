<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	import Notification from '$lib/components/notification/Notification.svelte';
	import ColorModeButton from '$lib/components/ColorModeButton.svelte';
	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<Notification />
<ColorModeButton />
<div>
	{@render children()}
</div>
