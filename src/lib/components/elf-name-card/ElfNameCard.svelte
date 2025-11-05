<script lang="ts">
	import { RACE_DEFAULT_IMAGE_MAP } from '$lib/elf-name-generator/constant';
	import InfoItem from './InfoItem.svelte';
	import Helmet from './icons/Helmet.svelte';
	import Face from './icons/Face.svelte';
	import Body from './icons/Body.svelte';
	import Mountain from './icons/Mountain.svelte';
	let { firstName, lastName, gender, race, style, image }: GeneratedName = $props();

	function getRaceDefaultImage(race: ElfRace, gender: ElfGender, image: string | undefined) {
		if (image) {
			return image;
		}

		return RACE_DEFAULT_IMAGE_MAP[race][gender];
	}
</script>

<div class="card bg-base-200 lg:card-side">
	<figure>
		<img src={getRaceDefaultImage(race, gender, image)} alt="Elf character" />
	</figure>
	<div class="card-body">
		<InfoItem title="Name" content={firstName + ' ' + lastName}>
			<Helmet className="size-6 fill-neutral" />
		</InfoItem>
		<InfoItem title="Race" content={race}>
			<Face className="size-6 fill-neutral" />
		</InfoItem>
		<InfoItem title="Gender" content={gender}>
			<Body className="size-6 fill-neutral" />
		</InfoItem>
		<InfoItem title="Style" content={style}>
			<Mountain className="size-6 fill-neutral" />
		</InfoItem>
	</div>
</div>
