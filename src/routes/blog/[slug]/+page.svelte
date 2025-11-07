<script lang="ts">
	import SeoTDK from '$lib/components/common-components/seo/SeoTDK.svelte';
	import type { PageData } from './$types';
	import Article from '$lib/components/page-section/Article.svelte';
	import { resolve } from '$app/paths';
	let { data }: { data: PageData } = $props();
</script>

<SeoTDK
	title={data.post.title}
	description={data.post.description}
	keywords={data.post.tags}
	canonical={`/blog/${data.post.slug}`}
/>

<main class="container mx-auto px-4 py-8">
	<Article articleData={data.post} />
	<!-- 返回链接 -->
	<div class="not-prose mt-8 text-center">
		<a href={resolve('/blog')} class="btn btn-outline">← Back to blog list</a>
	</div>
</main>
