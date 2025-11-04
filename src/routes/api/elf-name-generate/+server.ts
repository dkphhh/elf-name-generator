import { generateElfName } from '$lib/elf-name-generator/generator';
import type { RequestHandler } from './$types';

export const POST: RequestHandler = async ({ request }) => {
	const options = (await request.json()) as GeneratorOptions;
	const names = generateElfName(options);
	const payload = JSON.stringify(names);
	return new Response(payload, {
		headers: {
			'Content-Type': 'application/json'
		}
	});
};
