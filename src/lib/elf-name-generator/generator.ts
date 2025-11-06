import elfData from '$lib/elf-name-generator/elf-name-data/data';
import { ELF_GENDER_LIST, ELF_RACE_LIST, NAME_STYLE_LIST } from '$lib/elf-name-generator/constant';

function getRadomItem<T>(arr: T[]): T {
	return arr[Math.floor(Math.random() * arr.length)];
}

export function generateElfName(options?: GeneratorOptions): GeneratedName[] {

	const { count, includeLastName }: GeneratorOptions = {
		count: options?.count || 1,
		includeLastName: options?.includeLastName || false
	};

	const results: GeneratedName[] = [];
	const seen = new Set<string>();

	for (let i = 0; i < count; i++) {
		const gender = options?.gender || getRadomItem(ELF_GENDER_LIST);
		const race = options?.race || getRadomItem(ELF_RACE_LIST);
		const style = options?.style || getRadomItem(NAME_STYLE_LIST);
		const elfName: GeneratedName = {
			firstName: getRadomItem(elfData[race][style]['firstName'][gender]),
			lastName: includeLastName ? getRadomItem(elfData[race][style]['lastName']) : undefined,
			gender: gender,
			race: race,
			style: style
		};

		// 检查名字长度
		if (elfName.firstName.length + (elfName.lastName ? elfName.lastName.length : 0) >= 19) {
			i--; // 重新生成这一次
			continue;
		}
		// 检查是否重复
		const key = JSON.stringify(elfName);
		if (seen.has(key)) {
			i--; // 重新生成这一次
			continue;
		}

		seen.add(key);
		results.push(elfName);
	}

	return results;
}
