<script lang="ts">
	import { resolve } from '$app/paths';
	import { notificationManager } from '$lib/notification/notificationManager.svelte';

	// 生成选项类型
	const generateOptions: GeneratorOptions = $state({
		gender: undefined,
		race: undefined,
		count: undefined,
		style: undefined,
		includeLastName: true
	});

	// 生成的名字列表
	let generatedNames: GeneratedName[] = $state([]);

	// 生成状态
	let isGenerating = $state(false);

	// 生成名字函数
	async function generateNames() {
		isGenerating = true;
		const data = JSON.stringify(generateOptions);
		const url = resolve('/api/elf-name-generate');
		const res = await fetch(url, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: data
		});

		if (res.ok) {
			const result: GeneratedName[] = await res.json();
			generatedNames = result;
		} else {
			notificationManager.sentMessage({
				type: 'error',
				message: [`Failed to generate names:${res.statusText}`]
			});
		}

		isGenerating = false;
	}
</script>

<svelte:head>
	<title>Elf Name Generator - Create Fantasy Elf Names Instantly</title>
	<meta
		name="description"
		content="Generate unique fantasy elf names for your characters. Free elf name generator with meanings, multiple races, and customization options. Perfect for D&D, WoW, and fantasy writing."
	/>
	<meta
		name="keywords"
		content="elf name generator, fantasy name generator, dnd elf names, wood elf names, high elf names, dark elf names"
	/>
	<link rel="canonical" href="https://yoursite.com/" />
</svelte:head>

<main class="container mx-auto px-4 py-8">
	<!-- Hero Section -->
	<section class="mb-12 text-center">
		<h1 class="mb-4 text-4xl font-bold md:text-6xl">Elf Name Generator</h1>
		<p class="mx-auto max-w-2xl text-xl text-gray-600">
			Create unique and meaningful fantasy elf names instantly. Perfect for D&D characters, fantasy
			novels, games, and role-playing adventures.
		</p>
	</section>

	<!-- Generator Section -->
	<section class="mx-auto mb-12 max-w-4xl">
		<div class="card bg-base-100 shadow-xl">
			<div class="card-body">
				<h2 class="mb-4 card-title text-2xl">Generate Your Elf Name</h2>

				<div class=" mb-4">
					<label class="label" for="gender">
						<span class="label-text font-semibold">Gender</span>
					</label>
					<select
						id="gender"
						class="select-bordered select w-full"
						bind:value={generateOptions.gender}
					>
						<option value="male">Male</option>
						<option value="female">Female</option>
						<option value="neutral">Neutral</option>
					</select>
				</div>

				<div class=" mb-4">
					<label class="label" for="count">
						<span class="label-text font-semibold">Number of Names</span>
					</label>
					<input
						id="count"
						type="range"
						min="1"
						max="50"
						bind:value={generateOptions.count}
						class="range range-primary"
					/>
					<span class="mt-2 text-sm text-gray-600">{generateOptions.count} names</span>
				</div>

				<div class=" mb-4">
					<label class="label cursor-pointer">
						<span class="label-text">Include Last Name</span>
						<input
							type="checkbox"
							bind:checked={generateOptions.includeLastName}
							class="checkbox checkbox-primary"
						/>
					</label>
				</div>

				<div class=" mb-4">
					<label class="label cursor-pointer">
						<span class="label-text">Include Name Meaning</span>
						<input
							type="checkbox"
							bind:checked={generateOptions.includeMeaning}
							class="checkbox checkbox-primary"
						/>
					</label>
				</div>

				<button
					class="btn w-full btn-lg btn-primary"
					onclick={generateNames}
					disabled={isGenerating}
				>
					{isGenerating ? 'Generating...' : 'Generate Names'}
				</button>
			</div>
		</div>
	</section>

	<!-- Results Section -->
	{#if generatedNames.length > 0}
		<section class="mx-auto mb-12 max-w-4xl">
			<h2 class="mb-6 text-3xl font-bold">Generated Names</h2>
			<div class="grid grid-cols-1 gap-4 md:grid-cols-2">
				{#each generatedNames as name, index (index)}
					<div class="card border border-gray-200 bg-base-100">
						<div class="card-body">
							<h3 class="card-title">{name.firstName + ' ' + name.lastName}</h3>
							{#if name.meaning}
								<p class="text-sm text-gray-600">{name.meaning}</p>
							{/if}
						</div>
					</div>
				{/each}
			</div>
		</section>
	{/if}

	<!-- SEO Content Section -->
	<section class="mx-auto prose prose-lg mb-12 max-w-4xl">
		<h2>About Elf Names</h2>
		<p>
			Elf names are known for their melodious and elegant sound, often reflecting the natural beauty
			and ancient wisdom of elven culture. Our elf name generator creates authentic-sounding names
			based on various fantasy traditions including Tolkien's Middle-earth, Dungeons & Dragons, and
			other popular fantasy settings.
		</p>

		<h3>Popular Elf Name Categories</h3>
		<ul>
			<li><a href="/generator/high-elf">High Elf Names</a> - Noble and sophisticated</li>
			<li><a href="/generator/wood-elf">Wood Elf Names</a> - Nature-inspired and wild</li>
			<li><a href="/generator/dark-elf">Dark Elf Names</a> - Mysterious and powerful</li>
			<li><a href="/generator/night-elf">Night Elf Names</a> - Mystical and ancient</li>
		</ul>

		<h3>How to Use This Generator</h3>
		<ol>
			<li>Select your preferred gender (male, female, or neutral)</li>
			<li>Choose how many names you want to generate</li>
			<li>Optionally include last names and meanings</li>
			<li>Click "Generate Names" to see your results</li>
			<li>Save or copy your favorite names</li>
		</ol>
	</section>

	<!-- Quick Links -->
	<section class="mx-auto max-w-4xl">
		<h2 class="mb-6 text-2xl font-bold">Explore More</h2>
		<div class="grid grid-cols-2 gap-4 md:grid-cols-4">
			<a href="/generator/male" class="btn btn-outline">Male Elf Names</a>
			<a href="/generator/female" class="btn btn-outline">Female Elf Names</a>
			<a href="/guide" class="btn btn-outline">Naming Guide</a>
			<a href="/blog" class="btn btn-outline">Blog</a>
		</div>
	</section>
</main>
