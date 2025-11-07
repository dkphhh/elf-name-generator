<script lang="ts">
	import MarkdownRender from '$lib/components/common-components/MarkdownRender.svelte';

	const testMd = `# Test Table

This is a test paragraph before the table.

| Feature | Value |
| ------- | ----- |
| Test 1  | Works |
| Test 2  | Also works |

Another paragraph after the table.`;
</script>

<div class="container mx-auto px-4 py-8">
	<MarkdownRender md={testMd} />
</div>
