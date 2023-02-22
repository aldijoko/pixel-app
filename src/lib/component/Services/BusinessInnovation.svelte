<script>
	import { InnovesiaImage, InnovesiaService } from '$lib/store/services';
	import CardBusiness from './component/CardBusiness.svelte';
	import CardServiceAbout from './component/CardServiceAbout.svelte';
	import CardServiceImprove from './component/CardServiceImprove.svelte';

	let openImgOne = false;
	let openImgTwo = false;
	let openImgThree = false;

	export let titleCardBusiness = '';
	export let descCardBusiness = '';

	export let titleServiceAbout = '';
	export let descServiceAbout = '';

	export let titleServiceImprove = '';
	export let descServiceImprove = '';

	export let titleBusiness = '';
	export let descBusiness = '';
	export let btnContact = '';
	export let txtLearn = '';

	export let infuseOne = '';
	export let infuseTwo = '';
	export let equipOne = '';
	export let equipTwo = '';
	export let enableOne = '';
	export let enableTwo = '';
</script>

<div class="w-full">
	<div class="py-5">
		<CardBusiness
			title={titleCardBusiness}
			desc={descCardBusiness}
			customBtn="bg-blue-secondary"
			video={true}
			src="https://www.youtube.com/embed/EZx0hEzuKyY"
			itemImage={InnovesiaImage}
			{btnContact}
			{openImgOne}
			{openImgTwo}
			{openImgThree}
			onImgOne={() => (openImgOne = !openImgOne)}
			onImgTwo={() => (openImgTwo = !openImgTwo)}
			onImgThree={() => (openImgThree = !openImgThree)}
		/>
	</div>
	<div class="py-5">
		<CardServiceAbout
			bannerImg="/img/service/innovesia/banner-innovesia.png"
			logo="/img/service/innovesia/innovesia-logo.svg"
			service="innovesia"
			title={titleServiceAbout}
			desc={descServiceAbout}
			{txtLearn}
		/>
	</div>
	<div class="py-5">
		<CardServiceImprove
			title={titleServiceImprove}
			desc={descServiceImprove}
			type="innovesia"
			itemCard={InnovesiaService}
			ImproveBtnContact={txtLearn}
		/>
	</div>
	<div class="w-full pt-5">
		<div class="md:flex py-5">
			<div class="w-full md:w-1/2 md:pr-28">
				<h3 class="font-bold text-xl md:text-3xl">{titleBusiness}</h3>
			</div>
			<div class="w-full md:w-1/2 mt-2 md:mt-0">
				<p class="text-sm md:text-lg text-blue-primary">
					{descBusiness}
				</p>
			</div>
		</div>
		<div class="md:flex">
			<div class="w-full md:w-1/2 py-3">
				<img src="/img/service/innovesia/banner-innovesia2.png" alt="banner2" />
			</div>
			<div class="w-full md:w-1/2 py-5">
				<div class="w-full flex items-start py-3">
					<!-- <span class="iconify text-4xl text-blue-secondary" data-icon="material-symbols:settings-outline"></span> -->
					<img class="h-8 w-8" src="/img/icon/height.svg" alt="icon" />
					<p class="text-sm md:text-[20px] ml-5">
						<span class="font-bold">{infuseOne} </span>{infuseTwo}
					</p>
				</div>
				<div class="w-full flex items-start py-3">
					<!-- <span class="iconify text-4xl text-blue-secondary" data-icon="material-symbols:settings-outline"></span> -->
					<img class="h-8 w-8" src="/img/icon/settinginnovesia.svg" alt="icon" />
					<p class="text-sm md:text-[20px] ml-5">
						<span class="font-bold">{equipOne} </span>{equipTwo}
					</p>
				</div>
				<div class="w-full flex items-start py-3">
					<!-- <span class="iconify text-4xl text-blue-secondary" data-icon="material-symbols:settings-outline"></span> -->
					<img class="h-8 w-8" src="/img/icon/link-2.svg" alt="icon" />
					<p class="text-sm md:text-[20px] ml-5">
						<span class="font-bold">{enableOne} </span>{enableTwo}
					</p>
				</div>
				<a href="">
					<div
						class="w-max flex items-center gap-1 text-white rounded-md bg-blue-secondary px-4 py-1 mt-5 hover:bg-blue-primary transition duration-500"
					>
						<p class="text-xs md:text-lg">{txtLearn}</p>
						<span class="iconify text-xl" data-icon="material-symbols:arrow-right-alt-rounded" />
					</div>
				</a>
			</div>
		</div>
	</div>
</div>
