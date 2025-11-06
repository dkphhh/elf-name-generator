<script lang="ts">
	import { resolve } from '$app/paths';
	import GeneratorCard from '$lib/components/elf-name-generator/GeneratorCard.svelte';
	import SeoTDK from '$lib/components/common-components/SeoTDK.svelte';
	import {
		ELF_RACE_LIST,
		ELF_RACE_MAP,
		ELF_GENDER_LIST,
		ELF_GENDER_MAP,
		NAME_STYLE_LIST,
		NAME_STYLE_MAP
	} from '$lib/elf-name-generator/constant';
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
	<section class="mb-12 text-center">
		<h1 class="mb-4 text-4xl font-bold md:text-6xl">All Elf Name Generators</h1>
		<p class="mx-auto max-w-2xl text-xl text-gray-600">
			Choose from our collection of specialized elf name generators by race, gender, or style.
		</p>
	</section>

	<!-- 种族生成器 -->
	<GeneratorCard categoryList={ELF_RACE_LIST} categoryMap={ELF_RACE_MAP} />

	<!-- 性别生成器 -->
	<GeneratorCard categoryList={ELF_GENDER_LIST} categoryMap={ELF_GENDER_MAP} />

	<!-- 命名风格生成器 -->
	<GeneratorCard categoryList={NAME_STYLE_LIST} categoryMap={NAME_STYLE_MAP} />
    
	<!-- 返回主页 -->
	<section class="text-center">
		<a href={resolve('/')} class="btn btn-outline btn-lg">← Back to Main Generator</a>
	</section>
</main>
