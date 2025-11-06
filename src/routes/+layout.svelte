<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.ico';
	import { injectAnalytics } from '@vercel/analytics/sveltekit';
	import Notification from '$lib/components/common-components/notification/Notification.svelte';
	import { injectSpeedInsights } from '@vercel/speed-insights/sveltekit';
	// import ColorModeButton from '$lib/components/ColorModeButton.svelte';

	injectSpeedInsights();
	let { children } = $props();
	injectAnalytics();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<Notification />
<!-- <ColorModeButton /> -->
<div>
	{@render children()}
</div>
