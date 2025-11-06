<script lang="ts">
	import { resolve } from '$app/paths';

	type CategoryMap = Record<string, string>;

	let {
		categoryMap,
		categoryList
	}: {
		categoryMap: CategoryMap;
		categoryList: (keyof CategoryMap)[];
	} = $props();
</script>

<section class="mb-12">
	<h2 class="mb-6 text-3xl font-bold">Generate by Race</h2>
	<div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
		{#each categoryList as item (item)}
			<!--eslint-disable-next-line svelte/no-navigation-without-resolve-->
			<a
				href={resolve(`/generator/${item}`)}
				class="card bg-base-100 shadow-xl transition-shadow hover:shadow-2xl"
			>
				<div class="card-body">
					<h3 class="card-title">{categoryMap[item]}</h3>
					<p class="text-gray-600">Generate authentic {categoryMap[item].toLowerCase()} names</p>
					<div class="card-actions justify-end">
						<button class="btn btn-sm btn-primary">Generate →</button>
					</div>
				</div>
			</a>
		{/each}
	</div>
</section>
