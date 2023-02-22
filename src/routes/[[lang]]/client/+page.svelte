<script>
	import ImageLoader from '$lib/component/LazyLoader/ImageLoader.svelte';
	import MetaData from '$lib/component/Shared/MetaData.svelte';
	import NewsCard from '$lib/component/Shared/NewsCard.svelte';
	import { ClientLogo } from '$lib/store';
	import { fly } from 'svelte/transition';
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';

	const metadata = {
		title: 'Our Client - Pixel Group',
		description: 'Our Client Pixel Group',
		url: ''
	};

	console.log($page.url);
	export let data;
</script>

<MetaData {metadata} />
<section in:fly={{ x: -30, duration: 1000, delay: 200 }} out:fly={{ x: 15, duration: 200 }}>
	<div class="w-full h-full flex flex-col-reverse md:flex-row pt-32 pb-5 md:pb-10">
		<div
			class="w-full md:w-1/2 px-6 md:pl-[194px] md:pr-10 flex flex-col justify-center md:text-start text-center"
		>
			<h1 class="text-2xl md:text-4xl mt-5 ">
				{data.lets} <br /> <span class="font-bold ">{data.titleClient}</span>
			</h1>
			<p class="text-sm md:text-lg text-blue-primary py-2">
				{data.descClient}
			</p>
			<div class="w-full md:w-1/2 flex items-center mt-5 md:justify-start justify-center">
				<a
					class="flex items-center px-3 py-1 rounded-md bg-green-primary gap-2 hover:scale-105 hover:bg-blue-primary transition duration-500"
					href="#"
				>
					<img src="/img/icon/icon_whatsapp2.svg" class="w-5 h-5" alt="" />
					<span class="text-xs md:text-lg text-white">Contact Us</span>
				</a>
			</div>
		</div>
		<div class="w-full md:w-1/2 flex pl-5 justify-end">
			<ImageLoader src="/img/client/img-client.png" alt="bg-client" customeClass="w-full" />
		</div>
	</div>

	<div class="w-full px-10 md:px-[194px] py-5 md:py-10">
		<h2 class="font-bold text-2xl md:text-4xl mt-5 mb-1 text-center text-black">
			{data.project}
		</h2>
		<div class="grid grid-cols-1 md:grid-cols-2 gap-4 py-5">
			<NewsCard
				href="client/oppo"
				projects={true}
				image="/img/client/oppo/oppo.png"
				title="OPPO Indonesia"
				customClass="bg-grey-primary"
			/>
			<NewsCard
				href="client/hyundai"
				projects={true}
				image="/img/client/hyundai/hyundai-client.png"
				title="Hyundai"
				customClass="bg-grey-primary"
			/>
			<NewsCard
				href="client/mandiri"
				projects={true}
				image="/img/client/mandiri/mandiri.png"
				title="Mandiri"
				customClass="bg-grey-primary"
			/>
			<NewsCard
				href="client/samsung"
				projects={true}
				image="/img/client/samsung/samsung.png"
				title="Samsung"
				customClass="bg-grey-primary"
			/>
		</div>
	</div>

	<div class="w-full px-10 md:px-[194px] py-5">
		<h2 class="font-bold text-2xl md:text-4xl mt-5 mb-1 text-center text-black">
			{data.descTrustOne} <br />
			{data.descTrustTwo}
		</h2>
		<div class="grid grid-cols-4 md:grid-cols-7 gap-5 p-2 md:p-5 md:mb-5">
			{#each ClientLogo as cl}
				<div class="w-full h-8 flex justify-center items-center my-5">
					<ImageLoader src={cl.img} alt="logo" customeClass="grayscale" />
				</div>
			{/each}
		</div>
	</div>
</section>
