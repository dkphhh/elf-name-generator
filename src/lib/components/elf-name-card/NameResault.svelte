<script lang="ts">
	import ElfNameCard from './ElfNameCard.svelte';
	let { generatedNames }: { generatedNames: GeneratedName[] } = $props();
</script>

<div id="names-results">
	{#if generatedNames.length > 0}
		<section class="mx-auto mb-12 max-w-6xl">
			<h2 class="mb-6 text-3xl font-bold">Generated Names</h2>
			<div class="grid grid-cols-1 gap-4 lg:grid-cols-2">
				{#each generatedNames as n, index (index)}
					<ElfNameCard
						firstName={n.firstName}
						lastName={n.lastName}
						gender={n.gender}
						race={n.race}
						style={n.style}
					/>
				{/each}
			</div>
		</section>
	{/if}
</div>
