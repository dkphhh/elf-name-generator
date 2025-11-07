<script lang="ts">
	let { pageTitle, pageDescription }: { pageTitle: string; pageDescription?: string } = $props();
</script>

<section class="mb-12 text-center">
	<h1 class="mb-4 flex items-center justify-center gap-4 text-2xl font-bold md:text-6xl">
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="48"
			height="48"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
			class="lucide lucide-sparkles-icon lucide-sparkles"
			><path
				d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"
			/><path d="M20 2v4" /><path d="M22 4h-4" /><circle cx="4" cy="20" r="2" /></svg
		>
		{pageTitle}
	</h1>
	<p class="mx-auto max-w-4xl text-left text-xl text-gray-600">
		{pageDescription}
	</p>
</section>
