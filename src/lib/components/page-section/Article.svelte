<script lang="ts">
	import Markdown from 'svelte-exmarkdown';
	import type { BlogPost } from '$lib/page-data/types';
	import { formatLocalDate } from '$lib/utils/local/datetime.svelte';
	let { articleData }: { articleData: BlogPost } = $props();
</script>

<article class="mx-auto prose prose-base max-w-4xl lg:prose-lg">
	<!-- 文章头部 -->
	<header class="not-prose mb-8">
		<h1 class="mb-4 text-4xl font-bold">{articleData.title}</h1>

		<div class="flex flex-wrap items-center gap-4 text-sm text-base-content/70">
			<time datetime={articleData.date}>
				{formatLocalDate(articleData.date)}
			</time>
			<span>{articleData.author}</span>
		</div>

		<div class="mt-4 flex flex-wrap gap-2">
			{#each articleData.tags as tag (tag)}
				<span class="badge badge-primary">{tag}</span>
			{/each}
		</div>

		<div class="divider"></div>
	</header>

	<!-- Markdown 内容 -->
	<Markdown md={articleData.content} />
</article>
