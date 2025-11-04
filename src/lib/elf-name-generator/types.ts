declare global {
	/**
	 * 精灵名字生成器核心类型定义
	 */

	/**
	 * 精灵性别
	 */
	type ElfGender = 'male' | 'female' | 'neutral';

	/**
	 * 精灵种族类型
	 */
	type ElfRace =
		| 'high-elf' // 高等精灵
		| 'wood-elf' // 森林精灵
		| 'dark-elf' // 黑暗精灵
		| 'night-elf' // 暗夜精灵
		| 'blood-elf' // 血精灵
		| 'snow-elf' // 雪精灵
		| 'sea-elf' // 海洋精灵
		| 'sun-elf' // 太阳精灵
		| 'moon-elf' // 月亮精灵
		| 'wild-elf'; // 野性精灵

	/**
	 * 名字风格
	 */
	type NameStyle =
		| 'traditional' // 传统
		| 'fantasy' // 奇幻
		| 'dnd' // 龙与地下城
		| 'tolkien' // 托尔金风格
		| 'wow' // 魔兽世界
		| 'elder-scrolls' // 上古卷轴
		| 'modern'; // 现代

	/**
	 * 生成选项
	 */
	interface GeneratorOptions {
		/** 性别 */
		gender?: ElfGender;
		/** 种族 */
		race?: ElfRace;
		/** 风格 */
		style?: NameStyle;
		/** 生成数量 */
		count?: number;
		/** 是否包含姓氏 */
		includeLastName?: boolean;
		/** 是否包含含义 */
		includeMeaning?: boolean;
	}

	/**
	 * 生成的名字结果
	 */
	interface GeneratedName {
		/** 名 */
		firstName: string;
		/** 姓(可选) */
		lastName?: string;
		/** 性别 */
		gender: ElfGender;
		/** 种族 */
		race?: ElfRace;
		/** 风格 */
		style?: NameStyle;
		// TODO： 含义和发音指导暂未使用，后续通过 AI 添加这个功能
		/** 含义 */
		meaning?: string;
		/** 发音指导 */
		pronunciation?: string;
	}

	/**
	 * 种族信息
	 */
	interface RaceInfo {
		/** 种族标识 */
		id: ElfRace;
		/** 显示名称 */
		name: string;
		/** 描述 */
		description: string;
		/** SEO 友好的 slug */
		slug: string;
		/** 特征 */
		characteristics: string[];
		/** 命名特点 */
		namingConventions: string[];
	}

	/**
	 * 名字风格信息
	 */
	interface StyleInfo {
		/** 风格标识 */
		id: NameStyle;
		/** 显示名称 */
		name: string;
		/** 描述 */
		description: string;
		/** SEO 友好的 slug */
		slug: string;
		/** 适用场景 */
		useCases: string[];
	}

	type ElfNameData = Record<
		NameStyle,
		{
			firstName: Record<ElfGender, string[]>;
			lastName: string[];
		}
	>;
}

export {};
