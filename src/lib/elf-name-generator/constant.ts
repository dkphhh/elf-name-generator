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
		female: '',
		male: '',
		neutral: ''
	},
	'dark-elf': {
		female: '',
		male: '',
		neutral: ''
	},
	'high-elf': {
		female: '',
		male: '',
		neutral: ''
	},
	'moon-elf': {
		female: '',
		male: '',
		neutral: ''
	},
	'night-elf': {
		female: '',
		male: '',
		neutral: ''
	},
	'sea-elf': {
		female: '',
		male: '',
		neutral: ''
	},
	'snow-elf': {
		female: '',
		male: '',
		neutral: ''
	},
	'sun-elf': {
		female: '',
		male: '',
		neutral: ''
	},
	'wild-elf': {
		female: '',
		male: '',
		neutral: ''
	},
	'wood-elf': {
		female: '',
		male: '',
		neutral: ''
	}
};
