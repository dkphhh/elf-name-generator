<script lang="ts">
	import '../app.css';
	import NavBar from '$lib/components/page-section/NavBar.svelte';
	import favicon from '$lib/assets/favicon.png';
	import { injectAnalytics } from '@vercel/analytics/sveltekit';
	import Notification from '$lib/components/common-components/notification/Notification.svelte';
	import { injectSpeedInsights } from '@vercel/speed-insights/sveltekit';
	import Footer from '$lib/components/page-section/Footer.svelte';
	// import ColorModeButton from '$lib/components/ColorModeButton.svelte';

	let { children } = $props();

	injectAnalytics();
	injectSpeedInsights();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<Notification />
<!-- <ColorModeButton /> -->
<div>
	<NavBar />
	{@render children()}
	<Footer />
</div>
