<script>
	import { page } from '$app/stores';
	import ImageLoader from '$lib/component/LazyLoader/ImageLoader.svelte';
	import AdBannerHor from '$lib/component/Shared/AdBannerHor.svelte';
	import AdBannerVer from '$lib/component/Shared/AdBannerVer.svelte';
	import MetaData from '$lib/component/Shared/MetaData.svelte';
	import { fly } from 'svelte/transition';

	export let data;

	$: detailBlog = data.detailBlog[0];
	$: idLang = $page.params.lang.includes('id');

	// console.log(idLang);
	console.log(detailBlog);
</script>

<svelte:head>
	<title>{detailBlog.slug}</title>
	<meta name="title" content={detailBlog.slug} />
	<meta property="og:title" content={detailBlog.slug} />
</svelte:head>

<section in:fly={{ x: -30, duration: 1000, delay: 200 }} out:fly={{ x: 15, duration: 50 }}>
	<div class="w-full h-full flex px-5 md:px-[194px] pt-20 md:pt-28 pb-10">
		<div class="w-full md:w-3/4 h-full md:border-r-2 px-3">
			<div class="mt-4 flex gap-2 item-center ">
				{#if idLang}
					<a href="/id/insight?category=all">
						<span
							class="iconify text-base md:text-2xl text-grey-primary"
							data-icon="ic:outline-arrow-circle-left"
						/>
					</a>
				{:else}
					<a href="/en/insight?category=all">
						<span
							class="iconify text-base md:text-2xl text-grey-primary"
							data-icon="ic:outline-arrow-circle-left"
						/>
					</a>
				{/if}
				{#if idLang}
					<a
						href="/id/insight?category={detailBlog.categories[0]}"
						class="cursor-pointer flex-none text-green-primary text-xs md:text-base capitalize"
					>
						{#if detailBlog.categories[0] === 16}
							Business Innovation
						{:else if detailBlog.categories[0] === 17}
							Digital Marketing
						{:else if detailBlog.categories[0] === 18}
							OOH Media Management
						{:else if detailBlog.categories[0] === 19}
							OOH Production
						{/if}
					</a>
				{:else}
					<a
						href="/en/insight?category={detailBlog.categories[0]}"
						class="cursor-pointer flex-none text-green-primary text-xs md:text-base capitalize"
					>
						{#if detailBlog.categories[0] === 16}
							Business Innovation
						{:else if detailBlog.categories[0] === 17}
							Digital Marketing
						{:else if detailBlog.categories[0] === 18}
							OOH Media Management
						{:else if detailBlog.categories[0] === 19}
							OOH Production
						{/if}
					</a>
				{/if}

				<span class="text-grey-primary text-xs md:text-base"> > </span>
				<div class="truncate w-1/2 text-xs md:text-base capitalize font-medium text-blue-primary">
					{@html detailBlog.title.rendered}
				</div>
			</div>
			<h1
				class="mt-5 mb-1 font-bold text-xl md:text-4xl text-black md:text-blue-primary leading-snug"
			>
				{@html detailBlog.title.rendered}
			</h1>
			<div class="relative w-full h-[400px] mt-6">
				<ImageLoader
					src={detailBlog._embedded['wp:featuredmedia'][0].source_url}
					alt="cb-img"
					customeClass="w-full h-full object-cover object-center rounded-md"
				/>
			</div>
			<div class="w-full py-5">
				{@html detailBlog.content.rendered}
			</div>
			<AdBannerHor />
			<div class="pt-10 pb-5 w-full">
				<h3 class="text-xl font-bold">{data.read}</h3>
				<div class="grid grid-cols-3 gap-5 mt-5">
					<div class="w-full h-52 border" />
					<div class="w-full h-52 border" />
					<div class="w-full h-52 border" />
				</div>
			</div>
		</div>
		<div class="hidden md:block md:w-1/4 h-full px-4">
			<AdBannerVer />
			<div class="w-full pt-10">
				<h3 class="text-xl font-bold">{data.recommendation}</h3>
				<div class="grid-rows-3 gap-5 mt-5">
					<div class="w-full h-52 border my-5" />

					<div class="w-full h-52 border my-5" />

					<div class="w-full h-52 border my-5" />
				</div>
			</div>
		</div>
	</div>
</section>

<style lang="postcss">
	:global(p) {
		margin-bottom: 22px;
		color: #393939;
		font-size: 16px;
	}
	:global(em) {
		font-style: italic;
		/* color: #2b478b; */
		/* font-size: 17px; */
	}
	:global(strong) {
		margin: 50px 0px;
	}

	/* :global(h2, h3) {
		color: #2b478b;
		margin-bottom: 30px;
		font-weight: 700;
		font-size: 22px;
	} */
</style>
