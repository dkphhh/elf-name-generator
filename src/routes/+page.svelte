<script lang="ts">
	import Generator from '$lib/components/elf-name-generator/Generator.svelte';
	import NameResault from '$lib/components/elf-name-card/NameResault.svelte';
	import SeoTDK from '$lib/components/common-components/seo/SeoTDK.svelte';
	import ContentSection from '$lib/components/page-section/ContentSection.svelte';
	import FrontSection from '$lib/components/page-section/FrontSection.svelte';
	// 生成的名字列表
	let generatedNames: GeneratedName[] = $state([]);
</script>

<!-- 使用默认 TDK -->
<SeoTDK canonical="/" />

<!-- Hero Section -->
<main class="container mx-auto px-4 py-8">
	<!-- Hero Section -->
	<FrontSection
		pageTitle="Elf Name Generator"
		pageDescription="Create unique and meaningful fantasy elf names instantly. Perfect for D&D characters, fantasy
			novels, games, and role-playing adventures."
	/>

	<!-- Generator Section -->
	<Generator bind:generatedNames />

	<!-- Results Section -->
	<NameResault {generatedNames} />

	<!-- SEO Content Section -->
	<ContentSection
		contentTitle="About Elf Names"
		content="Elf names are known for their melodious and elegant sound, often reflecting the natural beauty
			and ancient wisdom of elven culture. Our elf name generator creates authentic-sounding names
			based on various fantasy traditions including Tolkien's Middle-earth, Dungeons & Dragons, and
			other popular fantasy settings."
	/>
</main>
