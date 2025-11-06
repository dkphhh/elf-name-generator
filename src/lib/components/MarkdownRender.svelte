<script lang="ts">
	import Markdown from 'svelte-exmarkdown';
	import { gfmPlugin } from 'svelte-exmarkdown/gfm';
	let { md } = $props<{ md: string }>();
	const plugins = [gfmPlugin()];
</script>

<div class="mx-auto prose prose-lg max-w-4xl">
	<Markdown {md} {plugins} />
</div>
