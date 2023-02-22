<script>
	import Sidebar from './Sidebar.svelte';
	import Header from './index.svelte';

	let open;
</script>

<div class="topbar border-green-primary border-b-2">
	<aside
		class="md:hidden flex absolute w-full h-full scrollbar-none shadow-lg overflow-y-auto"
		class:open
	>
		<Sidebar bind:open />
	</aside>
	<div class="w-full border-b z-40 bg-white">
		<div class="mx-auto">
			<Header bind:open />
		</div>
	</div>
</div>

<style>
	aside {
		top: 0px;
		right: -100%;
		height: 100vh;
		z-index: 1;
		transition: right 0.3s ease-in-out;
	}

	.open {
		right: 0;
	}
</style>
