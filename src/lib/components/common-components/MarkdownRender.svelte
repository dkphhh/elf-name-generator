<script lang="ts">
	import Markdown from 'svelte-exmarkdown';
	import { gfmPlugin } from 'svelte-exmarkdown/gfm';

	let { md } = $props<{ md: string }>();

	// 配置 GFM 插件以支持表格
	const plugins = [gfmPlugin()];
</script>

<article class="mx-auto prose prose-base max-w-4xl lg:prose-lg">
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
		{#snippet h4(props)}
			{@const { children, style, class: className, ...rest } = props}
			<h6 {style} class={className} {...rest}>
				{@render children?.()}
			</h6>
		{/snippet}
	</Markdown>
</article>
