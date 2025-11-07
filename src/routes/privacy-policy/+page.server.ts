import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { PRIVACY_POLICY_PAGE } from '$lib/page-data/utils';

export const load: PageServerLoad = async () => {
	if (PRIVACY_POLICY_PAGE) {
		return {PRIVACY_POLICY_PAGE};
	}

	error(404, 'Not found');
};
