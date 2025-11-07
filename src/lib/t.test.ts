import { describe, it } from 'vitest';

describe('', async () => {
	it('', { timeout: 9999999 }, async () => {});

	// const m1 = import.meta.glob('./blog/posts/*.md');
	// console.log('m1:', m1);

	// for (const [k, v] of Object.entries(m1)) {
	// 	const mod = await v();
	// 	console.log('path:', k);
	// 	console.log('mod:', mod);
	// }

	const m2 = import.meta.glob('./blog/posts/*.md', { query: '?raw', import: 'default' });
	console.log('m2:', m2);

	for (const [k, v] of Object.entries(m2)) {
		const mod = await v();
		console.log('path:', k);
		console.log('mod:', mod);
	}
});
