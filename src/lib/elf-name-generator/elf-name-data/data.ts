import fs from 'fs/promises';
import path from 'path';

const DB_DIR = '/src/lib/elf-name-generator/elf-name-data/data';

const dbFilePath = fs.glob('*.json', { cwd: path.join(process.cwd(), DB_DIR) });
const elfData: Record<ElfRace, ElfNameData> = {} as Record<ElfRace, ElfNameData>;

for await (const filePath of dbFilePath) {
	const fileFullPath = path.join(process.cwd(), DB_DIR, filePath);
	// 读取文件内容
	const jsonString = await fs.readFile(fileFullPath, 'utf-8');
	const d = (await JSON.parse(jsonString)) as ElfNameData;

	// 获取数据集名称
	const elfRaceName = path.parse(filePath).name as ElfRace;

	for (const style in d) {
		const s = style as NameStyle;

		// 处理名字
		for (const gender in d[s]['firstName']) {
			const g = gender as ElfGender;
			const firstNameList = d[s]['firstName'][g];
			const firstNamesCount = firstNameList.length;

			if (firstNamesCount > 50) {
				// 如果超过 50 个名字，则截断到 50 个
				firstNameList.splice(50, firstNamesCount - 50);
			} else if (firstNamesCount < 50) {
				// 如果少于 50 个名字，则抛出错误
				throw Error(
					`DB: ${elfRaceName}\nStyle: ${s}\nGender: ${g}\nfirst names count: ${firstNamesCount}\n`
				);
			}
		}

		// 处理姓氏
		const lastNameList = d[s]['lastName'];
		const lastNamesCount = lastNameList.length;
		if (lastNamesCount > 50) {
			// 如果超过 50 个名字，则截断到 50 个
			lastNameList.splice(50, lastNamesCount - 50);
		} else if (lastNamesCount < 50) {
			// 如果少于 50 个名字，则抛出错误
			throw Error(`DB: ${elfRaceName}\nStyle: ${s}\nlast names count: ${lastNamesCount}\n`);
		}
	}
	elfData[elfRaceName] = d;
}

console.log(`ElfNameData 模块加载完成`);

export default elfData;
