import type { RequestHandler } from './$types';
import { ORIGIN } from '$env/static/private';

export const GET: RequestHandler = async () => {
	const baseUrl = ORIGIN;

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
