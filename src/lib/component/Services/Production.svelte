<script>
	import { printingProduct, ProductionImage } from '$lib/store/services';
	import ImageLoader from '../LazyLoader/ImageLoader.svelte';
	import CardProduction from './component/CardProduction.svelte';
	import CardServiceImprove from './component/CardServiceImprove.svelte';

	let openImgOne = false;
	let openImgTwo = false;
	let openImgThree = false;

	export let titleCardProduction = '';
	export let descCardProduction = '';

	export let titleImproveProduction = '';
	export let descImproveProduction = '';

	export let titleProduct = '';
	export let descProduct = '';

	export let titleProducPrint = '';
	export let descProducPrint = '';

	export let titleProducPrintOne = '';
	export let descProducPrintOne = '';
	export let titleProducPrintTwo = '';
	export let descProducPrintTwo = '';
	export let titleProducPrintThree = '';
	export let descProducPrintThree = '';

	export let itemCard = [];
	export let btnContact = '';
	export let textLearnMore = '';
</script>

<div class="w-full">
	<div class="py-5">
		<CardProduction
			title={titleCardProduction}
			desc={descCardProduction}
			itemImage={ProductionImage}
			video={true}
			src="https://www.youtube.com/embed/ZJThsaezw2w"
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
		<CardServiceImprove
			title={titleImproveProduction}
			desc={descImproveProduction}
			{itemCard}
			ImproveBtnContact={btnContact}
		/>
	</div>
	<div class="w-full py-5 text-start md:text-center">
		<h3 class="font-bold text-xl md:text-3xl">{titleProduct}</h3>
		<p class="text-blue-primary text-sm md:text-lg mt-2">
			{descProduct}
		</p>
		<div class="mt-5 w-full grid grid-cols-2 md:grid-cols-4 gap-4">
			{#each printingProduct as dp}
				<div class="w-full h-full bg-grey-primary rounded-md p-3">
					<img class="w-full mb-3" src={dp.img} alt="pixel-product" />
					<div class="h-full text-center">
						<h4 class="font-bold text-base md:text-lg">{dp.product}</h4>
						<!-- <p class="text-blue-primary text-sm md:text-lg mt-2">{dp.desc}</p> -->
						<a href={dp.href}>
							<div
								class="w-full flex justify-center items-center gap-1 text-white rounded-md bg-green-primary py-1 mt-4"
							>
								<p class="text-xs md:text-lg">{textLearnMore}</p>
							</div>
						</a>
					</div>
				</div>
			{/each}
		</div>
		<!-- <div class="mt-5 text-center">
			<a href="" class="text-blue-primary text-sm md:text-lg hover:underline">
				Show more product
			</a>
		</div> -->
	</div>
	<div class="w-full py-5 ">
		<h3 class="font-bold text-xl md:text-3xl text-center">{titleProducPrint}</h3>
		<p class="text-blue-primary text-sm md:text-lg mt-2 text-center">
			{descProducPrint}
		</p>
		<div class="flex mt-10 mb-24">
			<div class="w-full md:w-1/2 flex items-center">
				<ImageLoader
					customeClass="w-full"
					src="/img/service/production/dummy-service.png"
					alt="Dummy"
				/>
			</div>
			<div class="w-full md:w-1/2 px-6">
				<h1 class="font-bold text-lg md:text-3xl">
					{titleProducPrintOne}
				</h1>
				<p class="text-xs md:text-base text-blue-primary mt-3">
					{descProducPrintOne}
				</p>
				<div class="w-full md:w-1/2 flex items-center mt-5 md:mt-5">
					<a href="">
						<div
							class="hidden md:flex items-center gap-1 text-white bg-green-primary px-3 py-1 mt-5 rounded-md"
						>
							<p class="text-white">{textLearnMore}</p>
							<span class="iconify text-xl" data-icon="material-symbols:arrow-right-alt-rounded" />
						</div>
					</a>
				</div>
			</div>
		</div>
		<div class="flex mt-10 mb-24">
			<div class="w-full md:w-1/2 px-6">
				<h1 class="font-bold text-lg md:text-3xl">
					{titleProducPrintTwo}
				</h1>
				<p class="text-xs md:text-base text-blue-primary mt-3">
					{descProducPrintTwo}
				</p>
				<div class="w-full md:w-1/2 flex items-center mt-5 md:mt-5">
					<a href="">
						<div
							class="hidden md:flex items-center gap-1 text-white bg-green-primary px-3 py-1 mt-5 rounded-md"
						>
							<p class="text-white">{textLearnMore}</p>
							<span class="iconify text-xl" data-icon="material-symbols:arrow-right-alt-rounded" />
						</div>
					</a>
				</div>
			</div>
			<div class="w-full md:w-1/2 flex items-center">
				<ImageLoader
					customeClass="w-full"
					src="/img/service/production/dummy-service.png"
					alt="Dummy"
				/>
			</div>
		</div>
		<div class="flex mt-10 mb-24">
			<div class="w-full md:w-1/2 flex items-center">
				<ImageLoader
					customeClass="w-full"
					src="/img/service/production/dummy-service.png"
					alt="Dummy"
				/>
			</div>
			<div class="w-full md:w-1/2 px-6">
				<h1 class="font-bold text-lg md:text-3xl">
					{titleProducPrintThree}
				</h1>
				<p class="text-xs md:text-base text-blue-primary mt-3">
					{descProducPrintThree}
				</p>
				<div class="w-full md:w-1/2 flex items-center mt-5 md:mt-5">
					<a href="">
						<div
							class="hidden md:flex items-center gap-1 text-white bg-green-primary px-3 py-1 mt-5 rounded-md"
						>
							<p class="text-white">{textLearnMore}</p>
							<span class="iconify text-xl" data-icon="material-symbols:arrow-right-alt-rounded" />
						</div>
					</a>
				</div>
			</div>
		</div>
	</div>
</div>
