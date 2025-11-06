<script lang="ts">
	import { resolve } from '$app/paths';

	let { pageTitle, pageDescription }: { pageTitle: string; pageDescription?: string } = $props();
</script>

<section class="mb-12 text-center">
	<h1 class="mb-4 text-4xl font-bold md:text-6xl"><a href={resolve('/')}>{pageTitle}</a></h1>
	<p class="mx-auto max-w-2xl text-xl text-gray-600">
		{pageDescription}
	</p>
</section>
