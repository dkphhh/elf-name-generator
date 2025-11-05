import { describe, it } from 'vitest';
import { generateElfImage } from './generate-image';

describe('elf-image generation', () => {
	it('应该成功生成血精灵图片', async () => {
		const result = await generateElfImage({
			race: 'blood-elf',
			gender: 'male',
			prompt:
				'A majestic blood elf warrior standing on a cliff overlooking a vast, enchanted forest, with golden sunlight filtering through the trees, intricate armor adorned with elven symbols, and a determined expression, fantasy art style, highly detailed, vibrant colors'
		});

		console.log('生成的图片:', result);
	});
});
