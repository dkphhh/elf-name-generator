import { describe, it } from 'vitest';
import { getDescription } from './genData.js';

describe('elf-image generation', () => {
	it('批量生成图片', { timeout: 9999999 }, async () => {
		const d = await getDescription('snow-elf');
		console.log(d);
	});
});
