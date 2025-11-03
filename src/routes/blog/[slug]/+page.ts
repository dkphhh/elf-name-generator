import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params }) => {
	// TODO: 从 API 或静态文件加载博客文章内容
	const { slug } = params;

	// 临时数据
	return {
		slug,
		title: 'Best Elf Names for D&D Characters',
		excerpt: 'Discover the perfect elf name for your Dungeons & Dragons character...',
		date: '2024-01-15',
		category: 'D&D',
		content: '<p>Blog post content will be loaded here...</p>'
	};
};
