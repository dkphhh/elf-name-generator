<script lang="ts">
	import SeoTDK from '$lib/components/common-components/seo/SeoTDK.svelte';
	import type { PageData } from './$types';
	import { resolve } from '$app/paths';
	import FrontSection from '$lib/components/page-section/FrontSection.svelte';
	let { data }: { data: PageData } = $props();
</script>

<SeoTDK
	title="Blog - Elf Name Generator Tips & Guides"
	description="Read our blog for elf naming tips, fantasy character creation guides, and updates about our name generator tool."
	keywords={['elf naming tips', 'fantasy blog', 'character creation', 'dnd guides']}
	canonical="/blog"
/>

<main class="container mx-auto px-4 py-8">
	<div class="mx-auto max-w-4xl">
		<FrontSection
			pageTitle="Blog"
			pageDescription="Read our blog for elf naming tips, fantasy character creation guides, and updates about our name generator tool"
		></FrontSection>

		<div class="space-y-6">
			{#each data.ALL_BLOG_POSTS as post (post.slug)}
				<article class="card bg-base-200">
					<div class="card-body">
						<h2 class="card-title">
							<a href={resolve(`/blog/${post.slug}`)} class="hover:text-primary">
								{post.title}
							</a>
						</h2>

						<div class="flex gap-2 text-sm text-base-content/70">
							<time datetime={post.date}>
								{new Date(post.date).toDateString()}
							</time>
							<span>·</span>
							<span>{post.author}</span>
						</div>

						<p class="text-base-content/80">
							{post.description}
						</p>

						<div class="flex flex-wrap gap-2">
							{#each post.tags as tag (tag)}
								<span class="badge badge-outline">{tag}</span>
							{/each}
						</div>

						<div class="card-actions justify-end">
							<a href={resolve(`/blog/${post.slug}`)} class="btn btn-primary"> Read → </a>
						</div>
					</div>
				</article>
			{/each}
		</div>

		{#if data.ALL_BLOG_POSTS.length === 0}
			<div class="text-center text-base-content/60">
				<p>暂无文章</p>
			</div>
		{/if}
	</div>
</main>
