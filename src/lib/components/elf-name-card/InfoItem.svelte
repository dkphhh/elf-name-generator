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

<div class="flex w-full flex-row items-center justify-start gap-4 rounded-xl bg-base-300 p-2">
	<span class="badge w-32 badge-soft badge-lg badge-neutral">
		{@render children()}
		{title}
	</span>
	<span class="badge w-64 badge-soft badge-xl text-pretty badge-neutral">
		{content}
	</span>
</div>
