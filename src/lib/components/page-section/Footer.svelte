<script lang="ts">
	import { resolve } from '$app/paths';
</script>

<section class="mx-auto max-w-4xl">
	<h2 class="mb-6 text-3xl font-bold">Explore More</h2>
	<div class="grid grid-cols-2 gap-4 md:grid-cols-4">
		<a href={resolve('/')} class="btn btn-outline">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				stroke-linecap="round"
				stroke-linejoin="round"
				class="lucide lucide-house-icon lucide-house icon-style"
				><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" /><path
					d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"
				/></svg
			>

			Home Page</a
		>
		<a href={resolve('/generator')} class="btn btn-outline">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				stroke-linecap="round"
				stroke-linejoin="round"
				class="lucide lucide-atom-icon lucide-atom icon-style"
				><circle cx="12" cy="12" r="1" /><path
					d="M20.2 20.2c2.04-2.03.02-7.36-4.5-11.9-4.54-4.52-9.87-6.54-11.9-4.5-2.04 2.03-.02 7.36 4.5 11.9 4.54 4.52 9.87 6.54 11.9 4.5Z"
				/><path
					d="M15.7 15.7c4.52-4.54 6.54-9.87 4.5-11.9-2.03-2.04-7.36-.02-11.9 4.5-4.52 4.54-6.54 9.87-4.5 11.9 2.03 2.04 7.36.02 11.9-4.5Z"
				/></svg
			>
			All Generator</a
		>
		<a href={resolve('/guide')} class="btn btn-outline">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				stroke-linecap="round"
				stroke-linejoin="round"
				class="lucide lucide-album-icon lucide-album icon-style"
				><rect width="18" height="18" x="3" y="3" rx="2" ry="2" /><polyline
					points="11 3 11 11 14 8 17 11 17 3"
				/></svg
			>
			Naming Guide</a
		>
		<a href={resolve('/about')} class="btn btn-outline">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				stroke-linecap="round"
				stroke-linejoin="round"
				class="lucide lucide-info-icon lucide-info icon-style"
				><circle cx="12" cy="12" r="10" /><path d="M12 16v-4" /><path d="M12 8h.01" /></svg
			>
			About Us</a
		>
	</div>
</section>
