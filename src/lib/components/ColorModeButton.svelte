<script lang="ts">
	import { onMount } from 'svelte';

	let themeToggle: HTMLInputElement | null = $state(null);
	/**
	 * 设置并应用主题。
	 * @param {'light' | 'dark' | 'system'} theme - 要应用的主题。
	 */
	function setTheme(theme: 'light' | 'dark' | 'system') {
		let themeToApply = theme;
		// 如果是 system，则根据系统偏好设置
		if (theme === 'system') {
			themeToApply = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
		}

		// 设置 data-theme 属性以应用样式
		document.documentElement.setAttribute('data-theme', themeToApply);
		// 保存用户的选择 (light, dark, or system)
		localStorage.setItem('theme', theme);

		// 同步 checkbox 的状态

		if (themeToggle) {
			themeToggle.checked = themeToApply === 'dark';
		}
	}

	onMount(() => {
		// 主题已经在 app.html 中初始化，这里只需要同步 UI 状态
		const currentTheme = document.documentElement.getAttribute('data-theme');
		if (themeToggle) {
			themeToggle.checked = currentTheme === 'dark';
		}

		// 监听系统主题变化（当用户选择 system 模式时）
		const savedTheme = localStorage.getItem('theme');
		if (savedTheme === 'system') {
			const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
			const handleChange = () => {
				setTheme('system');
			};
			mediaQuery.addEventListener('change', handleChange);

			return () => {
				mediaQuery.removeEventListener('change', handleChange);
			};
		}
	});
</script>

<svelte:head>
	<script>
		// 防止暗黑模式闪烁（FOUC）
		// 此脚本必须在页面渲染前同步执行
		// 使用 IIFE 立即执行函数，避免污染全局作用域
		(function () {
			try {
				// 从 localStorage 获取保存的主题设置
				const savedTheme = localStorage.getItem('theme') || 'system';
				let themeToApply = savedTheme;

				// 如果设置为 system，则根据系统偏好判断
				if (savedTheme === 'system') {
					themeToApply = window.matchMedia('(prefers-color-scheme: dark)').matches
						? 'dark'
						: 'light';
				}

				// 立即设置 data-theme 属性
				document.documentElement.setAttribute('data-theme', themeToApply);
			} catch (e) {
				// 如果出错，使用默认的 light 主题
				console.error('Theme initialization error:', e);
			}
		})();
	</script>
</svelte:head>
<label
	class=" swap fixed top-2 right-2 z-50 swap-rotate lg:top-4 lg:right-4"
	aria-label="亮/暗色模式切换"
	title="亮/暗色模式"
>
	<!-- this hidden checkbox controls the state -->
	<input
		bind:this={themeToggle}
		type="checkbox"
		class="theme-controller hidden"
		onchange={() => {
			if (!themeToggle) return;
			const isChecked = themeToggle.checked;
			setTheme(isChecked ? 'dark' : 'light');
		}}
	/>

	<!-- sun icon -->

	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 24 24"
		class="lucide lucide-sun-icon lucide-sun swap-off h-8 w-8 fill-none stroke-current stroke-[1.5px]"
		><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path
			d="m4.93 4.93 1.41 1.41"
		></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"
		></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path></svg
	>

	<!-- moon icon -->
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 24 24"
		class="lucide lucide-moon-icon lucide-moon swap-on h-8 w-8 fill-none stroke-current stroke-[1.5px]"
		><path
			d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401"
		></path></svg
	>
</label>
