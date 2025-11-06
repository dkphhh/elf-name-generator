<script lang="ts">
	import { resolve } from '$app/paths';
</script>

<section class="mx-auto max-w-4xl">
	<h2 class="mb-6 text-2xl font-bold">Explore More</h2>
	<div class="grid grid-cols-2 gap-4 md:grid-cols-4">
		<a href={resolve('/generator')} class="btn btn-outline">All Generator</a>
		<a href={resolve('/guide')} class="btn btn-outline">Naming Guide</a>
		<a href={resolve('/about')} class="btn btn-outline">About Us</a>
		<a href={resolve('/')} class="btn btn-outline">Home Page</a>
	</div>
</section>
