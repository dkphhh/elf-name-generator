import { browser } from '$app/environment';

/**
 * 根据地理位置或浏览器语言获取用户的 locale
 */

import { SvelteDate } from 'svelte/reactivity';

/**
 * 获取浏览器语言设置（推荐方案）
 */
export function getBrowserLocale(): string {
	// 获取用户的语言设置
	const userLocale = $derived(
		browser ? navigator.language || navigator.languages?.[0] || 'en-US' : 'en-US'
	);

	return userLocale;
}

/**
 * 格式化日期为用户的本地格式
 */
export function formatLocalDate(
	date: string | Date,
	locale?: string,
	options?: Intl.DateTimeFormatOptions
): string {
	const userLocale = locale || getBrowserLocale();
	const defaultOptions: Intl.DateTimeFormatOptions = {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
		...options
	};

	return new SvelteDate(date).toLocaleDateString(userLocale, defaultOptions);
}

/**
 * 格式化日期和时间
 */
export function formatLocalDateTime(
	date: string | Date,
	locale?: string,
	options?: Intl.DateTimeFormatOptions
): string {
	const userLocale = locale || getBrowserLocale();
	const defaultOptions: Intl.DateTimeFormatOptions = {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
		hour: '2-digit',
		minute: '2-digit',
		...options
	};

	return new SvelteDate(date).toLocaleString(userLocale, defaultOptions);
}
