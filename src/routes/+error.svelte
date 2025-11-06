<script lang="ts">
	import { page } from '$app/state';
	import { resolve } from '$app/paths';
	import SeoTDK from '$lib/components/common-components/SeoTDK.svelte';

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
					class="mr-2 h-5 w-5"
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
				Home
			</a>
			<a href={resolve('/generator')} class="btn btn-outline">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="mr-2 h-5 w-5"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
					/>
				</svg>
				Generators
			</a>
			<a href={resolve('/guide')} class="btn btn-outline">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="mr-2 h-5 w-5"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
					/>
				</svg>
				Guide
			</a>
			<a href={resolve('/about')} class="btn btn-outline">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="mr-2 h-5 w-5"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
					/>
				</svg>
				About
			</a>
		</div>
	</section>
</main>
