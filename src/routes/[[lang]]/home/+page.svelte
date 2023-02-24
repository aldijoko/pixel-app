<script>
	import TabBig from '$lib/component/Home/TabBig.svelte';
	import TabSmall from '$lib/component/Home/TabSmall.svelte';
	import ImageLoader from '$lib/component/LazyLoader/ImageLoader.svelte';
	import MenuTab from '$lib/component/Shared/MenuTab.svelte';
	import MetaData from '$lib/component/Shared/MetaData.svelte';
	import NewsCard from '$lib/component/Shared/NewsCard.svelte';
	import { ClientHome } from '$lib/store';
	import { fly } from 'svelte/transition';
	import { goto } from '$app/navigation';

	const metadata = {
		title: 'Home - Pixel Group',
		description: 'Home Pixel Group',
		url: ''
	};

	const services = [
		{ name: 'OOH  Media Management', value: 1 },
		{ name: 'OOH  Production House', value: 2 },
		// {name: 'Digital Printing', value: 3},
		{ name: 'Digital Marketing', value: 3 },
		{ name: 'Business Innovation', value: 4 }
	];

	let currentTab;

	const handleClick = (tabValue) => () => (currentTab = tabValue);

	export let data;
</script>

<MetaData {metadata} />
<section in:fly={{ x: -30, duration: 1000, delay: 500 }} out:fly={{ x: 15, duration: 50 }}>
	<div class="w-full flex flex-col-reverse items-start md:items-center md:flex-row pt-28 pb-10">
		<div
			class="max-w-[683px] mx-auto md:pl-48 xl:pl-48 md:pr-20 lg:pr-32 xl:pr-42 px-10 mt-5 md:mt-0"
		>
			<h1 class="text-[25px] md:text-xl lg:text-2xl xl:text-3xl font-bold mb-1 leading-8">
				{data.homeFirstOne}
				<span class="text-green-primary">{data.homeFirstTwo}</span>
				{data.and} <span class="text-green-primary">{data.homeFirstThree}</span>
			</h1>
			<p class="text-blue-primary text-sm md:text-base my-2 md:my-5">
				{data.homeFirstDesc}
			</p>
			<button class="btn-overide md:mt-6 mt-2" on:click={() => goto('contact')}>
				<!-- <div > -->
				<img src="/img/icon/icon_whatsapp2.svg" class="w-5 h-5" alt="icon-wa" />
				<span>{data.contactUs}</span>
				<!-- </div> -->
			</button>
		</div>
		<div class="pl-10 md:pl-0 md:max-w-[683px]">
			<ImageLoader customeClass="w-full" src="/img/home/image-home.png" alt="bg-home" />
		</div>
	</div>
	<div class="w-full py-5 px-5">
		<div class="pb-8 text-center px-5 sm:px-10 md:px-16">
			<h2 class="text-[25px] md:text-xl lg:text-2xl xl:text-3xl font-bold text-black">
				{data.homeSecOne}
			</h2>
			<p class="text-blue-primary text-sm md:text-base mt-2 md:mt-4 sm:px-5 md:px-20 lg:px-56">
				{data.homeSecTwo}
			</p>
		</div>
		<div class="max-w-[1366px] mx-auto md:px-10 lg:px-32 xl:px-44">
			<MenuTab
				bind:activeTab={currentTab}
				items={services}
				customclass="hidden md:flex justify-evenly"
			/>
		</div>

		<div class="md:hidden w-full bg-grey-primary sm:rounded-md ">
			<div class="px-8 py-5 w-full">
				<div class="flex overflow-x-auto gap-5">
					{#each services as s}
						<!-- svelte-ignore a11y-click-events-have-key-events -->
						<div
							class="w-max flex-none cursor-pointer hover:text-green-primary transition duration-300"
							class:is-active={currentTab === s.value}
							on:click={handleClick(s.value)}
						>
							<p class="text-sm sm:text-base font-medium">{s.name}</p>
						</div>
					{/each}
				</div>
			</div>
		</div>

		{#if 1 === currentTab}
			<div
				class="max-w-[1366px] mx-auto flex md:flex-row flex-col gap-3 mt-5 md:px-10 lg:px-32 xl:px-44"
				in:fly={{ x: -30, duration: 1000, delay: 200 }}
				out:fly={{ x: 15, duration: 200 }}
			>
				<div class="w-full h-full md:h-[424px]">
					<TabBig
						title={data.titleMedia}
						desc={data.descMedia}
						src="https://www.youtube.com/embed/7Yw9H0sTowQ"
						href="services"
						buttonTxt={data.learnMore}
						viewTxt={data.viewPhoto}
					/>
				</div>
				<div class="w-full h-full md:w-[252px] md:h-[424px]">
					<TabSmall
						title={data.descMediaTwo}
						customImg="w-2/3"
						img="/img/home/pixel-board.png"
						imgalt="board-pixel"
						href="services"
						buttonTxt={data.learnMore}
					/>
				</div>
			</div>
		{/if}

		{#if 2 === currentTab}
			<div
				class="max-w-[1366px] mx-auto flex md:flex-row flex-col gap-3 mt-5 md:px-10 lg:px-32 xl:px-44"
				in:fly={{ x: -30, duration: 1000, delay: 200 }}
				out:fly={{ x: 15, duration: 200 }}
			>
				<div class="w-full h-full md:h-[424px]">
					<TabBig
						title={data.titlePrint}
						desc={data.descPrint}
						href="services"
						imgOverlay="/img/service/production/production-asset.png"
						src="https://www.youtube.com/embed/ZJThsaezw2w"
						buttonTxt={data.learnMore}
						viewTxt={data.viewPhoto}
					/>
				</div>
				<div class="w-full h-full md:w-[252px] md:h-[424px]">
					<TabSmall
						title={data.descPrintTwo}
						img="/img/home/ooh-pixel.png"
						imgalt="board-pixel"
						customImg="w-2/3"
						href="services"
						buttonTxt={data.learnMore}
					/>
				</div>
			</div>
		{/if}

		{#if 3 === currentTab}
			<div
				class="max-w-[1366px] mx-auto flex md:flex-row flex-col gap-3 mt-5 md:px-10 lg:px-32 xl:px-44"
				in:fly={{ x: -30, duration: 1000, delay: 200 }}
				out:fly={{ x: 15, duration: 200 }}
			>
				<div class="w-full h-full md:h-[424px]">
					<TabBig
						title={data.titleMarket}
						desc={data.descMarket}
						href="services"
						src="https://www.youtube.com/embed/7K7gVndaxio"
						imgOverlay="/img/home/home-cuit.png"
						buttonTxt={data.learnMore}
						viewTxt={data.viewPhoto}
					/>
				</div>
				<div class="w-full h-full md:w-[252px] md:h-[424px]">
					<TabSmall
						title={data.descMarketTwo}
						img="/img/home/cuit-img.png"
						imgalt="cuit"
						customImg="w-2/3"
						href="services"
						buttonTxt={data.learnMore}
					/>
				</div>
			</div>
		{/if}

		{#if 4 === currentTab}
			<div
				class="max-w-[1366px] mx-auto flex md:flex-row flex-col gap-3 mt-5 md:px-10 lg:px-32 xl:px-44"
				in:fly={{ x: -30, duration: 1000, delay: 200 }}
				out:fly={{ x: 15, duration: 200 }}
			>
				<div class="w-full h-full md:h-[424px]">
					<TabBig
						title={data.titleInnov}
						desc={data.descInnov}
						href="services"
						src="https://www.youtube.com/embed/EZx0hEzuKyY"
						imgOverlay="/img/home/home-innovesia.png"
						buttonTxt={data.learnMore}
						viewTxt={data.viewPhoto}
					/>
				</div>
				<div class="w-full h-full md:w-[252px] md:h-[424px]">
					<TabSmall
						title={data.descInnovTwo}
						img="/img/home/innovesia-img.png"
						imgalt="innovesia"
						customImg="pb-2 w-2/3"
						href="services"
						buttonTxt={data.learnMore}
					/>
				</div>
			</div>
		{/if}
	</div>

	<div class="w-full flex md:flex-row flex-col-reverse items-start md:items-center py-0 md:py-10">
		<div class="pr-10 md:pr-0 md:max-w-[683px] mt-5">
			<ImageLoader customeClass="w-full" src="/img/home/image-home2.png" alt="bg-home" />
		</div>
		<div
			class="max-w-[683px] mx-auto md:pr-24 md:pl-32 lg:pr-44 xl:pr-48 lg:pl-20  xl:pl-10 px-10 mt-4 md:mt-8"
		>
			<h2 class="font-bold text-2xl hidden md:block">PIXEL GROUP</h2>
			<h2 class="font-bold text-base sm:text-lg my-2 md:hidden">
				{data.about} <span class="text-green-primary">Pixel</span>
			</h2>
			<h3
				class="font-bold text-[25px] md:text-xl lg:text-2xl xl:text-3xl my-2 md:my-4 lg:my-6 text-black md:pr-10"
			>
				{data.homeThirdOne}
			</h3>
			<p class="text-blue-primary text-sm md:text-base my-2 lg:my-3 xl:my-4">
				{data.homeThirdTwo}
				{data.homeThirdThree}
			</p>
			<!-- <p class="text-blue-primary text-sm md:text-lg" /> -->
			<button on:click={() => goto('about')}>
				<div
					class="md:flex items-center gap-1 text-white bg-green-primary px-3 py-1 lg:mt-5 xl:mt-10 rounded-md hidden hover:bg-blue-primary transition duration-300"
				>
					<p class="text-white">{data.learnMore}</p>
					<span class="iconify text-xl" data-icon="material-symbols:arrow-right-alt-rounded" />
				</div>
			</button>
			<a href="about">
				<div
					class="w-max flex md:hidden items-center justify-center gap-1 text-white text-xs md:text-lg rounded-md bg-green-primary px-3 py-1 mt-2 md:mt-5 hover:bg-blue-primary"
				>
					<p class="text-white">Overview</p>
					<span class="iconify text-xl mt-1" data-icon="material-symbols:arrow-right-alt-rounded" />
				</div>
			</a>
		</div>
	</div>

	<div class="w-full md:py-8 px-5">
		<div class="max-w-[1366px] mx-auto md:px-24 lg:px-32 xl:px-44">
			<div class="w-full hidden md:flex items-center justify-center md:justify-between mb-2">
				<h2 class="text-[25px] md:text-xl lg:text-2xl xl:text-3xl text-black font-normal">
					{data.lets} <span class="font-bold">{data.homeThirdFour}</span>
				</h2>
				<!-- <a href="">
					<div
						class="flex items-center gap-1  bg-blue-primary px-3 py-1 mt-5 hover:bg-green-primary transition duration-300"
					>
						<p class="text-white">{data.ourClient}</p>
						<span
							class="iconify text-xl text-white"
							data-icon="material-symbols:arrow-right-alt-rounded"
						/>
					</div>
				</a> -->
			</div>

			<div class="grid grid-cols-3 md:grid-cols-7 gap-4 md:mb-5">
				{#each ClientHome as cl}
					<div class="w-full h-8 flex justify-center items-center my-5">
						<ImageLoader src={cl.img} alt="logo" customeClass="grayscale" />
					</div>
				{/each}
			</div>
			<!-- <div class="w-full flex md:hidden justify-center mb-5">
				<a
					href=""
					class="flex justify-center rounded-md items-center gap-1 text-white bg-blue-primary px-3 py-1 mt-5 text-xs md:text-lg"
				>
					<p class="text-white">{data.ourClient}</p>
					<span class="iconify text-xl" data-icon="material-symbols:arrow-right-alt-rounded" />
				</a>
			</div> -->
			<!-- <div class="p-4">
				<div class="w-full flex md:flex-row flex-col bg-grey-primary rounded-lg p-2">
					<div class="w-full md:w-4/5 p-5">
						<div class="flex items-center md:justify-start justify-center">
							<span
								class="iconify text-5xl text-green-primary"
								data-icon="material-symbols:star-rounded"
							/>
							<span
								class="iconify text-5xl text-green-primary"
								data-icon="material-symbols:star-rounded"
							/>
							<span
								class="iconify text-5xl text-green-primary"
								data-icon="material-symbols:star-rounded"
							/>
							<span
								class="iconify text-5xl text-green-primary"
								data-icon="material-symbols:star-rounded"
							/>
							<span
								class="iconify text-5xl text-green-primary"
								data-icon="material-symbols:star-rounded"
							/>
						</div>
						<p class="text-sm md:text-lg md:pr-36 mt-5">
							Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
							has been the industry's standard dummy text ever since the 1500s, when an unknown
							printer took a galley of type and scrambled it to make a type specimen book.
						</p>
						<p class="text-sm md:text-lg mt-5">
							<span class="font-bold">Bowo aldianto</span> - Director of Finance Blibli.com
						</p>
					</div>
					<div class="w-full md:w-1/5 p-5 flex justify-center items-center relative">
						<img class="w-1/2 object-cover" src="/img/shared/img-dummy.png" alt="img-testi" />
					</div>
				</div>
			</div> -->
		</div>
	</div>

	<div
		class="max-w-full mx-auto bg-green-primary bg-vector py-10 text-center text-white hidden md:flex flex-col items-center"
	>
		<h2 class="text-[25px] md:text-xl lg:text-2xl xl:text-3xl font-semibold">{data.homeSecOne}</h2>
		<p class="text-sm md:text-base py-5">
			{data.homeFourthOne}
		</p>
		<a
			class=" flex items-center justify-center px-5 py-1 mt-8 bg-white gap-2 md:text-base text-xs rounded-lg text-green-primary cursor-pointer hover:bg-blue-primary  hover:text-white hover:scale-105 transition duration-500"
			href="contact"
		>
			<img src="/img/icon/icon_whatsapp.svg" class="w-5 h-5" alt="" />
			<span class="md:text-sm lg:text-base">{data.contactUs}</span>
		</a>
	</div>
	<div class="w-full py-10 md:py-20 px-5">
		<div class="max-w-[1366px] mx-auto md:px-24 lg:px-40 xl:px-44">
			<h2 class="text-[25px] md:text-xl lg:text-2xl xl:text-3xl font-semibold text-black">
				{data.homeFourthTwo}
			</h2>
			<a href="insight" class="flex items-center text-green-primary gap-1 mt-2">
				<p class="text-sm hover:underline text-green-primary">{data.learnMore}</p>
				<span class="iconify text-xl" data-icon="material-symbols:arrow-right-alt-rounded" />
			</a>
			<div class="grid grid-cols-1 md:grid-cols-3 gap-5 mt-5">
				<NewsCard
					title="Design Thinking vs Metode Ilmiah, Mana yang Unggul?"
					customClass="bg-grey-primary"
					image="/img/home/blogone.jpeg"
					imgAlt="blog-1"
					href="insight/design-thinking-vs-metode-ilmiah-mana-yang-unggul"
				/>
				<NewsCard
					title="6 Keunggulan OOH yang Tak Dimiliki Iklan Online"
					customClass="bg-grey-primary"
					image="/img/home/blogtwo.jpeg"
					imgAlt="blog-2"
					href="insight/6-keunggulan-ooh-yang-tak-dimiliki-iklan-online"
				/>
				<NewsCard
					title="Influencer Marketing jadi Pilar Kampanye dalam Industri Hiburan"
					customClass="bg-grey-primary"
					image="/img/home/blogthree.jpeg"
					imgAlt="blog-3"
					href="insight/influencer-marketing-jadi-pilar-kampanye-dalam-industri-hiburan"
				/>
			</div>
		</div>
	</div>
</section>

<style lang="postcss">
	.is-active {
		@apply text-green-primary;
		padding-bottom: 5px;
		border-bottom: 2px solid #43d57a;
	}

	.bg-vector {
		background-image: url('/img/home/vector-home.svg');
		/* background-position: right; */
		background-size: contain;
		background-repeat: no-repeat;
		background-position: bottom;
	}

	h2,
	h3,
	p {
		margin-bottom: 0px;
	}
</style>
