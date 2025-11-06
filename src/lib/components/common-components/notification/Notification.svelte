<script lang="ts">
	import { notificationManager } from './notificationManager.svelte';
	import NotificationPanel from './NotificationPanel.svelte';
</script>

{#if notificationManager.visible}
	<div class="toast toast-top z-9999 w-fit">
		{#if notificationManager.message}
			<NotificationPanel type={notificationManager.type} message={notificationManager.message} />
		{:else}
			<NotificationPanel type="error" message={['发生未知错误，请稍后再试']} />
		{/if}
	</div>
{/if}
