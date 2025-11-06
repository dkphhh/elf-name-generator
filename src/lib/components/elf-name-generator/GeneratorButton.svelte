<script lang="ts">
	import { resolve } from '$app/paths';
	import {
		ELF_RACE_MAP,
		ELF_RACE_LIST,
		ELF_GENDER_LIST,
		ELF_GENDER_MAP,
		NAME_STYLE_LIST,
		NAME_STYLE_MAP
	} from '$lib/elf-name-generator/constant';

	import { page } from '$app/state';

	let pageParam = $derived(page.params.page as string);

	/**
	 * 合并所有类别及其对应的 Map
	 */
	type CategoryItem = {
		key: ElfGender | ElfRace | NameStyle;
		displayName: string;
	};

	let allCategories = $derived.by((): CategoryItem[] => {
		const categories: CategoryItem[] = [];

		// 添加性别类别
		ELF_GENDER_LIST.forEach((gender) => {
			categories.push({
				key: gender,
				displayName: ELF_GENDER_MAP[gender]
			});
		});

		// 添加种族类别
		ELF_RACE_LIST.forEach((race) => {
			categories.push({
				key: race,
				displayName: ELF_RACE_MAP[race]
			});
		});

		// 添加风格类别
		NAME_STYLE_LIST.forEach((style) => {
			categories.push({
				key: style,
				displayName: NAME_STYLE_MAP[style]
			});
		});

		return categories;
	});

	/**
	 * 过滤掉当前页面的类别
	 */
	let filteredCategories = $derived.by(() => {
		return allCategories.filter((category) => category.key !== pageParam);
	});

	/**
	 * 随机选择 4 个类别
	 * 使用 Fisher-Yates 洗牌算法
	 */
	let randomCategories = $derived.by((): CategoryItem[] => {
		const shuffled = [...filteredCategories];
		// Fisher-Yates 洗牌算法
		for (let i = shuffled.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
		}
		// 取前 4 个
		return shuffled.slice(0, 4);
	});
</script>

{#snippet CategoryButton(category: CategoryItem)}
	<a href={resolve(`/generator/${category.key}`)} class="btn btn-outline">
		{category.displayName}
		{ELF_RACE_LIST.includes(category.key as ElfRace) ? '' : 'Elf'} Names
	</a>
{/snippet}

<div class="not-prose my-6 grid grid-cols-1 gap-4 md:grid-cols-2">
	{#each randomCategories as category (category.key)}
		{@render CategoryButton(category)}
	{/each}
</div>
