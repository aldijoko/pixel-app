<script>
	export let title = '';
	export let bgImage = '';
	export let active = '';
</script>

<div
	class="w-full h-full flex justify-center items-center text-center border rounded-xl p-5 {bgImage} bg-style relative"
>
	<div class="w-full h-full bg-overlay absolute round" class:is-active={active} />
	<h3 class="font-medium md:font-bold text-white text-xs md:text-lg">{title}</h3>
</div>

<style lang="postcss">
	.bg-style {
		background-size: cover;
		background-position: center;
		background-repeat: no-repeat;
	}

	.bg-overlay:hover {
		background-color: #43d57a;
		opacity: 0.5;
		transition: 1s;
		cursor: pointer;
	}

	h3 {
		margin-bottom: 0px;
	}

	.is-active {
		background-color: #43d57a;
	}
</style>
