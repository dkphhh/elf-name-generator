<script lang="ts">
	import Markdown from 'svelte-exmarkdown';
	import { gfmPlugin } from 'svelte-exmarkdown/gfm';
	let { md } = $props<{ md: string }>();
	const plugins = [gfmPlugin()];
</script>

<article class="mx-auto prose prose-lg max-w-4xl">
	<Markdown {md} {plugins}>
		{#snippet h1(props)}
			{@const { children, style, class: className, ...rest } = props}
			<h3 {style} class={className} {...rest}>
				{@render children?.()}
			</h3>
		{/snippet}
		{#snippet h2(props)}
			{@const { children, style, class: className, ...rest } = props}
			<h4 {style} class={className} {...rest}>
				{@render children?.()}
			</h4>
		{/snippet}
		{#snippet h3(props)}
			{@const { children, style, class: className, ...rest } = props}
			<h5 {style} class={className} {...rest}>
				{@render children?.()}
			</h5>
		{/snippet}
	</Markdown>
</article>
