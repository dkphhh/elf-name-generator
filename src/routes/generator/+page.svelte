<script lang="ts">
	import { resolve } from '$app/paths';
	import GeneratorCard from '$lib/components/elf-name-generator/GeneratorCard.svelte';
	import Generator from '$lib/components/elf-name-generator/Generator.svelte';
	import NameResault from '$lib/components/elf-name-card/NameResault.svelte';
	import SeoTDK from '$lib/components/common-components/seo/SeoTDK.svelte';
	import {
		ELF_RACE_LIST,
		ELF_RACE_MAP,
		ELF_GENDER_LIST,
		ELF_GENDER_MAP,
		NAME_STYLE_LIST,
		NAME_STYLE_MAP
	} from '$lib/elf-name-generator/constant';
	import FrontSection from '$lib/components/page-section/FrontSection.svelte';

	// 生成的名字列表
	let generatedNames: GeneratedName[] = $state([]);
</script>

<SeoTDK
	title="All Elf Name Generators - Browse By Race, Gender & Style"
	description="Browse all elf name generators by race, gender, and style. Generate names for High Elves, Wood Elves, Dark Elves, and more. Free fantasy name generators for D&D and creative writing."
	keywords={[
		'elf name generators',
		'all elf races',
		'elf name types',
		'fantasy name generators',
		'dnd name tools'
	]}
	canonical="/generator"
/>

<main class="container mx-auto px-4 py-8">
	<!-- Hero Section -->
	<FrontSection
		pageTitle="All Elf Name Generators"
		pageDescription="Choose from our collection of specialized elf name generators by race, gender, style, or use the main generator to create unique fantasy elf names below."
	/>

	<!-- 名字生成器 -->
	<Generator bind:generatedNames />

	<!-- 展示名字结果 -->
	<NameResault {generatedNames} />

	<!-- 种族生成器 -->
	<section class="mb-12">
		<h2 class="mb-6 text-3xl font-bold">Generate by Race</h2>
		<GeneratorCard categoryList={ELF_RACE_LIST} categoryMap={ELF_RACE_MAP} />
	</section>

	<!-- 性别生成器 -->
	<section class="mb-12">
		<h2 class="mb-6 text-3xl font-bold">Generate by Gender</h2>
		<GeneratorCard categoryList={ELF_GENDER_LIST} categoryMap={ELF_GENDER_MAP} />
	</section>

	<!-- 命名风格生成器 -->
	<section class="mb-12">
		<h2 class="mb-6 text-3xl font-bold">Generate by Style</h2>
		<GeneratorCard categoryList={NAME_STYLE_LIST} categoryMap={NAME_STYLE_MAP} />
	</section>

	<!-- 返回主页 -->
	<section class="text-center">
		<a href={resolve('/')} class="btn btn-outline btn-lg">← Back to Main Generator</a>
	</section>

</main>
