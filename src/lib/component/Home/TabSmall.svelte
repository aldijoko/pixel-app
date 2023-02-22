<script>
	export let title = '';
	export let href = '';
	export let img = '';
	export let imgalt = '';
	export let customImg = '';
	export let buttonTxt = '';
</script>

<div class="w-full h-full bg-grey-primary rounded-tr-3xl rounded-br-3xl relative hidden md:flex">
	<div class="px-8 pt-6">
		<p class="text-blue-primary text-lg md:text-xl font-bold mb-1">{title}</p>
		<a {href} class="flex items-center text-green-primary gap-1">
			<p class="text-sm hover:underline">{buttonTxt}</p>
			<span class="iconify text-xl" data-icon="material-symbols:arrow-right-alt-rounded" />
		</a>
	</div>

	<img
		src={img}
		alt={imgalt}
		class="absolute bottom-0 left-1/2 transform -translate-x-1/2 {customImg}"
	/>
</div>

<div class="w-full flex md:hidden bg-grey-primary rounded-lg">
	<div class="w-full p-2">
		<p class="text-blue-primary text-lg md:text-xl font-bold">{title}</p>
		<a
			class="w-full flex items-center justify-center px-3 py-1 mt-4 rounded-md bg-green-primary gap-2 hover:scale-105 transition duration-500"
			{href}
		>
			<img src="/img/icon/icon_whatsapp2.svg" class="w-5 h-5" alt="" />
			<span class="text-base md:text-lg text-white">{buttonTxt}</span>
		</a>
	</div>
	<div class="w-1/2 px-2 flex items-end">
		<img class="w-full" src={img} alt={imgalt} />
	</div>
</div>

<style lang="postcss">
	h2,
	h3,
	p {
		margin-bottom: 0px;
	}
</style>
