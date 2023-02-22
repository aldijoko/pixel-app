<script>
	// @ts-nocheck

	export let open = false;

	const clickOutside = (node, { enabled: initialEnabled, cb }) => {
		const handleOutsideClick = ({ target }) => {
			if (!node.contains(target)) {
				cb();
			}
		};

		function update({ enabled }) {
			if (enabled) {
				window.addEventListener('click', handleOutsideClick);
			} else {
				window.removeEventListener('click', handleOutsideClick);
			}
		}

		update({ enabled: initialEnabled });
		return {
			update,
			destroy() {
				window.removeEventListener('click', handleOutsideClick);
			}
		};
	};
</script>

<button
	class="text-gray-500 hover:text-gray-700 cursor-pointer border-none focus:outline-none"
	class:open
	on:click={() => (open = !open)}
>
	<span class="iconify text-4xl" data-icon="eva:menu-arrow-outline" />
</button>

<style>
</style>
