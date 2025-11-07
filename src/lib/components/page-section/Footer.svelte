<script lang="ts">
	import { resolve } from '$app/paths';
	import {
		ELF_RACE_LIST,
		ELF_RACE_MAP,
		NAME_STYLE_LIST,
		NAME_STYLE_MAP
	} from '$lib/elf-name-generator/constant';
</script>

<footer class="mx-auto max-w-7xl border-t border-base-300 px-4 py-12">
	<div class="grid grid-cols-2 gap-8 text-sm md:grid-cols-4 lg:grid-cols-5">
		<!-- Generators Column -->
		<div>
			<h3 class="mb-3 font-semibold text-base-content">Generators</h3>
			<ul class="space-y-2">
				<li>
					<a
						href={resolve('/generator')}
						class="text-base-content/70 transition-colors hover:text-base-content"
					>
						All Name Generators
					</a>
				</li>
				{#each ELF_RACE_LIST.slice(0, 5) as race (race)}
					<li>
						<a
							href={resolve(`/generator/${race}`)}
							class="text-base-content/70 transition-colors hover:text-base-content"
						>
							{ELF_RACE_MAP[race]} Name Generator
						</a>
					</li>
				{/each}
			</ul>
		</div>

		<!-- Name Style< Generators Column -->
		<div>
			<h3 class="mb-3 font-semibold text-base-content">Name Style</h3>
			<ul class="space-y-2">
				<li>
					<a
						href={resolve('/generator')}
						class="text-base-content/70 transition-colors hover:text-base-content"
					>
						All Name Style
					</a>
				</li>
				{#each NAME_STYLE_LIST.slice(0, 5) as style (style)}
					<li>
						<a
							href={resolve(`/generator/${style}`)}
							class="text-base-content/70 transition-colors hover:text-base-content"
						>
							{NAME_STYLE_MAP[style]}
						</a>
					</li>
				{/each}
			</ul>
		</div>

		<!-- Resources Column -->
		<div>
			<h3 class="mb-3 font-semibold text-base-content">Navigation</h3>
			<ul class="space-y-2">
				<li>
					<a
						href={resolve('/')}
						class="text-base-content/70 transition-colors hover:text-base-content"
					>
						Home
					</a>
				</li>
				<li>
					<a
						href={resolve('/guide')}
						class="text-base-content/70 transition-colors hover:text-base-content"
					>
						Naming Guide
					</a>
				</li>
				<li>
					<a
						href={resolve('/blog')}
						class="text-base-content/70 transition-colors hover:text-base-content"
					>
						Blog
					</a>
				</li>
				<li>
					<a
						href={resolve('/about')}
						class="text-base-content/70 transition-colors hover:text-base-content"
					>
						About Us
					</a>
				</li>
			</ul>
		</div>

		<!-- Legal Column -->
		<div>
			<h3 class="mb-3 font-semibold text-base-content">Legal</h3>
			<ul class="space-y-2">
				<li>
					<a
						href={resolve('/privacy-policy')}
						class="text-base-content/70 transition-colors hover:text-base-content"
					>
						Privacy Policy
					</a>
				</li>
				<li>
					<a
						href={resolve('/terms-of-service')}
						class="text-base-content/70 transition-colors hover:text-base-content"
					>
						Terms of Service
					</a>
				</li>
			</ul>
		</div>

		<!-- Social / Info Column -->
		<div>
			<h3 class="mb-3 font-semibold text-base-content">Connect</h3>
			<ul class="space-y-2">
				<li>
					<a
						href="mailto:dkphhh@foxmial.com"
						class="text-base-content/70 transition-colors hover:text-base-content"
						>dkphhh@foxmail.com</a
					>
				</li>
				<li>
					<a
						href="https://github.com/dkphhh/elf-name-generator"
						target="_blank"
						rel="noopener noreferrer"
						class="inline-flex items-center gap-1 text-base-content/70 transition-colors hover:text-base-content"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="14"
							height="14"
							viewBox="0 0 24 24"
							fill="currentColor"
						>
							<path
								d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
							/>
						</svg>
						GitHub
					</a>
				</li>
			</ul>
			<div class="mt-6 text-xs text-base-content/50">
				© {new Date().getFullYear()} Elf Name Generator
			</div>
		</div>
	</div>
</footer>
