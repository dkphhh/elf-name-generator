// 导入所有 JSON 数据文件
import bloodElfData from './data/blood-elf.json';
import darkElfData from './data/dark-elf.json';
import highElfData from './data/high-elf.json';
import moonElfData from './data/moon-elf.json';
import nightElfData from './data/night-elf.json';
import seaElfData from './data/sea-elf.json';
import snowElfData from './data/snow-elf.json';
import sunElfData from './data/sun-elf.json';
import wildElfData from './data/wild-elf.json';
import woodElfData from './data/wood-elf.json';

// 临时存储，用于数据验证
const dataList: Array<{ race: ElfRace; data: ElfNameData }> = [
	{ race: 'blood-elf', data: bloodElfData as ElfNameData },
	{ race: 'dark-elf', data: darkElfData as ElfNameData },
	{ race: 'high-elf', data: highElfData as ElfNameData },
	{ race: 'moon-elf', data: moonElfData as ElfNameData },
	{ race: 'night-elf', data: nightElfData as ElfNameData },
	{ race: 'sea-elf', data: seaElfData as ElfNameData },
	{ race: 'snow-elf', data: snowElfData as ElfNameData },
	{ race: 'sun-elf', data: sunElfData as ElfNameData },
	{ race: 'wild-elf', data: wildElfData as ElfNameData },
	{ race: 'wood-elf', data: woodElfData as ElfNameData }
];

const elfData: Record<ElfRace, ElfNameData> = {} as Record<ElfRace, ElfNameData>;

// 验证和处理数据
for (const { race: elfRaceName, data: d } of dataList) {
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
