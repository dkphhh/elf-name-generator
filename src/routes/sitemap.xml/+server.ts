import type { RequestHandler } from './$types';
import { PUBLIC_BASE_URL } from '$env/static/public';
import { ELF_RACE_LIST, ELF_GENDER_LIST, NAME_STYLE_LIST } from '$lib/elf-name-generator/constant';

export const GET: RequestHandler = async () => {
	const baseUrl = PUBLIC_BASE_URL;

	// 静态页面
	const staticPages = [
		{ url: '', priority: 1.0, changefreq: 'daily' },
		{ url: '/guide', priority: 0.7, changefreq: 'monthly' },
		{ url: '/about', priority: 0.5, changefreq: 'monthly' },
		{ url: '/terms-of-service', priority: 0.5, changefreq: 'yearly' },
		{ url: '/privacy-policy', priority: 0.5, changefreq: 'yearly' },
		{ url: '/blog', priority: 0.6, changefreq: 'weekly' }
	];

	// 动态生成种族生成器页面
	const racePages = ELF_RACE_LIST.map((race) => ({
		url: `/generator/${race}`,
		priority: 0.8,
		changefreq: 'weekly'
	}));

	// 动态生成性别生成器页面
	const genderPages = ELF_GENDER_LIST.map((gender) => ({
		url: `/generator/${gender}`,
		priority: 0.9,
		changefreq: 'weekly'
	}));

	// 动态生成风格生成器页面
	const stylePages = NAME_STYLE_LIST.map((style) => ({
		url: `/generator/${style}`,
		priority: 0.8,
		changefreq: 'weekly'
	}));

	// 合并所有页面
	const pages = [...staticPages, ...genderPages, ...racePages, ...stylePages];

	const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
	.map(
		(page) => `  <url>
    <loc>${baseUrl}${page.url}</loc>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
  </url>`
	)
	.join('\n')}
</urlset>`;

	return new Response(sitemap, {
		headers: {
			'Content-Type': 'application/xml',
			'Cache-Control': 'max-age=3600, s-maxage=3600'
		}
	});
};
