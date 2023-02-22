<script>
	import { CuitImage, CuitService } from '$lib/store/services';
	import { fly } from 'svelte/transition';
	import CardDigitalMarketing from './component/CardDigitalMarketing.svelte';
	import CardServiceAbout from './component/CardServiceAbout.svelte';
	import CardServiceImprove from './component/CardServiceImprove.svelte';

	let openImgOne = false;
	let openImgTwo = false;
	let openImgThree = false;

	let activeTab = 1;
	const handleClick = (tabValue) => () => (activeTab = tabValue);

	const services = [
		{
			name: 'Paid to Watch',
			description: 'Reach More Audience with a Video',
			opsiOne: '1. Upload and share your video',
			opsiTwo: '2. Increase the number of views',
			icon: '/img/service/cuit/icon/icon-watch.svg',
			alt: 'watch',
			image: '/img/service/cuit/image-watch.svg',
			value: 1
		},
		{
			name: 'Paid to Post',
			description: 'More Share Less Effort, Let us share your campaign',
			opsiOne: '1. Upload dan share your video',
			opsiTwo: '2. Use specific hashtags',
			opsiThree: '3. Broaden the reach of your campaign and audience.',
			icon: '/img/service/cuit/icon/icon-post.svg',
			alt: 'post',
			image: '/img/service/cuit/image-post.svg',
			value: 2
		},
		{
			name: 'Paid to Visit',
			description: 'Invite your audience to visit your page, More Visit More Lead',
			opsiOne: '1. Upload your article',
			opsiTwo: '2. Ask the influencer to visit the page of the article you published',
			opsiThree: '3. Upgrade and get data based on visits',
			icon: '/img/service/cuit/icon/icon-visit.svg',
			alt: 'visit',
			image: '/img/service/cuit/image-visit.svg',
			value: 3
		},
		{
			name: 'Paid to Blast',
			description: 'Get in touch with the broader market and gain word of mouth.',
			opsiOne: '1. Prepare the content to be blasted',
			opsiTwo: '2. Ask Influencers to blast to their social media',
			opsiThree: '3. Broaden the reach of your campaign and audience',
			icon: '/img/service/cuit/icon/icon-blast.svg',
			alt: 'blast',
			image: '/img/service/cuit/image-blast.svg',
			value: 4
		},
		{
			name: 'Paid to Review',
			description: `Want a High Star and Good Review? It's easy`,
			opsiOne: '1. Ask the influencer to download and give a review of your application',
			opsiTwo: '2. You will get the review you want and the number of downloads increases',
			icon: '/img/service/cuit/icon/icon-review.svg',
			alt: 'review',
			image: '/img/service/cuit/image-review.svg',
			value: 5
		},
		{
			name: 'Auction',
			description: 'Get high-quality influencer with lower expenses',
			opsiOne: '1. Publish your campaign requirements in the CUiT For Business dashboard',
			opsiTwo: `2. Influencers will 'bid' or volunteer to take part in campaign offers according to the budget`,
			opsiThree: '3. Get quality influencers and according to your budget calculations',
			icon: '/img/service/cuit/icon/icon-auction.svg',
			alt: 'auction',
			image: '/img/service/cuit/image-watch2.svg',
			value: 6
		},
		{
			name: 'Affiliate',
			description: 'Looking for a Lead? Just create a digital form, and let us find it for you.',
			opsiOne: '1. Prepare the link that you will run',
			opsiTwo: '2. Ask the Influencer to share the link that contains the form',
			opsiThree: '3. You will receive data/prospects from the link form distributed by influencers',
			icon: '/img/service/cuit/icon/icon-affiliate.svg',
			alt: 'affiliate',
			image: '/img/service/cuit/image-affiliate.svg',
			value: 7
		},
		{
			name: 'Direct Campaign',
			description: 'Discover Talents and create a successful campaign with them',
			opsiOne: '1. Log in to the CUiT For Business dashboard',
			opsiTwo: '2. Find and select talent/influencer according to your needs',
			opsiThree: '3. Get suitable influencers.',
			icon: '/img/service/cuit/icon/icon-direct.svg',
			alt: 'direct',
			image: '/img/service/cuit/image-direct.svg',
			value: 8
		}
	];

	export let titleCardDigital = '';
	export let descCardDigital = '';

	export let titleCardServiceAbout = '';
	export let descCardServiceAbout = '';

	export let titleCardServiceImprove = '';
	export let descCardServiceImprove = '';

	export let btnContact = '';
	export let txtFree = '';
	export let txtServices = '';

	export let servicesCuit = [];
</script>

<div class="w-full">
	<div class="py-5">
		<CardDigitalMarketing
			title={titleCardDigital}
			desc={descCardDigital}
			customBtn="bg-violet-primary"
			video={true}
			src="https://www.youtube.com/embed/7K7gVndaxio"
			itemImage={CuitImage}
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
			bannerImg="/img/service/cuit/banner-cuit.png"
			logo="/img/service/cuit/cuit-logo.svg"
			service="cuit"
			title={titleCardServiceAbout}
			desc={descCardServiceAbout}
			{txtFree}
		/>
	</div>
	<div class="py-5">
		<CardServiceImprove
			title={titleCardServiceImprove}
			desc={descCardServiceImprove}
			type="cuit"
			itemCard={CuitService}
			ImproveBtnContact={txtFree}
		/>
	</div>
	<div class="pt-5 w-full md:hidden">
		<h2 class="text-xl font-bold text-center">Execute marketing activities from start to finish</h2>
		<div class="w-full flex justify-center">
			<img src="/img/service/cuit/cuit-asset1.png" alt="asset" />
		</div>
	</div>
	<div class="w-full my-5 base md:block hidden" style="min-height: 70vh;">
		<div class="w-full h-full flex border rounded-xl">
			<div class="w-1/3 bg-sidebar rounded-tl-xl rounded-bl-xl p-5">
				<div class="w-full p-5 mt-5" style="height: 100px;">
					<h3 class="font-semibold text-3xl">{txtServices}</h3>
				</div>
				<div class="w-full px-5 transition-all duration-500">
					{#each servicesCuit as s}
						<!-- svelte-ignore a11y-click-events-have-key-events -->
						<div
							class="flex items-center gap-3 mb-2 rounded-full py-1 cursor-pointer hover:bg-white/[0.5] transition duration-300"
							class:is-active={activeTab === s.value}
							on:click={handleClick(s.value)}
						>
							<img src={s.icon} alt={s.alt} class="h-10" />
							<p class="font-semibold text-base">{s.name}</p>
						</div>
					{/each}
				</div>
			</div>
			<div
				class="w-full bg-orange-primary p-5 relative transition-all duration-500 rounded-tr-xl rounded-br-xl"
			>
				{#each servicesCuit as a}
					{#if activeTab == a.value}
						<div class="py-10 px-5" in:fly={{ x: -30, duration: 500, delay: 200 }}>
							<p class="text-2xl capitalize font-semibold">{a.description}</p>
							<div class="mt-5">
								<ol class="text-lg mb-2 w-1/2">
									<li class="mt-2 mb-1 leading-10">{a.opsiOne || ''}</li>
									<li class="my-1 leading-10">{a.opsiTwo || ''}</li>
									<li class="my-1 leading-10">{a.opsiThree || ''}</li>
								</ol>
							</div>
						</div>
						<div
							class="mt-8 px-5 flex justify-center md:justify-start"
							in:fly={{ x: -30, duration: 700, delay: 200 }}
						>
							<a href="https://app.gocuit.com/register" class="btn-overidee">
								<span>{txtFree}</span>
								<span
									class="iconify text-2xl"
									data-icon="material-symbols:arrow-right-alt-rounded"
								/>
							</a>
						</div>
						<img
							class="absolute right-5 bottom-0"
							src={a.image}
							alt={a.alt}
							in:fly={{ x: -30, duration: 700, delay: 200 }}
						/>
					{/if}
				{/each}
			</div>
		</div>
	</div>
</div>

<style lang="postcss">
	.is-active {
		@apply bg-white;
	}
	.btn-overidee {
		@apply bg-[#9747FF] w-max px-5 flex items-center gap-4 py-1 md:text-lg text-sm rounded-lg text-white cursor-pointer hover:bg-white  hover:text-[#9747FF] transition duration-500;
	}
	.bg-sidebar {
		background-image: url('/img/service/cuit/backgroundbar.svg');
		background-position: center;
		background-size: cover;
		background-repeat: no-repeat;
	}
</style>
