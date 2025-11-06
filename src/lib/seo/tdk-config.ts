/**
 * SEO TDK 配置
 * 集中管理各页面的标题、描述和关键词
 */

/**
 * 种族生成器页面 TDK 配置
 */
export const RACE_GENERATOR_TDK: Record<
	ElfRace,
	{
		title: string;
		description: string;
		keywords: string[];
	}
> = {
	'high-elf': {
		title: 'High Elf Name Generator - Noble & Elegant Names',
		description:
			'Generate authentic high elf names for your D&D characters. Noble, sophisticated names inspired by Tolkien and fantasy traditions. Free high elf name generator with meanings.',
		keywords: [
			'high elf names',
			'high elf name generator',
			'dnd high elf',
			'noble elf names',
			'tolkien elf names',
			"quel'dorei names"
		]
	},
	'wood-elf': {
		title: 'Wood Elf Name Generator - Nature-Inspired Names',
		description:
			'Create wild and nature-inspired wood elf names. Perfect for D&D rangers, druids, and forest dwellers. Free generator with authentic elvish sounds.',
		keywords: [
			'wood elf names',
			'wood elf name generator',
			'nature elf names',
			'forest elf names',
			'dnd wood elf',
			'sylvan names'
		]
	},
	'dark-elf': {
		title: 'Dark Elf Name Generator - Drow & Shadow Names',
		description:
			'Generate mysterious dark elf (drow) names for your characters. Sinister, powerful names perfect for D&D underdark campaigns. Free drow name generator.',
		keywords: [
			'dark elf names',
			'drow names',
			'dark elf name generator',
			'drow name generator',
			'underdark names',
			'dnd drow'
		]
	},
	'night-elf': {
		title: 'Night Elf Name Generator - Mystical Kaldorei Names',
		description:
			'Create mystical night elf (Kaldorei) names inspired by Warcraft. Ancient, powerful names for druids, hunters, and moon worshippers. Free generator.',
		keywords: [
			'night elf names',
			'kaldorei names',
			'night elf name generator',
			'wow night elf',
			'warcraft elf names',
			'darnassian names'
		]
	},
	'blood-elf': {
		title: "Blood Elf Name Generator - Sin'dorei Names",
		description:
			"Generate elegant blood elf (Sin'dorei) names from World of Warcraft. Sophisticated names for mages, paladins, and the fallen nobility. Free generator.",
		keywords: [
			'blood elf names',
			"sin'dorei names",
			'blood elf name generator',
			'wow blood elf',
			"quel'thalas names",
			'thalassian names'
		]
	},
	'sun-elf': {
		title: 'Sun Elf Name Generator - Radiant & Majestic Names',
		description:
			'Create radiant sun elf names for your D&D characters. Majestic, gold-themed names inspired by celestial and solar themes. Free generator.',
		keywords: [
			'sun elf names',
			'sun elf name generator',
			'gold elf names',
			'celestial elf names',
			'dnd sun elf'
		]
	},
	'moon-elf': {
		title: 'Moon Elf Name Generator - Silver & Mystical Names',
		description:
			'Generate mystical moon elf names with silver and lunar themes. Perfect for D&D characters connected to the night and stars. Free generator.',
		keywords: [
			'moon elf names',
			'moon elf name generator',
			'silver elf names',
			'lunar elf names',
			'dnd moon elf'
		]
	},
	'sea-elf': {
		title: 'Sea Elf Name Generator - Aquatic & Ocean Names',
		description:
			'Create flowing sea elf names inspired by oceans and marine life. Perfect for underwater campaigns and aquatic characters. Free generator.',
		keywords: [
			'sea elf names',
			'sea elf name generator',
			'aquatic elf names',
			'ocean elf names',
			'dnd sea elf'
		]
	},
	'snow-elf': {
		title: 'Snow Elf Name Generator - Frosty & Arctic Names',
		description:
			'Generate cold and crystalline snow elf names. Perfect for arctic campaigns and frost-themed characters. Free generator with icy themes.',
		keywords: [
			'snow elf names',
			'snow elf name generator',
			'ice elf names',
			'frost elf names',
			'arctic elf names'
		]
	},
	'wild-elf': {
		title: 'Wild Elf Name Generator - Primal & Savage Names',
		description:
			'Create primal wild elf names for tribal and savage characters. Raw, nature-connected names for D&D barbarians and primitives. Free generator.',
		keywords: [
			'wild elf names',
			'wild elf name generator',
			'tribal elf names',
			'savage elf names',
			'dnd wild elf'
		]
	}
};

/**
 * 性别生成器页面 TDK 配置
 */
export const GENDER_GENERATOR_TDK: Record<
	ElfGender,
	{
		title: string;
		description: string;
		keywords: string[];
	}
> = {
	male: {
		title: 'Male Elf Name Generator - Masculine Fantasy Names',
		description:
			'Generate strong male elf names for your characters. Masculine, heroic names perfect for warriors, mages, and rangers. Free male elf name generator.',
		keywords: [
			'male elf names',
			'male elf name generator',
			'masculine elf names',
			'boy elf names',
			'dnd male elf'
		]
	},
	female: {
		title: 'Female Elf Name Generator - Elegant Feminine Names',
		description:
			'Create beautiful female elf names with grace and elegance. Perfect for sorceresses, priestesses, and noble ladies. Free female elf name generator.',
		keywords: [
			'female elf names',
			'female elf name generator',
			'feminine elf names',
			'girl elf names',
			'dnd female elf'
		]
	},
	neutral: {
		title: 'Gender-Neutral Elf Name Generator - Unisex Names',
		description:
			'Generate gender-neutral elf names suitable for any character. Versatile, balanced names that work for all genders. Free unisex elf name generator.',
		keywords: [
			'neutral elf names',
			'gender neutral elf names',
			'unisex elf names',
			'androgynous elf names',
			'dnd neutral elf'
		]
	}
};

/**
 * 风格生成器页面 TDK 配置
 */
export const STYLE_GENERATOR_TDK: Record<
	NameStyle,
	{
		title: string;
		description: string;
		keywords: string[];
	}
> = {
	traditional: {
		title: 'Traditional Elf Name Generator - Classic Fantasy Names',
		description:
			'Generate traditional elf names with classic fantasy appeal. Timeless, authentic names rooted in elvish linguistic traditions.',
		keywords: [
			'traditional elf names',
			'classic elf names',
			'authentic elf names',
			'traditional fantasy names'
		]
	},
	fantasy: {
		title: 'Fantasy Elf Name Generator - Creative & Unique Names',
		description:
			'Create unique fantasy elf names with creative flair. Perfect for original world-building and imaginative characters.',
		keywords: [
			'fantasy elf names',
			'creative elf names',
			'unique elf names',
			'fantasy character names'
		]
	},
	dnd: {
		title: 'D&D Elf Name Generator - Dungeons & Dragons Names',
		description:
			'Generate authentic D&D elf names following official naming conventions. Perfect for your Dungeons & Dragons campaigns and characters.',
		keywords: [
			'dnd elf names',
			'd&d elf names',
			'dungeons and dragons elf names',
			'dnd character names',
			'dnd 5e elf names'
		]
	},
	tolkien: {
		title: 'Tolkien Elf Name Generator - Sindarin & Quenya Names',
		description:
			'Create Tolkien-style elf names inspired by Sindarin and Quenya languages. Perfect for Lord of the Rings and Middle-earth themed characters.',
		keywords: [
			'tolkien elf names',
			'sindarin names',
			'quenya names',
			'lotr elf names',
			'middle earth names'
		]
	},
	wow: {
		title: 'WoW Elf Name Generator - World of Warcraft Names',
		description:
			'Generate World of Warcraft elf names for Night Elves and Blood Elves. Authentic Blizzard-style names for your WoW characters.',
		keywords: [
			'wow elf names',
			'world of warcraft elf names',
			'warcraft elf names',
			'wow character names'
		]
	},
	'elder-scrolls': {
		title: 'Elder Scrolls Elf Name Generator - Altmer, Bosmer, Dunmer',
		description:
			'Create Elder Scrolls elf names for Altmer (High Elves), Bosmer (Wood Elves), and Dunmer (Dark Elves). Perfect for Skyrim and ESO.',
		keywords: [
			'elder scrolls elf names',
			'skyrim elf names',
			'altmer names',
			'bosmer names',
			'dunmer names',
			'eso elf names'
		]
	},
	modern: {
		title: 'Modern Elf Name Generator - Contemporary Fantasy Names',
		description:
			'Generate modern elf names with contemporary appeal. Blend traditional elvish sounds with modern naming trends.',
		keywords: [
			'modern elf names',
			'contemporary elf names',
			'modern fantasy names',
			'updated elf names'
		]
	}
};

/**
 * 其他页面 TDK 配置
 */
export const PAGE_TDK = {
	guide: {
		title: 'Elf Naming Guide - How to Create Perfect Elf Names',
		description:
			'Complete guide to elf naming conventions, traditions, and tips. Learn how to create authentic fantasy elf names for your characters in D&D, novels, and games.',
		keywords: [
			'elf naming guide',
			'how to name elves',
			'elf name conventions',
			'fantasy naming guide',
			'dnd naming tips'
		]
	},
	about: {
		title: 'About - Free Elf Name Generator Tool',
		description:
			'Learn about our free elf name generator tool. Discover how we create authentic fantasy names for D&D, role-playing, and creative writing.',
		keywords: ['about elf name generator', 'name generator tool', 'fantasy name creator']
	},
	blog: {
		title: 'Blog - Elf Names & Fantasy Character Creation',
		description:
			'Articles, guides, and tips about elf names, character creation, and fantasy world-building. Expert advice for D&D players and fantasy writers.',
		keywords: [
			'elf name blog',
			'fantasy names blog',
			'character creation tips',
			'dnd character guide'
		]
	}
};
