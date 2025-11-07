import type { BlogPost, BlogFrontmatter } from './types';
import matter from 'gray-matter';
import yaml from 'js-yaml';

/**
 * 从 Markdown 字符串中分割 front matter 和正文内容。
 *
 * @template T - 用于定义 front matter 解析后 `data` 对象的类型。
 * @param markdownContent - 包含 front matter 的完整 Markdown 字符串。
 * @returns 一个包含 `data` 和 `content` 的对象。`data` 是解析后的 front matter 数据，`content` 是剩余的 Markdown 内容。
 */
function spiltFrontMatterAndContent<T>(markdownContent: string): {
	data: T;
	content: string;
} {
	return matter(markdownContent.trim(), {
		engines: {
			yaml: {
				parse: (s: string) =>
					// 使用 JSON_SCHEMA 会把时间当作普通字符串而不是 Date
					yaml.load(s, { schema: yaml.JSON_SCHEMA }) as object
			}
		}
	}) as unknown as {
		data: T;
		content: string;
	};
}

/**
 * 获取所有博客文章
 * 使用 Vite 的 import.meta.glob 动态导入所有 Markdown 文件
 */
async function getAllPosts(): Promise<BlogPost[]> {
	const modules = import.meta.glob<string>('./content/blog/*.md', {
		query: '?raw',
		import: 'default'
	});

	const posts: BlogPost[] = [];

	for (const [path, resolver] of Object.entries(modules)) {
		// 从文件路径提取 slug
		const slug = path.replace('./content/blog/', '').replace('.md', '');

		// 获取 Markdown 内容
		const rawContent = await resolver();

		// 解析 frontmatter
		const { data, content } = spiltFrontMatterAndContent<BlogFrontmatter>(rawContent);

		posts.push({
			slug,
			title: data.title,
			description: data.description,
			date: data.date,
			author: data.author,
			tags: data.tags,
			content
		});
	}

	// 按日期倒序排列
	return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

/**
 * 根据 slug 获取单篇文章
 */
export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
	return ALL_BLOG_POSTS.find((post) => post.slug === slug) || null;
}

/**
 * 获取所有单页内容（隐私政策、服务条款等）
 */
async function getAllSinglePages(): Promise<Record<string, BlogPost>> {
	const modules = import.meta.glob<string>('./content/*.md', {
		query: '?raw',
		import: 'default'
	});

	const pages: Record<string, BlogPost> = {};

	for (const [path, resolver] of Object.entries(modules)) {
		const rawContent = await resolver();
		const { data, content } = spiltFrontMatterAndContent<BlogFrontmatter>(rawContent);

		const slug = path.replace('./content/', '').replace('.md', '');

		pages[slug] = {
			slug,
			title: data.title,
			description: data.description,
			date: data.date,
			author: data.author,
			tags: data.tags,
			content
		};
	}

	return pages;
}

const SINGLE_PAGES = await getAllSinglePages();

export const PRIVACY_POLICY_PAGE = SINGLE_PAGES['privacy-policy'];

export const TERMS_OF_SERVICE_PAGE = SINGLE_PAGES['terms-of-service'];

export const ALL_BLOG_POSTS = await getAllPosts();

console.log(
	'网站文章加载完成:\n',
	`博客文章数量：${ALL_BLOG_POSTS.length} 篇\n`,
	`隐私政策页面：${PRIVACY_POLICY_PAGE.title}\n`,
	`服务条款页面：${TERMS_OF_SERVICE_PAGE.title}\n`
);
