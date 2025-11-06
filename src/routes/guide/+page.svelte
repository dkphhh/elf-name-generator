<script lang="ts">
	import SeoTDK from '$lib/components/common-components/SeoTDK.svelte';
	import { PAGE_TDK } from '$lib/seo/tdk-config';
	import Footer from '$lib/components/page-section/Footer.svelte';
	import GeneratorButton from '$lib/components/elf-name-generator/GeneratorButton.svelte';
</script>

<SeoTDK
	title={PAGE_TDK.guide.title}
	description={PAGE_TDK.guide.description}
	keywords={PAGE_TDK.guide.keywords}
	canonical="/guide"
/>

<main class="container mx-auto px-4 py-8">
	<article class="mx-auto prose prose-lg max-w-4xl">
		<h1>Ultimate Guide to Elf Names</h1>

		<section>
			<h2>Understanding Elf Naming Traditions</h2>
			<p>
				Elf names across fantasy literature and games follow certain patterns that make them
				recognizable and memorable. This guide will help you understand these conventions and create
				authentic-sounding names for your characters.
			</p>
		</section>

		<section>
			<h2>Common Elf Name Elements</h2>

			<h3>Prefixes and Their Meanings</h3>
			<ul>
				<li><strong>Ael-</strong> - Star, light</li>
				<li><strong>Ara-</strong> - Noble, royal</li>
				<li><strong>Gal-</strong> - Light, radiance</li>
				<li><strong>Leg-</strong> - Green, leaf</li>
				<li><strong>Thran-</strong> - Vigorous, sturdy</li>
			</ul>

			<h3>Suffixes and Their Meanings</h3>
			<ul>
				<li><strong>-ion/-ien</strong> - Son/daughter of</li>
				<li><strong>-iel/-ial</strong> - Light, maiden</li>
				<li><strong>-dir/-dor</strong> - Land, realm</li>
				<li><strong>-las/-lass</strong> - Leaf, foliage</li>
				<li><strong>-wen/-win</strong> - Maiden, fair</li>
			</ul>
		</section>

		<section>
			<h2>Naming Conventions by Race</h2>

			<h3>High Elves</h3>
			<p>
				High elf names are long, elegant, and often incorporate references to celestial bodies,
				magic, or noble lineage. Examples: Galadriel, Elrond, Celebrimbor.
			</p>

			<h3>Wood Elves</h3>
			<p>
				Wood elf names tend to be shorter and more connected to nature, featuring animal and plant
				references. Examples: Legolas, Thranduil, Tauriel.
			</p>

			<h3>Dark Elves</h3>
			<p>
				Dark elf (drow) names often have harsh consonants and mysterious sounds. Examples: Drizzt,
				Jarlaxle, Zaknafein.
			</p>
		</section>

		<section>
			<h2>Tips for Creating Your Own Elf Names</h2>
			<ol>
				<li>Use flowing vowels (a, e, i) between consonants</li>
				<li>Avoid harsh consonant clusters unless creating dark elf names</li>
				<li>Consider the character's backstory and heritage</li>
				<li>Think about what the name means in your world</li>
				<li>Say the name out loud to check if it sounds right</li>
			</ol>
		</section>

		<section>
			<h2>Popular Elf Name Generators</h2>
			<GeneratorButton />
		</section>

		<section>
			<h2>Elf Names in Popular Culture</h2>

			<h3>Tolkien's Middle-earth</h3>
			<p>
				J.R.R. Tolkien created the most influential elf naming system, based on his invented
				Sindarin and Quenya languages. Names like Arwen, Legolas, and Galadriel set the standard for
				fantasy elf names.
			</p>

			<h3>Dungeons & Dragons</h3>
			<p>
				D&D expands on Tolkien's work with multiple elf subraces, each with distinct naming
				conventions. From the noble high elves to the mysterious drow, each culture has unique
				patterns.
			</p>

			<h3>World of Warcraft</h3>
			<p>
				WoW introduces night elves with Darnassian names, blood elves with Thalassian names, and
				void elves with corrupted variants.
			</p>
		</section>

		<section>
			<h2>Frequently Asked Questions</h2>

			<h3>Do elf names have meanings?</h3>
			<p>
				Yes! In most fantasy settings, elf names are meaningful and often describe characteristics,
				deeds, or family heritage. Our generator includes meanings for generated names.
			</p>

			<h3>Can I use apostrophes in elf names?</h3>
			<p>
				While some fantasy settings use apostrophes (especially for drow names like D'Aerthe), many
				traditionalists prefer names without them for a more authentic feel.
			</p>

			<h3>How long should an elf name be?</h3>
			<p>
				Elf names typically range from 2-4 syllables for first names. High elves tend toward longer
				names, while wood elves prefer shorter ones.
			</p>
		</section>
	</article>
	<Footer />
</main>
