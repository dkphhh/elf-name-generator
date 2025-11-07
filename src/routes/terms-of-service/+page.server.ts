import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { TERMS_OF_SERVICE_PAGE } from '$lib/page-data/utils';

export const load: PageServerLoad = async () => {
	if (TERMS_OF_SERVICE_PAGE) {
		return { TERMS_OF_SERVICE_PAGE };
	}

	error(404, 'Not found');
};
