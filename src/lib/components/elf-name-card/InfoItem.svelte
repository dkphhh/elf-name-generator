<script lang="ts">
	import type { Snippet } from 'svelte';

	let {
		title,
		content,
		children
	}: {
		title: string;
		content: string;
		children: Snippet;
	} = $props();
</script>

<div class="flex w-full flex-row items-center justify-center gap-4 rounded-xl bg-base-300 p-2">
	<span class="l:badge-lg badge w-22 badge-soft badge-sm badge-neutral xl:w-28 xl:badge-lg">
		{@render children()}
		{title}
	</span>
	<span class="badge w-40 badge-soft badge-sm text-pretty badge-neutral xl:w-56 xl:badge-xl">
		{content}
	</span>
</div>
