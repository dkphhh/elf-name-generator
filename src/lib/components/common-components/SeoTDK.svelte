<script lang="ts">
	import { PUBLIC_BASE_URL } from '$env/static/public';

	let {
		title,
		description,
		keywords,
		canonical
	}: {
		title?: string;
		description?: string;
		keywords?: string[];
		canonical?: string;
	} = $props();

	// 默认 TDK 配置
	const DEFAULT_TITLE = 'Elf Name Generator - Create Fantasy Elf Names Instantly';
	const DEFAULT_DESCRIPTION =
		'Generate unique fantasy elf names for your characters. Free elf name generator with meanings, multiple races, and customization options. Perfect for D&D, WoW, and fantasy writing.';
	const DEFAULT_KEYWORDS = [
		'elf name generator',
		'fantasy name generator',
		'dnd elf names',
		'character name generator',
		'elf names',
		'd&d names',
		'fantasy character names'
	];
	const SITE_URL = PUBLIC_BASE_URL;

	/**
	 * 生成最终的页面标题
	 * 如果提供了自定义标题，格式为: "自定义标题 | Elf Name Generator"
	 * 否则使用默认标题
	 */
	let seoTitle = $derived.by(() => {
		if (title) {
			return `${title} | Elf Name Generator`;
		}
		return DEFAULT_TITLE;
	});

	/**
	 * 生成最终的页面描述
	 * 优先使用自定义描述，否则使用默认描述
	 */
	let seoDescription = $derived.by(() => {
		return description || DEFAULT_DESCRIPTION;
	});

	/**
	 * 生成最终的关键词列表
	 * 合并自定义关键词和默认关键词，去重
	 */
	let seoKeywords = $derived.by(() => {
		if (keywords && keywords.length > 0) {
			// 合并并去重
			const combined = [...new Set([...keywords, ...DEFAULT_KEYWORDS])];
			return combined.join(', ');
		}
		return DEFAULT_KEYWORDS.join(', ');
	});

	/**
	 * 生成规范链接
	 */
	let canonicalUrl = $derived.by(() => {
		if (canonical) {
			return `${SITE_URL}${canonical}`;
		}
		return SITE_URL;
	});

	/**
	 * 生成 Schema.org 结构化数据的 JSON 字符串
	 */
	const schemaJson = JSON.stringify(
		{
			'@context': 'https://schema.org',
			'@type': 'WebApplication',
			name: 'Elf Name Generator',
			description:
				'Generate unique fantasy elf names for your characters. Free tool for D&D, WoW, and fantasy writing with multiple races and customization options.',
			url: SITE_URL,
			author:"Dkphhh",
			applicationCategory: 'UtilityApplication',
			operatingSystem: 'Web',
			offers: {
				'@type': 'Offer',
				price: '0',
				priceCurrency: 'USD',
			}
		},
		null,
		2
	);

	const schemaScript = '<script type="application/ld+json">' + schemaJson + '<' + '/script>';
</script>

<svelte:head>
	<title>{seoTitle}</title>
	<meta name="description" content={seoDescription} />
	<meta name="keywords" content={seoKeywords} />
	<link rel="canonical" href={canonicalUrl} />

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content={canonicalUrl} />
	<meta property="og:title" content={seoTitle} />
	<meta property="og:description" content={seoDescription} />

	<!-- Twitter -->
	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:url" content={canonicalUrl} />
	<meta property="twitter:title" content={seoTitle} />
	<meta property="twitter:description" content={seoDescription} />
	<!-- Schema.org structured data -->
	<!-- eslint-disable-next-line svelte/no-at-html-tags -->
	{@html schemaScript}
</svelte:head>
