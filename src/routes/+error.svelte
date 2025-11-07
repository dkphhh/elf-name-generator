<script lang="ts">
	import { page } from '$app/state';
	import { resolve } from '$app/paths';
	import SeoTDK from '$lib/components/common-components/seo/SeoTDK.svelte';

	const errorStatus = $derived(page.status);
	const errorMessage = $derived(page.error?.message || 'An unexpected error occurred');

	const errorTitle = $derived.by(() => {
		if (errorStatus === 404) return 'Page Not Found';
		if (errorStatus === 500) return 'Server Error';
		if (errorStatus === 403) return 'Access Denied';
		return 'Oops! Something Went Wrong';
	});

	const errorDescription = $derived.by(() => {
		if (errorStatus === 404)
			return "The page you're looking for doesn't exist. It might have been moved or deleted.";
		if (errorStatus === 500)
			return "We're experiencing technical difficulties. Please try again later.";
		if (errorStatus === 403) return "You don't have permission to access this page.";
		return 'An unexpected error occurred. Please try again or return to the homepage.';
	});
</script>

<SeoTDK
	title={`${errorStatus} - ${errorTitle}`}
	description="An error occurred while loading this page. Return to the homepage to continue using our elf name generator."
	canonical="/error"
/>

<main class="container mx-auto px-4 py-8">
	<!-- Hero Section with Error Status -->
	<section class="mb-12 text-center">
		<div class="mb-4">
			<h1 class="text-9xl font-bold text-primary">{errorStatus}</h1>
		</div>
		<h2 class="mb-4 text-4xl font-bold md:text-6xl">{errorTitle}</h2>
		<p class="mx-auto max-w-2xl text-xl text-gray-600">
			{errorDescription}
		</p>
	</section>

	<!-- Error Details (for non-404 errors) -->
	{#if errorMessage && errorStatus !== 404}
		<section class="mx-auto mb-12 max-w-2xl">
			<div class="alert alert-error">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-6 w-6 shrink-0 stroke-current"
					fill="none"
					viewBox="0 0 24 24"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
					/>
				</svg>
				<span class="text-left">{errorMessage}</span>
			</div>
		</section>
	{/if}

	<!-- Action Buttons -->
	<section class="mx-auto mb-12 max-w-xl">
		<div class="flex flex-col gap-4 sm:flex-row">
			<a href={resolve('/')} class="btn flex-1 btn-lg btn-primary">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="mr-2 h-6 w-6"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
					/>
				</svg>
				Back to Homepage
			</a>

			<button onclick={() => window.history.back()} class="btn flex-1 btn-outline btn-lg">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="mr-2 h-6 w-6"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M10 19l-7-7m0 0l7-7m-7 7h18"
					/>
				</svg>
				Go Back
			</button>
		</div>
	</section>

	<!-- Quick Navigation -->
	<section class="mx-auto mb-12 max-w-4xl">
		<h2 class="mb-6 text-center text-2xl font-bold">Explore Our Site</h2>

		<div class="grid grid-cols-2 gap-4 md:grid-cols-4">
			<a href={resolve('/')} class="btn btn-outline">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					stroke-linecap="round"
					stroke-linejoin="round"
					class="lucide lucide-house-icon lucide-house icon-style"
					><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" /><path
						d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"
					/></svg
				>

				Home Page</a
			>
			<a href={resolve('/generator')} class="btn btn-outline">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					stroke-linecap="round"
					stroke-linejoin="round"
					class="lucide lucide-atom-icon lucide-atom icon-style"
					><circle cx="12" cy="12" r="1" /><path
						d="M20.2 20.2c2.04-2.03.02-7.36-4.5-11.9-4.54-4.52-9.87-6.54-11.9-4.5-2.04 2.03-.02 7.36 4.5 11.9 4.54 4.52 9.87 6.54 11.9 4.5Z"
					/><path
						d="M15.7 15.7c4.52-4.54 6.54-9.87 4.5-11.9-2.03-2.04-7.36-.02-11.9 4.5-4.52 4.54-6.54 9.87-4.5 11.9 2.03 2.04 7.36.02 11.9-4.5Z"
					/></svg
				>
				All Generator</a
			>
			<a href={resolve('/guide')} class="btn btn-outline">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					stroke-linecap="round"
					stroke-linejoin="round"
					class="lucide lucide-album-icon lucide-album icon-style"
					><rect width="18" height="18" x="3" y="3" rx="2" ry="2" /><polyline
						points="11 3 11 11 14 8 17 11 17 3"
					/></svg
				>
				Naming Guide</a
			>
			<a href={resolve('/about')} class="btn btn-outline">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					stroke-linecap="round"
					stroke-linejoin="round"
					class="lucide lucide-info-icon lucide-info icon-style"
					><circle cx="12" cy="12" r="10" /><path d="M12 16v-4" /><path d="M12 8h.01" /></svg
				>
				About Us</a
			>
		</div>
	</section>
</main>
