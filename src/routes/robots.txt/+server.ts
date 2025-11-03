import type { RequestHandler } from './$types';

export const GET: RequestHandler = async () => {
	const baseUrl = 'https://yoursite.com'; // TODO: 替换为实际域名

	const robots = `User-agent: *
Allow: /

Sitemap: ${baseUrl}/sitemap.xml
`;

	return new Response(robots, {
		headers: {
			'Content-Type': 'text/plain',
			'Cache-Control': 'max-age=86400'
		}
	});
};
