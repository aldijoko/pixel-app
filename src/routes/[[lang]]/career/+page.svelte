<script>
	import CardCareer from '$lib/component/Career/CardCareer.svelte';
	import BottomPage from '$lib/component/Shared/BottomPage.svelte';
	import MetaData from '$lib/component/Shared/MetaData.svelte';
	import { fly } from 'svelte/transition';

	const metadata = {
		title: 'Career - Pixel Group',
		description: 'Career Pixel Group',
		url: ''
	};

	export let data;
</script>

<MetaData {metadata} />
<section in:fly={{ x: -30, duration: 1000, delay: 200 }} out:fly={{ x: 15, duration: 200 }}>
	<div class="w-full pt-32 pb-20 px-5 md:px-[194px]">
		<h2 class="font-bold text-2xl md:text-4xl md:block hidden">{data.career}</h2>
		<h2 class="font-bold text-2xl md:hidden text-center">{data.prepare}</h2>
		<p class="text-sm md:text-lg text-blue-primary py-3 md:text-start text-center">
			{data.descCareer}
		</p>
		<div class="w-full my-2">
			<CardCareer />
			<CardCareer />
		</div>
	</div>
	<BottomPage />
</section>
