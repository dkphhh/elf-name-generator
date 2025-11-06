export const ELF_RACE_LIST: ElfRace[] = [
	'blood-elf',
	'dark-elf',
	'high-elf',
	'moon-elf',
	'night-elf',
	'sea-elf',
	'snow-elf',
	'sun-elf',
	'wild-elf',
	'wood-elf'
];

export const ELF_GENDER_LIST: ElfGender[] = ['female', 'male', 'neutral'];

export const NAME_STYLE_LIST: NameStyle[] = [
	'dnd',
	'elder-scrolls',
	'fantasy',
	'modern',
	'traditional',
	'tolkien',
	'wow'
];

export const ELF_RACE_MAP: Record<ElfRace, string> = {
	'blood-elf': 'Blood Elf',
	'dark-elf': 'Dark Elf',
	'high-elf': 'High Elf',
	'moon-elf': 'Moon Elf',
	'night-elf': 'Night Elf',
	'sea-elf': 'Sea Elf',
	'snow-elf': 'Snow Elf',
	'sun-elf': 'Sun Elf',
	'wild-elf': 'Wild Elf',
	'wood-elf': 'Wood Elf'
};

export const ELF_GENDER_MAP: Record<ElfGender, string> = {
	male: 'Male',
	female: 'Female',
	neutral: 'Non-binary gender'
};

export const NAME_STYLE_MAP: Record<NameStyle, string> = {
	dnd: 'Dungeons & Dragons',
	'elder-scrolls': 'Elder Scrolls',
	fantasy: 'Fantasy',
	modern: 'Modern',
	traditional: 'Traditional',
	tolkien: 'Tolkien',
	wow: 'World of Warcraft'
};

export const RACE_DEFAULT_IMAGE_MAP: Record<ElfRace, Record<ElfGender, string>> = {
	'blood-elf': {
		female: '/elf-default-images/blood-elf-female.webp',
		male: '/elf-default-images/blood-elf-male.webp',
		neutral: '/elf-default-images/blood-elf-neutral.webp'
	},
	'dark-elf': {
		female: '/elf-default-images/dark-elf-female.webp',
		male: '/elf-default-images/dark-elf-male.webp',
		neutral: '/elf-default-images/dark-elf-neutral.webp'
	},
	'high-elf': {
		female: '/elf-default-images/high-elf-female.webp',
		male: '/elf-default-images/high-elf-male.webp',
		neutral: '/elf-default-images/high-elf-neutral.webp'
	},
	'moon-elf': {
		female: '/elf-default-images/moon-elf-female.webp',
		male: '/elf-default-images/moon-elf-male.webp',
		neutral: '/elf-default-images/moon-elf-neutral.webp'
	},
	'night-elf': {
		female: '/elf-default-images/night-elf-female.webp',
		male: '/elf-default-images/night-elf-male.webp',
		neutral: '/elf-default-images/night-elf-neutral.webp'
	},
	'sea-elf': {
		female: '/elf-default-images/sea-elf-female.webp',
		male: '/elf-default-images/sea-elf-male.webp',
		neutral: '/elf-default-images/sea-elf-neutral.webp'
	},
	'snow-elf': {
		female: '/elf-default-images/snow-elf-female.webp',
		male: '/elf-default-images/snow-elf-male.webp',
		neutral: '/elf-default-images/snow-elf-neutral.webp'
	},
	'sun-elf': {
		female: '/elf-default-images/sun-elf-female.webp',
		male: '/elf-default-images/sun-elf-male.webp',
		neutral: '/elf-default-images/sun-elf-neutral.webp'
	},
	'wild-elf': {
		female: '/elf-default-images/wild-elf-female.webp',
		male: '/elf-default-images/wild-elf-male.webp',
		neutral: '/elf-default-images/wild-elf-neutral.webp'
	},
	'wood-elf': {
		female: '/elf-default-images/wood-elf-female.webp',
		male: '/elf-default-images/wood-elf-male.webp',
		neutral: '/elf-default-images/wood-elf-neutral.webp'
	}
};
