<script lang="ts">
	import { notificationManager } from './notificationManager.svelte';

	let {
		type,
		message
	}: {
		type: NotificationMessage['type'];
		message: NotificationMessage['message'];
	} = $props();
</script>

<div
	class="relative alert min-w-80 alert-vertical alert-soft pt-10 pb-6 lg:max-w-180 {type === 'info'
		? 'alert-info'
		: type === 'success'
			? 'alert-success'
			: type === 'warning'
				? 'alert-warning'
				: 'alert-error'}"
>
	{#each message as msg, index (index)}
		<p class="space-y-1 text-start text-sm text-wrap">{msg}</p>
	{/each}
	<button
		onclick={() => {
			notificationManager.closeMessage();
		}}
		class="btn absolute top-1 right-1 w-fit btn-ghost btn-xs {type === 'info'
			? 'btn-info'
			: type === 'success'
				? 'btn-success'
				: type === 'warning'
					? 'btn-warning'
					: 'btn-error'}"
		>×
	</button>
</div>
