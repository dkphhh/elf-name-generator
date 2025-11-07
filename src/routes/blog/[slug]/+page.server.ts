import { ALL_BLOG_POSTS, getPostBySlug } from '$lib/page-data/utils';
import { error } from '@sveltejs/kit';
import type { EntryGenerator } from './$types';

// 🔧 告诉 SvelteKit 所有可能的 slug（预渲染需要）
export const entries: EntryGenerator = () => {
	return ALL_BLOG_POSTS.map((post) => ({ slug: post.slug }));
};

export const load = async ({ params }) => {
	const post = await getPostBySlug(params.slug);

	if (!post) {
		error(404, 'Blog post not found');
	}

	return { post };
};
