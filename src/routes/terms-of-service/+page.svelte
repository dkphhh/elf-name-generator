<script lang="ts">
	import type { PageProps } from './$types';
	import Article from '$lib/components/page-section/Article.svelte';
	import SeoTDK from '$lib/components/common-components/seo/SeoTDK.svelte';
	let { data }: PageProps = $props();
</script>

<SeoTDK
	title={data.TERMS_OF_SERVICE_PAGE.title}
	description={data.TERMS_OF_SERVICE_PAGE.description}
	keywords={data.TERMS_OF_SERVICE_PAGE.tags}
	canonical={`/blog/${data.TERMS_OF_SERVICE_PAGE.slug}`}
/>

<main class="container mx-auto px-4 py-8">
	<Article articleData={data.TERMS_OF_SERVICE_PAGE} />
</main>
