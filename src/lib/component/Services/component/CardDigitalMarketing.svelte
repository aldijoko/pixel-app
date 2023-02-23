<script>
	import ImageLoader from '$lib/component/LazyLoader/ImageLoader.svelte';
	import Modal from '$lib/component/Shared/Modal.svelte';

	export let title = '';
	export let desc = '';
	export let video = false;
	export let customBtn = 'bg-green-primary';
	export let src = '';
	export let imgSrc = '';
	export let itemImage = [];
	export let btnContact = '';
	export let onImgOne = () => {};
	export let onImgTwo = () => {};
	export let onImgThree = () => {};

	export let openImgOne = false;
	export let openImgTwo = false;
	export let openImgThree = false;
</script>

<Modal bind:visible={openImgOne}>
	<div class="w-full border rounded-md p-2">
		<div class="w-full flex justify-end">
			<button on:click={() => (openImgOne = false)}>
				<span class="iconify text-2xl text-blue-primary" data-icon="ri:close-circle-line" />
			</button>
		</div>
		<div class="w-full p-4">
			<img class="w-full" src="/img/service/cuit/cuit1.png" alt="dummy" />
		</div>
		<!-- <div class="w-1/2 p-5">
			<div class="flex justify-between items-center">
				<h3 class="text-blue-primary font-bold text-3xl">CUIT</h3>
				<button on:click={() => (openImgOne = false)}>
					<span class="iconify text-3xl text-blue-primary" data-icon="ri:close-circle-line" />
				</button>
			</div>
			<div class="mt-8">
				<div class="my-4">
					<p class="font-bold text-lg">Medium</p>
					<p class="text-lg">Neonbox</p>
				</div>
				<div class="my-4">
					<p class="font-bold text-lg">Size</p>
					<p class="text-lg">2.25m(H)x1m(W)x1sided</p>
				</div>
				<div class="my-4">
					<p class="font-bold text-lg">Number of unit:</p>
					<p class="text-lg">9 units</p>
				</div>
			</div>
		</div> -->
	</div>
</Modal>

<Modal bind:visible={openImgTwo}>
	<div class="w-full border rounded-md p-2">
		<div class="w-full flex justify-end">
			<button on:click={() => (openImgTwo = false)}>
				<span class="iconify text-2xl text-blue-primary" data-icon="ri:close-circle-line" />
			</button>
		</div>
		<div class="w-full p-4">
			<img class="w-full" src="/img/service/cuit/cuit2.png" alt="dummy" />
		</div>
		<!-- <div class="w-1/2 p-5">
			<div class="flex justify-between items-center">
				<h3 class="text-blue-primary font-bold text-3xl">CUIT 2</h3>
				<button on:click={() => (openImgTwo = false)}>
					<span class="iconify text-3xl text-blue-primary" data-icon="ri:close-circle-line" />
				</button>
			</div>
			<div class="mt-8">
				<div class="my-4">
					<p class="font-bold text-lg">Medium</p>
					<p class="text-lg">Neonbox</p>
				</div>
				<div class="my-4">
					<p class="font-bold text-lg">Size</p>
					<p class="text-lg">2.25m(H)x1m(W)x1sided</p>
				</div>
				<div class="my-4">
					<p class="font-bold text-lg">Number of unit:</p>
					<p class="text-lg">9 units</p>
				</div>
			</div>
		</div> -->
	</div>
</Modal>

<Modal bind:visible={openImgThree}>
	<div class="border rounded-md p-2">
		<div class="w-full flex justify-end">
			<button on:click={() => (openImgThree = false)}>
				<span class="iconify text-2xl text-blue-primary" data-icon="ri:close-circle-line" />
			</button>
		</div>
		<div class="w-full p-4">
			<img class="w-full" src="/img/service/cuit/cuit3.png" alt="dummy" />
		</div>
		<!-- <div class="w-1/2 p-5">
			<div class="flex justify-between items-center">
				<h3 class="text-blue-primary font-bold text-3xl">CUIT 3</h3>
				<button on:click={() => (openImgThree = false)}>
					<span class="iconify text-3xl text-blue-primary" data-icon="ri:close-circle-line" />
				</button>
			</div>
			<div class="mt-8">
				<div class="my-4">
					<p class="font-bold text-lg">Medium</p>
					<p class="text-lg">Neonbox</p>
				</div>
				<div class="my-4">
					<p class="font-bold text-lg">Size</p>
					<p class="text-lg">2.25m(H)x1m(W)x1sided</p>
				</div>
				<div class="my-4">
					<p class="font-bold text-lg">Number of unit:</p>
					<p class="text-lg">9 units</p>
				</div>
			</div>
		</div> -->
	</div>
</Modal>

<div class="w-full h-full">
	<div class="w-full hidden md:flex">
		<div class="w-1/2 px-5 py-2">
			{#if video}
				<iframe
					class="w-full h-[250px] rounded-md"
					{src}
					title="YouTube video player"
					frameborder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					allowfullscreen
				/>
			{:else}
				<div class="w-full h-[250px] rounded-md">
					<ImageLoader src={imgSrc} alt="imageservices" />
				</div>
			{/if}
		</div>
		<div class="w-1/2 p-4 py-2">
			<div class="w-full">
				<div class="w-full flex overflow-x-auto gap-4 h-[250px]">
					<!-- svelte-ignore a11y-click-events-have-key-events -->
					<img
						class="w-[250px] h-full rounded-md object-cover cursor-pointer"
						src="/img/service/cuit/cuit1.png"
						alt=""
						on:click={onImgOne}
					/>
					<!-- svelte-ignore a11y-click-events-have-key-events -->
					<img
						class="w-[250px] h-full rounded-md object-cover cursor-pointer"
						src="/img/service/cuit/cuit2.png"
						alt=""
						on:click={onImgTwo}
					/>
					<!-- svelte-ignore a11y-click-events-have-key-events -->
					<img
						class="w-[250px] h-full rounded-md object-cover cursor-pointer"
						src="/img/service/cuit/cuit3.png"
						alt=""
						on:click={onImgThree}
					/>
				</div>
			</div>
		</div>
	</div>
	<div class="w-full flex md:hidden">
		<div class="flex overflow-x-auto gap-4 h-[200px]">
			{#if video}
				<iframe
					class="w-full h-[172px] rounded-md"
					{src}
					title="YouTube video player"
					frameborder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					allowfullscreen
				/>
			{:else}
				<div class="aspect-video h-[172px] rounded-md">
					<img src={imgSrc} alt="imageservices" />
				</div>
			{/if}
			{#each itemImage as di}
				<img
					class="w-full h-[172px] rounded-md object-cover cursor-pointer"
					src={di.img}
					alt={di.alt}
				/>
			{/each}
		</div>
	</div>

	<div class="w-full md:flex py-5">
		<div class="w-full md:w-1/2 md:px-3">
			<h2 class="font-bold text-xl md:text-3xl mb-2">{title}</h2>
			<p class="text-blue-primary text-sm md:text-lg mb-2">{desc}</p>
			<a href="">
				<div
					class="w-max mt-5 flex items-center px-3 py-1 rounded-md {customBtn} gap-2 hover:bg-orange-primary transition duration-500"
				>
					<img src="/img/icon/icon_whatsapp2.svg" class="w-5 h-5" alt="icon-wa" />
					<span class="text-base md:text-lg text-white">{btnContact}</span>
				</div>
			</a>
		</div>
		<div class="w-full md:w-1/2 flex md:px-4" />
	</div>
	<div class="w-full hidden">
		<div class="w-1/4 h-[90px] border-r-2 px-1">
			<div class="h-1/2 flex flex-col items-center">
				<span
					class="iconify text-xl md:text-3xl text-orange-primary"
					data-icon="eva:people-outline"
				/>
				<p class="text-blue-primary text-xs">Workshorp & Training</p>
			</div>
			<div class="h-1/2 flex justify-center items-end">
				<p class="text-">58</p>
			</div>
		</div>
		<div class="w-1/4 h-[90px] border-r-2 px-1">
			<div class="h-1/2">
				<span class="iconify text-xl text-orange-primary" data-icon="eva:trending-up-outline" />
				<p class="text-blue-primary text-xs">Workshorp & Training</p>
			</div>
			<div class="h-1/2 flex justify-center items-end">
				<p class="text-">58</p>
			</div>
		</div>
		<div class="w-1/4 h-[90px] border-r-2 px-1">
			<div class="h-1/2">
				<span class="iconify text-xl text-orange-primary" data-icon="eva:trending-up-outline" />
				<p class="text-blue-primary text-xs">Workshorp & Training</p>
			</div>
			<div class="h-1/2 flex justify-center items-end">
				<p class="text-">58</p>
			</div>
		</div>
		<div class="w-1/4 h-[90px] px-1">
			<div class="h-1/2">
				<span class="iconify text-xl text-orange-primary" data-icon="eva:trending-up-outline" />
				<p class="text-blue-primary text-xs">Workshorp & Training</p>
			</div>
			<div class="h-1/2 flex justify-center items-end">
				<p class="text-">58</p>
			</div>
		</div>
	</div>
</div>
