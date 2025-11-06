<script lang="ts">
	import { ELF_RACE_MAP, ELF_GENDER_MAP, NAME_STYLE_MAP } from '$lib/elf-name-generator/constant';
	import { page } from '$app/state';
	import GeneratorButton from '$lib/components/elf-name-generator/GeneratorButton.svelte';

	let pageParam = $derived(page.params.page as string);

	// 判断是种族还是性别
	let isRace = $derived(pageParam in ELF_RACE_MAP);
	let isGender = $derived(pageParam in ELF_GENDER_MAP);
	let isStyle = $derived(pageParam in NAME_STYLE_MAP);

	import MarkdownRender from '$lib/components/common-components/MarkdownRender.svelte';
	let { contentTitle, content }: { contentTitle: string; content: string } = $props();
</script>

<section class="mx-auto prose prose-lg mb-12 max-w-4xl">
	<h2>{contentTitle}</h2>

	<MarkdownRender md={content} />

	<!-- 使用步骤 -->
	<h2>How to Use This Generator</h2>
	<!-- 删除本页代表的步骤 -->
	<ol>
		{#if !isGender}<li>Select your preferred gender (male, female, or neutral)</li>{/if}
		{#if !isRace}<li>Choose your preferred Race (High Elf，Dark Elf，and so on……)</li>{/if}
		{#if !isStyle}<li>
				Pick a name style that fits your character's background (Dungeons & Dragons, Tolkien, World
				of Warcraft, or others……)
			</li>{/if}
		<li>Choose how many names you want to generate</li>
		<li>Optionally include last names and meanings</li>
		<li>Click "Generate Names" to see your results</li>
		<li>Save or copy your favorite names</li>
	</ol>
	<!-- 热门生成器 -->
	<h2>Popular Elf Name Generators</h2>
	<GeneratorButton />
</section>
