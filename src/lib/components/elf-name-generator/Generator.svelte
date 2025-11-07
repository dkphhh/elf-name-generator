<script lang="ts">
	import { resolve } from '$app/paths';
	import { notificationManager } from '$lib/components/common-components/notification/notificationManager.svelte';
	import {
		ELF_GENDER_LIST,
		ELF_RACE_LIST,
		NAME_STYLE_LIST,
		NAME_STYLE_MAP,
		ELF_RACE_MAP,
		ELF_GENDER_MAP
	} from '$lib/elf-name-generator/constant';

	let {
		generatedNames = $bindable(),
		initialOptions = {}
	}: { generatedNames: GeneratedName[]; initialOptions?: Partial<GeneratorOptions> } = $props();

	let generateOptions: GeneratorOptions = $state({
		gender: initialOptions.gender,
		race: initialOptions.race,
		count: initialOptions.count || 6,
		style: initialOptions.style,
		includeLastName: initialOptions.includeLastName ?? true
	});
	// 生成状态
	let isGenerating = $state(false);

	// 生成名字函数
	async function generateNames() {
		isGenerating = true;
		const data = JSON.stringify(generateOptions);
		const url = resolve('/api/elf-name-generate');
		const res = await fetch(url, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: data
		});

		if (res.ok) {
			const result: GeneratedName[] = await res.json();
			generatedNames = result;

			// 等待 DOM 更新后滚动到结果区域
			setTimeout(() => {
				const resultsElement = document.getElementById('names-results');
				if (resultsElement) {
					resultsElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
				}
			}, 100);
		} else {
			notificationManager.sentMessage({
				type: 'error',
				message: [`Failed to generate names:${res.statusText}`]
			});
		}

		isGenerating = false;
	}
</script>

<!-- Generator Section -->
<section class="mx-auto mb-12 max-w-xl">
	<fieldset class="fieldset gap-4 rounded-box border border-base-300 bg-base-200 p-6">
		<legend class="fieldset-legend text-2xl font-bold">Generate Your Elf Name</legend>

		<!-- 性别 -->
		<label class="select w-full" for="gender">
			<span class="label min-w-38 font-semibold">Choose Elf Gender</span>
			<select id="gender" class="select-bordered select w-full" bind:value={generateOptions.gender}>
				<option disabled selected>Choose Elf Gender</option>
				<option value={undefined}>Random</option>
				{#each ELF_GENDER_LIST as g, index (index)}
					{@const DisplayGender = ELF_GENDER_MAP[g]}
					<option value={g}>{DisplayGender}</option>
				{/each}
			</select>
		</label>

		<!-- 种族 -->
		<label class="select w-full" for="race">
			<span class="label min-w-38 font-semibold">Choose Elf Race</span>
			<select id="race" class="select-bordered select w-full" bind:value={generateOptions.race}>
				<option disabled selected>Choose Elf Race</option>
				<option value={undefined}>Random</option>
				{#each ELF_RACE_LIST as r, index (index)}
					{@const DisplayRace = ELF_RACE_MAP[r]}
					<option value={r}>{DisplayRace}</option>
				{/each}
			</select>
		</label>

		<!-- 名字风格 -->
		<label class="select w-full" for="style">
			<span class="label min-w-38 font-semibold">Choose Name Style</span>
			<select id="style" class="select-bordered select w-full" bind:value={generateOptions.style}>
				<option disabled selected>Choose Name Style</option>
				<option value={undefined}>Random</option>
				{#each NAME_STYLE_LIST as n, index (index)}
					{@const DisplayStyle = NAME_STYLE_MAP[n]}
					<option value={n}>{DisplayStyle}</option>
				{/each}
			</select>
		</label>

		<!-- 选择数量 -->
		<div class="flex w-full flex-col gap-1">
			<label class="input w-full" for="count">
				<span class="label min-w-38 font-semibold">Number of Names</span>
				<input
					id="count"
					type="range"
					min="1"
					max="10"
					bind:value={generateOptions.count}
					class="range range-primary"
				/>
			</label>
			<div class="mt-1 flex justify-between px-2 text-xs">
				<span class="font-semibold text-primary"
					>generate {generateOptions.count}
					{generateOptions.count && generateOptions.count > 1 ? 'names' : 'name'}</span
				>
			</div>
		</div>

		<!-- 是否包含姓氏 -->
		<div class="mt-4">
			<label class="label cursor-pointer">
				<span class="label-text">Include Last Name</span>
				<input
					type="checkbox"
					bind:checked={generateOptions.includeLastName}
					class="checkbox checkbox-primary"
				/>
			</label>
		</div>

		<!-- 生成按钮 -->
		<button
			class="btn mt-6 w-full btn-lg btn-primary"
			onclick={generateNames}
			disabled={isGenerating}
		>
			{isGenerating ? 'Generating...' : 'Generate Names'}
		</button>
	</fieldset>
</section>
