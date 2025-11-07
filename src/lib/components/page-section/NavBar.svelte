<script lang="ts">
	import { resolve } from '$app/paths';
</script>

{#snippet linksList()}
	<li><a class="text-lg" href={resolve('/generator')}>All Genarator</a></li>
	<li><a class="text-lg" href={resolve('/guide')}>Use Guide</a></li>
	<li><a class="text-lg" href={resolve('/blog')}>Blog</a></li>
	<li><a class="text-lg" href={resolve('/about')}>About</a></li>
{/snippet}

<div class="navbar fixed top-0 z-50 glass shadow-sm">
	<div class="flex-1">
		<a href={resolve('/')} class="btn text-xl btn-ghost">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
				class="lucide lucide-sparkles-icon lucide-sparkles"
				><path
					d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"
				/><path d="M20 2v4" /><path d="M22 4h-4" /><circle cx="4" cy="20" r="2" /></svg
			>
			Elf nanme generator</a
		>
	</div>
	<div class="flex-none">
		<div class="drawer drawer-end lg:hidden">
			<input id="menu-drawer" type="checkbox" class="drawer-toggle" />
			<div class="drawer-content">
				<!-- Page content here -->
				<label
					for="menu-drawer"
					class="drawer-button btn btn-square btn-ghost"
					aria-label="open sidebar"
					><svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						class="inline-block h-5 w-5 stroke-current"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
						></path>
					</svg></label
				>
			</div>
			<div class="drawer-side">
				<label for="menu-drawer" aria-label="close sidebar" class="drawer-overlay"></label>
				<ul class="menu min-h-full w-80 bg-base-200 p-4">
					{@render linksList()}
				</ul>
			</div>
		</div>

		<ul class="menu menu-horizontal hidden px-1 lg:flex">
			{@render linksList()}
		</ul>
	</div>
</div>

<div class="h-16"></div>
