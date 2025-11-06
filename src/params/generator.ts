import type { ParamMatcher } from '@sveltejs/kit';
import { ELF_RACE_LIST, ELF_GENDER_LIST, NAME_STYLE_LIST } from '$lib/elf-name-generator/constant';

export const match = ((param: string): param is ElfRace | ElfGender | NameStyle => {
	return (
		ELF_RACE_LIST.includes(param as ElfRace) ||
		ELF_GENDER_LIST.includes(param as ElfGender) ||
		NAME_STYLE_LIST.includes(param as NameStyle)
	);
}) satisfies ParamMatcher;
