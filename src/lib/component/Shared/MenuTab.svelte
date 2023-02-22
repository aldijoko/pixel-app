<script>
	// @ts-nocheck
	export let customclass = 'flex';
	export let items = [];
	export let activeTab = 1;

	const handleClick = (tabValue) => () => (activeTab = tabValue);
</script>

<div class="w-full bg-grey-primary rounded-full py-5 px-10 justify-between {customclass}">
	{#each items as item}
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<div
			class="cursor-pointer hover:text-green-primary transition duration-300"
			class:is-active={activeTab === item.value}
			on:click={handleClick(item.value)}
		>
			<p class="text-lg font-medium">{item.name}</p>
		</div>
	{/each}
</div>

<style lang="postcss">
	.is-active {
		@apply text-green-primary;
		padding-bottom: 5px;
		border-bottom: 2px solid #43d57a;
	}

	p {
		margin-bottom: 0px;
	}
</style>
