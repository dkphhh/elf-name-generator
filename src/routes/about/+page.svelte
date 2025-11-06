<script lang="ts">
	import SeoTDK from '$lib/components/SeoTDK.svelte';
	import Footer from '$lib/components/page-section/Footer.svelte';
	import { PAGE_TDK } from '$lib/seo/tdk-config';
</script>

<SeoTDK
	title={PAGE_TDK.about.title}
	description={PAGE_TDK.about.description}
	keywords={PAGE_TDK.about.keywords}
	canonical="/about"
/>

<main class="container mx-auto px-4 py-8">
	<article class="mx-auto prose prose-lg max-w-4xl">
		<h1>About Elf Name Generator</h1>

		<section>
			<h2>Our Mission</h2>
			<p>
				We created this tool to help fantasy enthusiasts, writers, gamers, and role-players find the
				perfect elf names for their characters. Whether you're creating a D&D character, writing a
				fantasy novel, or playing World of Warcraft, we're here to inspire you.
			</p>
		</section>

		<section>
			<h2>Why Use Our Generator?</h2>
			<ul>
				<li><strong>Authentic Names:</strong> Based on established fantasy naming conventions</li>
				<li>
					<strong>Multiple Options:</strong> Generate names for different elf races and styles
				</li>
				<li><strong>Meaningful:</strong> Each name comes with its meaning and pronunciation</li>
				<li><strong>Free Forever:</strong> No registration, no ads, completely free</li>
				<li><strong>Easy to Use:</strong> Simple interface, instant results</li>
			</ul>
		</section>

		<section>
			<h2>How It Works</h2>
			<p>
				Our generator uses linguistic patterns from popular fantasy literature and games to create
				authentic-sounding elf names. We've studied naming conventions from:
			</p>
			<ul>
				<li>J.R.R. Tolkien's Middle-earth</li>
				<li>Dungeons & Dragons</li>
				<li>World of Warcraft</li>
				<li>The Elder Scrolls</li>
				<li>Other popular fantasy settings</li>
			</ul>
		</section>

		<section>
			<h2>Contact Us</h2>
			<p>
				Have suggestions or feedback? We'd love to hear from you! Contact <a
					href="mailto:dkphhh@foxmail.com"
				>
					dkphhh@foxmail.com</a
				>.
			</p>
		</section>
	</article>
	<Footer />
</main>
