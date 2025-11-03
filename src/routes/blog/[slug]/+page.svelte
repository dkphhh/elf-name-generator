<script lang="ts">
	let { data } = $props();
</script>

<svelte:head>
	<title>{data.title} - Elf Name Blog</title>
	<meta name="description" content={data.excerpt} />
</svelte:head>

<main class="container mx-auto px-4 py-8">
	<article class="mx-auto prose prose-lg max-w-4xl">
		<a href="/blog" class="btn mb-4 btn-ghost btn-sm">← Back to Blog</a>

		<div class="mb-4 badge badge-primary">{data.category}</div>
		<h1>{data.title}</h1>
		<div class="mb-8 text-gray-500">{data.date}</div>

		<div>
			{@html data.content}
		</div>
	</article>
</main>
