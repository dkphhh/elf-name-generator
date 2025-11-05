import { describe, it, expect } from 'vitest';
import fs from 'fs/promises';
import { generateElfImage } from './generate-image';
import path from 'path';

describe('elf-image generation', () => {
	it('批量生成图片', { timeout: 9999999 }, async () => {
		const dataFilePath = path.join(
			process.cwd(),
			'/src/lib/elf-name-generator/elf-image/prompts.json'
		);

		const jsonString = await fs.readFile(dataFilePath, 'utf-8');
		const data = JSON.parse(jsonString) as {
			race: ElfRace;
			gender: ElfGender;
			prompt: string;
		}[];

		// 确保输出目录存在
		const outputDir = path.join(process.cwd(), 'src/lib/elf-name-generator/elf-image/images');
		await fs.mkdir(outputDir, { recursive: true });

		for (const item of data) {
			const { race, gender, prompt } = item;

			console.log(`\n正在生成: ${race} - ${gender}`);
			const result = await generateElfImage({ race, gender, prompt });
			console.log('生成完成:', result.imageUrls);

			// 下载并保存图片
			const imageUrl = result.imageUrls[0];
			const response = await fetch(imageUrl);

			if (!response.ok) {
				console.error(`下载失败: ${response.status} ${response.statusText}`);
				continue;
			}

			const arrayBuffer = await response.arrayBuffer();
			const fileName = `${race}-${gender}.jpeg`;
			const filePath = path.join(outputDir, fileName);

			await fs.writeFile(filePath, Buffer.from(arrayBuffer));
			console.log(`已保存: ${filePath}`);
		}

		expect(true).toBe(true);
	});
});
