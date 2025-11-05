<script lang="ts">
	import { RACE_DEFAULT_IMAGE_MAP } from '$lib/elf-name-generator/constant';
	import { ELF_GENDER_MAP, ELF_RACE_MAP, NAME_STYLE_MAP } from '$lib/elf-name-generator/constant';
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

<div class="card card-side bg-base-200">
	<figure>
		<!-- eslint-disable-next-line svelte/no-navigation-without-resolve -->
		<a target="_blank" href={getRaceDefaultImage(race, gender, image)}
			><img
				class="max-h-64"
				src={getRaceDefaultImage(race, gender, image)}
				alt="Elf character"
			/></a
		>
	</figure>
	<div class="card-body justify-center p-1 xl:p-4">
		<InfoItem title="Name" content={firstName + ' ' + lastName}>
			<Helmet className="size-4 xl:size-6 fill-neutral" />
		</InfoItem>
		<InfoItem title="Race" content={ELF_RACE_MAP[race]}>
			<Face className="size-4 xl:size-6 fill-neutral" />
		</InfoItem>
		<InfoItem title="Gender" content={ELF_GENDER_MAP[gender]}>
			<Body className="size-4 xl:size-6 fill-neutral" />
		</InfoItem>
		<InfoItem title="Style" content={NAME_STYLE_MAP[style]}>
			<Mountain className="size-4 xl:size-6 fill-neutral" />
		</InfoItem>
	</div>
</div>
