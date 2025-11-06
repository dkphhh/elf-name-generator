<script lang="ts">
	import SeoTDK from '$lib/components/SeoTDK.svelte';
	import { PAGE_TDK } from '$lib/seo/tdk-config';

	// 博客列表页
	interface BlogPost {
		slug: string;
		title: string;
		excerpt: string;
		date: string;
		category: string;
	}

	// TODO: 从后端或静态文件加载
	let posts = $state<BlogPost[]>([
		{
			slug: 'best-elf-names-for-dnd',
			title: 'Best Elf Names for D&D Characters',
			excerpt:
				'Discover the perfect elf name for your Dungeons & Dragons character with our comprehensive guide...',
			date: '2024-01-15',
			category: 'D&D'
		},
		{
			slug: 'history-of-elf-names',
			title: 'The History of Elf Names in Fantasy Literature',
			excerpt: 'Explore how elf naming conventions evolved from Tolkien to modern fantasy...',
			date: '2024-01-10',
			category: 'History'
		}
	]);
</script>

<SeoTDK
	title={PAGE_TDK.blog.title}
	description={PAGE_TDK.blog.description}
	keywords={PAGE_TDK.blog.keywords}
	canonical="/blog"
/>

<main class="container mx-auto px-4 py-8">
	<h1 class="mb-8 text-4xl font-bold">Elf Name Blog</h1>

	<div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
		{#each posts as post (post.slug)}
			<article class="card bg-base-100 shadow-xl">
				<div class="card-body">
					<div class="badge badge-primary">{post.category}</div>
					<h2 class="card-title">{post.title}</h2>
					<p class="text-gray-600">{post.excerpt}</p>
					<div class="text-sm text-gray-500">{post.date}</div>
					<div class="card-actions justify-end">
						<a href="/blog/{post.slug}" class="btn btn-sm btn-primary">Read More</a>
					</div>
				</div>
			</article>
		{/each}
	</div>
</main>
