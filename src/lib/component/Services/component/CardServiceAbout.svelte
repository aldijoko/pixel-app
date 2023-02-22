<script>
	export let bannerImg = '';
	export let logo = '';
	export let title = '';
	export let desc = '';
	export let service = '';
	export let txtLearn = '';
	export let txtFree = '';
</script>

<div class="w-full md:flex">
	<div class="w-full md:w-2/5 p-5">
		<img src={bannerImg} alt="banner" />
	</div>
	<div class="w-full md:w-3/5 md:px-5">
		<img class="md:block hidden" src={logo} alt="logo" />
		<h3 class="font-bold text-xl md:text-3xl my-2 md:my-5">{title}</h3>
		<p class="text-sm md:text-lg text-blue-primary">{desc}</p>
		{#if service == 'cuit'}
			<a href="">
				<div
					class="w-max flex items-center gap-1 text-white  rounded-md bg-violet-primary px-4 py-1 mt-5 md:mt-28 hover:bg-orange-primary transition duration-500 hover:scale-105"
				>
					<p>{txtFree}</p>
					<span class="iconify text-xl" data-icon="material-symbols:arrow-right-alt-rounded" />
				</div>
			</a>
		{:else if service == 'innovesia'}
			<a href="">
				<div
					class="w-max hidden md:flex items-center gap-1 text-white rounded-md bg-blue-secondary px-4 py-1 mt-5 hover:bg-blue-primary transition duration-500"
				>
					<p>{txtLearn}</p>
					<span class="iconify text-xl" data-icon="material-symbols:arrow-right-alt-rounded" />
				</div>
			</a>
		{/if}
	</div>
</div>

<style>
</style>
