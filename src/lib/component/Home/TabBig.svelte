<script>
	export let title = '';
	export let desc = '';
	export let href = '';
	export let src = '';
	export let imgOverlay = '/img/home/media-home.png';
	export let buttonTxt = '';
	export let viewTxt = '';
</script>

<div class="w-full h-full bg-grey-primary rounded-xl md:rounded-tl-3xl md:rounded-bl-3xl">
	<div class="p-3 md:p-6">
		<div class="flex gap-2 md:pt-2 pb-4">
			<div class="aspect-video w-full border rounded-lg bg-gray-400">
				<iframe
					class="w-full h-full rounded-md"
					{src}
					title="YouTube video player"
					frameborder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					allowfullscreen
				/>
			</div>
			<a {href} class="w-full h-full hidden md:flex">
				<div class="w-full border rounded-lg opacity-50 relative">
					<img class="w-full" src={imgOverlay} alt="thumbnail" />
					<!-- <div > -->
					<p class="text-view">{viewTxt}</p>
					<!-- </div> -->
				</div>
			</a>
		</div>
		<h3 class="text-lg md:text-xl font-bold text-black">{title}</h3>
		<p class="text-sm md:text-lg text-blue-primary mb-0">{desc}</p>
		<a {href}>
			<div
				class="md:w-1/4 2xl:w-1/5 mt-5 hidden md:flex bg-green-primary items-center gap-2 px-3 py-1 border md:text-lg text-sm rounded-lg text-white cursor-pointer hover:bg-blue-primary  hover:border-blue-primary hover:text-white transition duration-500"
			>
				<img src="/img/icon/icon_whatsapp2.svg" class="w-5 h-5" alt="icon-wa" />
				<span class="text-lg text-white">{buttonTxt}</span>
			</div>
		</a>
	</div>
</div>

<style lang="postcss">
	.text-view {
		@apply absolute w-full;
		top: 50%;
		left: 50%;
		transform: translate(-15%, -50%);
		z-index: 10;
		color: white;
		font-size: 20px;
		font-weight: bold;
	}

	h3 {
		margin-bottom: 0px;
	}
</style>
