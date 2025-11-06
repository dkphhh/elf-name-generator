<script lang="ts">
	import { page } from '$app/state';
	import Generator from '$lib/components/elf-name-generator/Generator.svelte';
	import NameResault from '$lib/components/elf-name-card/NameResault.svelte';
	import SeoTDK from '$lib/components/common-components/SeoTDK.svelte';
	import {
		RACE_GENERATOR_TDK,
		GENDER_GENERATOR_TDK,
		STYLE_GENERATOR_TDK
	} from '$lib/seo/tdk-config';
	import { ELF_RACE_MAP, ELF_GENDER_MAP, NAME_STYLE_MAP } from '$lib/elf-name-generator/constant';
	import { RACE_PAGE_DATA } from '$lib/seo/page-data';
	import ContentSection from '$lib/components/page-section/ContentSection.svelte';
	import FrontSection from '$lib/components/page-section/FrontSection.svelte';
	import Footer from '$lib/components/page-section/Footer.svelte';

	let generatedNames: GeneratedName[] = $state([]);

	// 获取当前页面参数
	let pageParam = $derived(page.params.page as string);

	// 判断是种族还是性别
	let isRace = $derived(pageParam in ELF_RACE_MAP);
	let isGender = $derived(pageParam in ELF_GENDER_MAP);
	let isStyle = $derived(pageParam in NAME_STYLE_MAP);

	let contentTitle = $derived.by(() => {
		if (isRace) {
			return `About ${ELF_RACE_MAP[pageParam as ElfRace]}`;
		} else if (isGender) {
			return ``;
		} else if (isStyle) {
			return ``;
		}
		return '';
	});

	let content = $derived.by(() => {
		if (isRace) {
			return RACE_PAGE_DATA[pageParam as ElfRace];
		} else if (isGender) {
			return ``;
		} else if (isStyle) {
			return ``;
		}
		return '';
	});

	// 获取对应的 TDK 配置
	let tdkConfig = $derived.by(() => {
		if (isRace) {
			return RACE_GENERATOR_TDK[pageParam as ElfRace];
		} else if (isGender) {
			return GENDER_GENERATOR_TDK[pageParam as ElfGender];
		} else if (isStyle) {
			return STYLE_GENERATOR_TDK[pageParam as NameStyle];
		}
		return null;
	});

	// 获取显示名称
	let displayName = $derived.by(() => {
		if (isRace) {
			return ELF_RACE_MAP[pageParam as ElfRace];
		} else if (isGender) {
			return ELF_GENDER_MAP[pageParam as ElfGender];
		} else if (isStyle) {
			return NAME_STYLE_MAP[pageParam as NameStyle];
		}
		return '';
	});

	// 获取初始生成选项
	let initialOptions = $derived.by(() => {
		if (isRace) {
			return { race: pageParam as ElfRace };
		} else if (isGender) {
			return { gender: pageParam as ElfGender };
		} else if (isStyle) {
			return { style: pageParam as NameStyle };
		}
		return {};
	});
</script>

{#if tdkConfig}
	<SeoTDK
		title={tdkConfig.title}
		description={tdkConfig.description}
		keywords={tdkConfig.keywords}
		canonical={`/generator/${pageParam}`}
	/>
{/if}

<main class="container mx-auto px-4 py-8">
	<!-- Hero Section -->
	<FrontSection
		pageTitle={`${displayName} Name Generator`}
		pageDescription={tdkConfig?.description}
	/>

	<Generator bind:generatedNames {initialOptions} />
	<NameResault {generatedNames} />

	<ContentSection {contentTitle} {content} />
	<Footer />
</main>
