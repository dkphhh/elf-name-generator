import type { RequestHandler } from './$types';

export const GET: RequestHandler = async () => {
	const baseUrl = 'https://yoursite.com'; // TODO: 替换为实际域名

	const pages = [
		{ url: '', priority: 1.0, changefreq: 'daily' },
		{ url: '/generator/male', priority: 0.9, changefreq: 'weekly' },
		{ url: '/generator/female', priority: 0.9, changefreq: 'weekly' },
		{ url: '/generator/high-elf', priority: 0.8, changefreq: 'weekly' },
		{ url: '/generator/wood-elf', priority: 0.8, changefreq: 'weekly' },
		{ url: '/generator/dark-elf', priority: 0.8, changefreq: 'weekly' },
		{ url: '/generator/night-elf', priority: 0.8, changefreq: 'weekly' },
		{ url: '/guide', priority: 0.7, changefreq: 'monthly' },
		{ url: '/blog', priority: 0.6, changefreq: 'weekly' },
		{ url: '/about', priority: 0.5, changefreq: 'monthly' }
	];

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
