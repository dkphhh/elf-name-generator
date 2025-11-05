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
		female: '/elf-default-images/blood-elf-female.jpeg',
		male: '/elf-default-images/blood-elf-male.jpeg',
		neutral: '/elf-default-images/blood-elf-neutral.jpeg'
	},
	'dark-elf': {
		female: '/elf-default-images/dark-elf-female.jpeg',
		male: '/elf-default-images/dark-elf-male.jpeg',
		neutral: '/elf-default-images/dark-elf-neutral.jpeg'
	},
	'high-elf': {
		female: '/elf-default-images/high-elf-female.jpeg',
		male: '/elf-default-images/high-elf-male.jpeg',
		neutral: '/elf-default-images/high-elf-neutral.jpeg'
	},
	'moon-elf': {
		female: '/elf-default-images/moon-elf-female.jpeg',
		male: '/elf-default-images/moon-elf-male.jpeg',
		neutral: '/elf-default-images/moon-elf-neutral.jpeg'
	},
	'night-elf': {
		female: '/elf-default-images/night-elf-female.jpeg',
		male: '/elf-default-images/night-elf-male.jpeg',
		neutral: '/elf-default-images/night-elf-neutral.jpeg'
	},
	'sea-elf': {
		female: '/elf-default-images/sea-elf-female.jpeg',
		male: '/elf-default-images/sea-elf-male.jpeg',
		neutral: '/elf-default-images/sea-elf-neutral.jpeg'
	},
	'snow-elf': {
		female: '/elf-default-images/snow-elf-female.jpeg',
		male: '/elf-default-images/snow-elf-male.jpeg',
		neutral: '/elf-default-images/snow-elf-neutral.jpeg'
	},
	'sun-elf': {
		female: '/elf-default-images/sun-elf-female.jpeg',
		male: '/elf-default-images/sun-elf-male.jpeg',
		neutral: '/elf-default-images/sun-elf-neutral.jpeg'
	},
	'wild-elf': {
		female: '/elf-default-images/wild-elf-female.jpeg',
		male: '/elf-default-images/wild-elf-male.jpeg',
		neutral: '/elf-default-images/wild-elf-neutral.jpeg'
	},
	'wood-elf': {
		female: '/elf-default-images/wood-elf-female.jpeg',
		male: '/elf-default-images/wood-elf-male.jpeg',
		neutral: '/elf-default-images/wood-elf-neutral.jpeg'
	}
};
