import { BYPASS_TOKEN } from '$env/static/private';
import type { Config } from '@sveltejs/adapter-vercel';

export const config: Config = {
	isr: {
		expiration: 86400,
		bypassToken: BYPASS_TOKEN
	}
};
