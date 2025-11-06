<script lang="ts">
	import {
		RACE_GENERATOR_TDK,
		GENDER_GENERATOR_TDK,
		STYLE_GENERATOR_TDK
	} from '$lib/seo/tdk-config';
	import { resolve } from '$app/paths';
	import {
		ELF_RACE_MAP,
		ELF_GENDER_MAP,
		NAME_STYLE_MAP,
		ELF_GENDER_LIST,
		ELF_RACE_LIST,
		NAME_STYLE_LIST
	} from '$lib/elf-name-generator/constant';
	import { page } from '$app/state';

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

	<h2>Popular Elf Name Categories</h2>

	<!-- 依次渲染 race、gender、style，如果本页项目在其中，则删除 -->
	<ul>
		{#each ELF_RACE_LIST as race (race)}
			{#if race !== pageParam}
				<li>
					<a href={resolve(`/generator/${race}`)}>{ELF_RACE_MAP[race]} Name Generator</a> - {RACE_GENERATOR_TDK[
						race
					].description}
				</li>
			{/if}
		{/each}
		{#each ELF_GENDER_LIST as gender (gender)}
			{#if gender !== pageParam}
				<li>
					<a href={resolve(`/generator/${gender}`)}>{ELF_GENDER_MAP[gender]} Elf Name Generator</a>
					- {GENDER_GENERATOR_TDK[gender].description}
				</li>
			{/if}
		{/each}
		{#each NAME_STYLE_LIST as style (style)}
			{#if style !== pageParam}
				<li>
					<a href={resolve(`/generator/${style}`)}
						>{NAME_STYLE_MAP[style]} Style Elf Name Generator</a
					>
					- {STYLE_GENERATOR_TDK[style].description}
				</li>
			{/if}
		{/each}
	</ul>
</section>
