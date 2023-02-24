<script>
	export let title = '';
	export let href = '';
	export let img = '';
	export let imgalt = '';
	export let customImg = '';
	export let buttonTxt = '';
</script>

<div class="w-full h-full bg-grey-primary rounded-tr-3xl rounded-br-3xl relative hidden md:flex">
	<div class="md:px-6 lg:px-3 pt-6">
		<p class="text-blue-primary md:text-base lg:text-lg xl:text-xl font-bold mb-1">{title}</p>
		<a {href} class="flex items-center text-green-primary gap-1 md:mt-2">
			<p class="md:text-sm lg:text-base xl:text-lg hover:underline">{buttonTxt}</p>
			<span class="iconify text-xl" data-icon="material-symbols:arrow-right-alt-rounded" />
		</a>
	</div>

	<img
		src={img}
		alt={imgalt}
		class="absolute bottom-0 left-1/2 transform -translate-x-1/2 {customImg}"
	/>
</div>

<div class="w-full h-full flex md:hidden bg-grey-primary rounded-lg">
	<div class="w-1/2 flex flex-col items-center p-5 sm:p-10 mt-5 ">
		<p class="text-blue-primary text-xl sm:text-2xl font-bold">{title}</p>
		<a
			class="w-full flex items-center justify-center px-5 py-1 sm:py-2 mt-5 sm:mt-10 rounded-md bg-green-primary gap-2 hover:scale-105 transition duration-500"
			{href}
		>
			<!-- <img src="/img/icon/icon_whatsapp2.svg" class="w-5 h-5 md:block hidden" alt="" /> -->
			<span class="text-sm sm:text-base text-white">{buttonTxt}</span>
		</a>
	</div>
	<div class="w-1/2 px-2 flex justify-center">
		<img class="" src={img} alt={imgalt} />
	</div>
</div>

<style lang="postcss">
	h2,
	h3,
	p {
		margin-bottom: 0px;
	}
</style>
