<script lang="ts">
	import type { PageProps } from './$types';
	import Article from '$lib/components/page-section/Article.svelte';
	import SeoTDK from '$lib/components/common-components/seo/SeoTDK.svelte';
	let { data }: PageProps = $props();
</script>

<SeoTDK
	title={data.PRIVACY_POLICY_PAGE.title}
	description={data.PRIVACY_POLICY_PAGE.description}
	keywords={data.PRIVACY_POLICY_PAGE.tags}
	canonical={`/blog/${data.PRIVACY_POLICY_PAGE.slug}`}
/>

<main class="container mx-auto px-4 py-8">
	<Article articleData={data.PRIVACY_POLICY_PAGE} />
</main>
