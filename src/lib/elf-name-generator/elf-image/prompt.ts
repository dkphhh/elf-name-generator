import { ELF_RACE_MAP } from '$lib/elf-name-generator/constant';
import { OPEN_ROUTER_API_KEY } from '$env/static/private';
import pLimit from 'p-limit';
import fs from 'fs/promises';
import path from 'path';

export async function getPrompt(options: { race: ElfRace; gender: ElfGender }) {
	console.log(`开始生成提示语：种族=${options.race}，性别=${options.gender}`);
	try {
		const gender = options.gender;
		const race = ELF_RACE_MAP[options.race];

		const systemPrompt = `I want you to act as a prompt generator for an image generateor artificial intelligence program. Your job is to provide detailed and creative descriptions that will inspire unique and interesting images from the AI. Keep in mind that the AI is capable of understanding a wide range of language and can interpret abstract concepts, so feel free to be as imaginative and descriptive as possible. For example, you could describe a scene from a futuristic city, or a surreal landscape filled with strange creatures. The more detailed and imaginative your description, the more interesting the resulting image will be. the prompt you generate must be plain text, not markdown.You must generate the prompt in Chinese. The prompt should be concise and within 600 words.`;

		const originalPrompt = `
    Please refer to the art styles of World of Warcraft, The Elder Scrolls, and The Lord of the Rings to generate an image that fits a fantasy worldview. The character in the image is a ${race}, holding a weapon. the gender of the character is ${gender}.
    `;

		const requestPayload = {
			model: 'google/gemini-2.5-flash',
			temperature: 0.9,
			top_p: 0.7,
			messages: [
				{
					role: 'system',
					content: [
						{
							type: 'text',
							text: systemPrompt
						}
					]
				},
				{
					role: 'user',
					content: [
						{
							type: 'text',
							text: originalPrompt
						}
					]
				}
			]
		};

		const res = await fetch('https://openrouter.ai/api/v1/chat/completions', {
			method: 'POST',
			headers: {
				Authorization: `Bearer ${OPEN_ROUTER_API_KEY}`,
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestPayload)
		});

		if (!res.ok) {
			const e = await res.text();
			throw new Error(`OpenRouter API 请求失败，状态码：${res.status}，错误信息：${e}`);
		}

		const data = await res.json();

		const prompt = data.choices[0].message.content;
		console.log(`生成提示语完成：种族=${options.race}，性别=${options.gender}`);
		return prompt || '';
	} catch (error) {
		console.error(
			`Error generating prompt\n
			Race:${options.race}\n
			Gender:${options.gender}\n`,
			(error as Error).message
		);
		return '';
	}
}

export async function writePrompts(params: Record<ElfRace, Record<ElfGender, string>>) {
	const limit = pLimit(5); // Limit to 5 concurrent requests
	const tasks: Promise<{
		race: ElfRace;
		gender: ElfGender;
		prompt: string;
	}>[] = [];
	for (const raceKey in params) {
		const race = raceKey as ElfRace;
		for (const genderKey in params[race]) {
			const gender = genderKey as ElfGender;
			const task = limit(() =>
				getPrompt({ race, gender }).then((prompt) => {
					return {
						race,
						gender,
						prompt
					};
				})
			);
			tasks.push(task);
		}
	}

	const outputPath = path.join(
		process.cwd(),
		'src',
		'lib',
		'elf-name-generator',
		'elf-image',
		'prompts.json'
	);

	const results = await Promise.all(tasks);

	await fs.writeFile(outputPath, JSON.stringify(results, null, 2), 'utf-8');
}
