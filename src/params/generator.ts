import type { ParamMatcher } from '@sveltejs/kit';
import { ELF_RACE_LIST } from '$lib/elf-name-generator/constant';

export const match = ((param: string): param is ElfRace => {
	return ELF_RACE_LIST.includes(param as ElfRace);
}) satisfies ParamMatcher;
