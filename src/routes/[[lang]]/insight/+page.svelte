<script>
	import CardInsight from '$lib/component/Insight/CardInsight.svelte';
	import BottomPage from '$lib/component/Shared/BottomPage.svelte';
	import MetaData from '$lib/component/Shared/MetaData.svelte';
	import NewsCard from '$lib/component/Shared/NewsCard.svelte';
	import { fly, fade } from 'svelte/transition';
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { onMount } from 'svelte';

	export let data;
	// console.log(data);

	let loadingInsight = false;
	let loading = false;

	$: blogs = data.blogsList;
	$: idLang = $page.params.lang.includes('id');
	// console.log(data.blogsList);

	const categoryInsight = [
		{
			id: 18,
			title: 'OOH Media Management',
			bgImage: 'bg-[url("/img/insight/thumbnail-media.png")]'
		},
		{
			id: 19,
			title: 'OOH Production',
			bgImage: 'bg-[url("/img/insight/thumbnail-production.png")]'
		},

		{
			id: 17,
			title: 'Digital Marketing',
			bgImage: 'bg-[url("/img/insight/thumbnail-dm.png")]'
		},
		{
			id: 16,
			title: 'Business Innovation',
			bgImage: 'bg-[url("/img/insight/thumbnail-bi.png")]'
		}
	];

	const metadata = {
		title: 'Insight - Pixel Group',
		description: 'Insight Pixel Group',
		url: ''
	};
	onMount(() => {
		if (!$page.url.searchParams.get('category')) {
			loadingInsight = true;
			goto('insight?category=all');
		}
	});

	$: if ($page.url.searchParams.get('category') == 'all') {
		loadingInsight = false;
	}

	$: selectedCategory = $page.url.searchParams.get('category') || '';

	const updateSearchParams = (key, value) => {
		const params = new URLSearchParams($page.url.searchParams);
		params.set(key, value);
		goto(`?${params.toString()}`);
	};
</script>

<MetaData {metadata} />
<section in:fly={{ x: -30, duration: 1000, delay: 200 }} out:fly={{ x: 15, duration: 200 }}>
	<div class="w-full pt-20 md:pt-32 pb-20 px-5 md:px-[194px]">
		<h2 class="font-bold text-2xl md:text-4xl text-center text-black">
			{data.titleInsight}
		</h2>
		<!-- <p class="text-sm md:text-lg text-blue-primary pt-2 pb-8 md:py-5 text-center">
			{data.descInsight}
		</p> -->
		<div class="p-5 border-b-2 hidden md:block">
			<div class="grid grid-cols-5 gap-5">
				<button
					on:click={() => {
						setTimeout(() => {
							loading = false;
						}, 2000);
						updateSearchParams('category', 'all');
						loading = true;
					}}
				>
					<div
						class="w-full h-[100px] flex justify-center items-center text-center border rounded-xl p-5 bg-style relative bg-[url('/img/insight/thumbnail-printing.png')]"
					>
						<div class="w-full h-full bg-overlay absolute round" />
						<h3 class="font-medium md:font-bold text-white text-xs md:text-lg">{data.all}</h3>
					</div>
				</button>
				{#each categoryInsight as category (category.id)}
					<button
						on:click={() => {
							setTimeout(() => {
								loading = false;
							}, 2000);
							updateSearchParams('category', category.id.toString());
							loading = true;
						}}
					>
						<div
							class="w-full h-[100px] flex justify-center items-center text-center border rounded-xl p-5 bg-style relative {category.bgImage}"
						>
							<div class="w-full h-full bg-overlay absolute round" />
							<h3 class="font-medium md:font-bold text-white text-xs md:text-lg">
								{category.title}
							</h3>
						</div>
					</button>
				{/each}
			</div>
		</div>
		<div class="w-full flex md:hidden">
			<div class="flex overflow-x-auto gap-4 h-16">
				{#each categoryInsight as ci}
					<div class="w-24 h-full">
						<CardInsight title={ci.title} bgImage={ci.bgImage} />
					</div>
				{/each}
			</div>
		</div>
		{#if loadingInsight}
			<div class="w-full h-96 flex justify-center items-center">Loading data insight...</div>
		{:else}
			<div class="p-5 w-full 2xl:w-300 2xl:mx-auto">
				<h3 class="font-bold text-xl md:block hidden text-black">
					{data.read}

					<span
						class="text-green-primary"
						in:fly={{ x: -30, duration: 1000, delay: 200 }}
						out:fly={{ x: 15, duration: 200 }}
					>
						{#if selectedCategory == 'all'}
							{data.all}
						{:else if selectedCategory == '18'}
							OOH Media Management
						{:else if selectedCategory == '19'}
							OOH Production
						{:else if selectedCategory == '17'}
							Digital Marketing
						{:else if selectedCategory == '16'}
							Business Innovation
						{/if}
					</span>
				</h3>
				<h3 class="font-bold text-lg text-center md:hidden block text-black">
					{data.read} <br />
					<span class="text-green-primary">
						{#if selectedCategory == 'all'}
							{data.all}
						{:else if selectedCategory == '18'}
							OOH Media Management
						{:else if selectedCategory == '19'}
							OOH Production
						{:else if selectedCategory == '17'}
							Digital Marketing
						{:else if selectedCategory == '16'}
							Business Innovation
						{/if}
					</span>
				</h3>
				{#if loading}
					<div class="w-full h-96 flex justify-center items-center">Loading data...</div>
				{:else}
					<div
						class="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 mt-5"
						in:fly={{ x: -30, duration: 1000, delay: 200 }}
						out:fly={{ x: 15, duration: 200 }}
					>
						{#each blogs as blog}
							{#if idLang}
								<NewsCard
									href="/id/insight/{blog.slug}/"
									title={blog.title.rendered}
									customClass="bg-grey-primary"
									image={blog._embedded['wp:featuredmedia'][0].source_url}
									imgAlt="blog"
								/>
							{:else}
								<NewsCard
									href="/en/insight/{blog.slug}/"
									title={blog.title.rendered}
									customClass="bg-grey-primary"
									image={blog._embedded['wp:featuredmedia'][0].source_url}
									imgAlt="blog"
								/>
							{/if}
						{/each}
					</div>
				{/if}
			</div>
		{/if}
	</div>
	<BottomPage />
</section>

<style lang="postcss">
	h2,
	h3,
	p {
		margin-bottom: 0px;
	}

	.bg-style {
		background-size: cover;
		background-position: center;
		background-repeat: no-repeat;
	}

	.bg-overlay:hover {
		background-color: #43d57a;
		opacity: 0.5;
		transition: 1s;
		cursor: pointer;
		border-radius: 10px;
	}

	.is-active {
		background-color: #43d57a;
	}
</style>
