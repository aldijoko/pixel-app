<script>
	import ImageLoader from '$lib/component/LazyLoader/ImageLoader.svelte';
	import BottomPage from '$lib/component/Shared/BottomPage.svelte';
	import MetaData from '$lib/component/Shared/MetaData.svelte';
	import SmallCard from '$lib/component/Shared/SmallCard.svelte';
	import { fly } from 'svelte/transition';

	export let data;

	const service = [
		{ title: 'OOH Media Management', icon: '/img/icon/monitor.svg', alt: 'iconOOH' },
		{ title: 'OOH House Production', icon: '/img/icon/settings.svg' },
		// { title: 'Digital Printing', icon: '/img/icon/printer.svg', alt: 'iconOOH' },
		{ title: 'Digital Marketing', icon: '/img/icon/pie-chart.svg', alt: 'iconOOH' },
		{ title: 'Business Innovation', icon: '/img/icon/bulb.svg', alt: 'iconOOH' }
	];

	const metadata = {
		title: 'About Us - Pixel Group',
		description: 'About Pixel Group',
		url: ''
	};
</script>

<MetaData {metadata} />
<section in:fly={{ x: -30, duration: 2000, delay: 200 }} out:fly={{ x: 15, duration: 200 }}>
	<div class="w-full h-full flex flex-col-reverse md:flex-row pt-24 pb-10">
		<div class="w-full md:w-1/2 px-6 md:pl-[194px] md:pr-[90px] flex flex-col justify-center">
			<h1 class="font-bold text-2xl md:text-4xl mt-5">{data.titleAbout}</h1>
			<p class="text-sm md:text-lg text-blue-primary py-5">
				{data.descAbout}
			</p>
			<div class="w-full md:w-1/2 flex items-center mt-5 md:mt-10">
				<a
					class="flex items-center px-3 py-1 rounded-md bg-green-primary gap-2 hover:scale-105 hover:bg-blue-primary transition duration-500"
					href="contact"
				>
					<img src="/img/icon/icon_whatsapp2.svg" class="w-5 h-5" alt="" />
					<span class="text-xs md:text-lg text-white">{data.contactUs}</span>
				</a>
			</div>
		</div>
		<div class="w-full md:w-1/2 flex pl-5 justify-end">
			<ImageLoader customeClass="w-full" src="/img/about/pixel-about.png" alt="bg-about" />
		</div>
	</div>
	<div class="bg-grey-primary w-full flex flex-col-reverse md:flex-row items-center py-10">
		<div class="w-full md:w-1/2 mt-5 md:pr-0 pr-5">
			<ImageLoader customeClass="w-[95%]" src="/img/about/pixel-about2.png" alt="bg-about" />
		</div>
		<div class="w-full px-5 md:w-1/2">
			<h2 class="font-bold text-2xl md:text-4xl mt-5 mb-1">{data.titleExpertise}</h2>
			<div class="w-full md:w-4/5 text-sm md:text-lg text-blue-primary py-3">
				<p>
					{data.descExpertise}
				</p>
				<p class="mt-3">
					{data.descExpertiseSec}
				</p>
				<p class="mt-3">{data.descExpertiseThird}</p>
			</div>
			<div class="w-full md:w-1/2 flex md:hidden items-center mt-5 md:mt-10">
				<a
					class="flex items-center px-3 py-1 rounded-md bg-green-primary gap-2 hover:scale-105 transition duration-500"
					href="#"
				>
					<img src="/img/icon/icon_whatsapp2.svg" class="w-5 h-5" alt="" />
					<span class="text-xs md:text-lg text-white">Contact Us</span>
				</a>
			</div>
		</div>
	</div>
	<div class="px-10 md:px-[194px] py-10">
		<h2 class="font-bold text-2xl md:text-4xl mt-5 mb-1 text-center">{data.titleServices}</h2>
		<div class="grid grid-cols-2 md:grid-cols-4 gap-5 py-5">
			{#each service as s}
				<SmallCard title={s.title} icon={s.icon} alt="service-icon" />
			{/each}
		</div>
	</div>
	<BottomPage />
</section>
