import { ELF_RACE_MAP } from '$lib/elf-name-generator/constant';
import { OPEN_ROUTER_API_KEY } from '$env/static/private';
import pLimit from 'p-limit';
import fs from 'fs/promises';
import path from 'path';

export async function getDescription(race: ElfRace) {
	console.log(`开始生成种族介绍：种族=${race}`);
	try {
		const raceDisplay = ELF_RACE_MAP[race];

		const systemPrompt = `Here's the English translation of your request:

"You are an expert in elf culture and also a seasoned fantasy enthusiast. You are proficient in the elven lore from the following universes:
- *The Lord of the Rings* (Middle-earth Elven system)
- *World of Warcraft* (Azerothian Elven branches)
- *The Elder Scrolls* (various humanoid races)
- And other mainstream fantasy works

**Your response template:**
- 📍 **Ethnic Identity**: Race name, originating work, background/origin story
- 🎨 **Appearance & Characteristics**: Physical traits, cultural/artistic style, distinctive demeanor
- ⚔️ **Racial Abilities**: Magical aptitude, combat specialties, civilization achievements
- 🌍 **Cross-Universe Mirroring**: Corresponding races in other works and an analysis of their differences
- 💭 **Deep Dive**: Creative concepts reflected in the racial design

Guide users to explore the rich dimensions of the fantasy world with humor and enthusiasm.`;

		const originalPrompt = `Please tell me about ${raceDisplay} in fantasy world-building/settings.`;

		const requestPayload = {
			model: 'anthropic/claude-sonnet-4.5',
			temperature: 0.9,
			top_p: 0.8,
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

		const description = data.choices[0].message.content as string;
		console.log(`生成种族介绍完成：种族=${race}`);
		return description || '';
	} catch (error) {
		console.error(
			`生成种族介绍的过程中报错\n
			种族:${race}\n`,
			(error as Error).message
		);
		return '';
	}
}

export async function writeDescription(params: ElfRace[]) {
	const limit = pLimit(5); // Limit to 5 concurrent requests
	const tasks: Promise<{
		race: ElfRace;
		description: string;
	}>[] = [];

	for (const race of params) {
		tasks.push(
			limit(async () => {
				const description = await getDescription(race);
				return { race, description };
			})
		);
	}

	const outputPath = path.join(
		process.cwd(),
		'/src/lib/elf-name-generator/elf-race-page-data/data.json'
	);

	const results = await Promise.all(tasks);

	await fs.writeFile(outputPath, JSON.stringify(results, null, 2), 'utf-8');
}
