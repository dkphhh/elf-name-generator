<script lang="ts">
	import { resolve } from '$app/paths';
	import SeoTDK from '$lib/components/SeoTDK.svelte';
	import {
		ELF_RACE_LIST,
		ELF_RACE_MAP,
		ELF_GENDER_LIST,
		ELF_GENDER_MAP
	} from '$lib/elf-name-generator/constant';
</script>

<SeoTDK
	title="All Elf Name Generators - Browse By Race & Gender"
	description="Browse all elf name generators by race and gender. Generate names for High Elves, Wood Elves, Dark Elves, and more. Free fantasy name generators for D&D and creative writing."
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
	<section class="mb-12 text-center">
		<h1 class="mb-4 text-4xl font-bold md:text-6xl">All Elf Name Generators</h1>
		<p class="mx-auto max-w-2xl text-xl text-gray-600">
			Choose from our collection of specialized elf name generators by race or gender.
		</p>
	</section>

	<!-- 种族生成器 -->
	<section class="mb-12">
		<h2 class="mb-6 text-3xl font-bold">Generate by Race</h2>
		<div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
			{#each ELF_RACE_LIST as race (race)}
				<a
					href={resolve(`/generator/${race}`)}
					class="card bg-base-100 shadow-xl transition-shadow hover:shadow-2xl"
				>
					<div class="card-body">
						<h3 class="card-title">{ELF_RACE_MAP[race]}</h3>
						<p class="text-gray-600">Generate authentic {ELF_RACE_MAP[race].toLowerCase()} names</p>
						<div class="card-actions justify-end">
							<button class="btn btn-sm btn-primary">Generate →</button>
						</div>
					</div>
				</a>
			{/each}
		</div>
	</section>

	<!-- 性别生成器 -->
	<section class="mb-12">
		<h2 class="mb-6 text-3xl font-bold">Generate by Gender</h2>
		<div class="grid grid-cols-1 gap-4 md:grid-cols-3">
			{#each ELF_GENDER_LIST as gender (gender)}
				<a
					href={resolve(`/generator/${gender}`)}
					class="card bg-base-100 shadow-xl transition-shadow hover:shadow-2xl"
				>
					<div class="card-body">
						<h3 class="card-title">{ELF_GENDER_MAP[gender]}</h3>
						<p class="text-gray-600">Generate {ELF_GENDER_MAP[gender].toLowerCase()} elf names</p>
						<div class="card-actions justify-end">
							<button class="btn btn-sm btn-primary">Generate →</button>
						</div>
					</div>
				</a>
			{/each}
		</div>
	</section>

	<!-- 返回主页 -->
	<section class="text-center">
		<a href={resolve('/')} class="btn btn-outline btn-lg">← Back to Main Generator</a>
	</section>
</main>
