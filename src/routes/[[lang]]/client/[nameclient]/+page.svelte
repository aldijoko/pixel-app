<script>
	import ImageLoader from '$lib/component/LazyLoader/ImageLoader.svelte';
	import SmallCard from '$lib/component/Shared/SmallCard.svelte';
	import { fly } from 'svelte/transition';

	const service = [
		{ title: 'OOH Media Management', icon: '/img/icon/monitor.svg', alt: 'iconOOH' },
		{ title: 'OOH Production', icon: '/img/icon/settings.svg' }
	];
	export let data;
</script>

<section in:fly={{ x: -30, duration: 1000, delay: 200 }} out:fly={{ x: 15, duration: 200 }}>
	<div class="w-full pt-24 pb-10 md:px-[194px]">
		<div class="w-full">
			<ImageLoader customeClass="w-full" src={data.imgBanner} alt="bannerclient" />
			<div class="flex gap-5 py-5">
				<div class="w-2/5">
					<ImageLoader src={data.logoClient} alt="logoclient" />
				</div>
				<div class="w-3/5">
					<p class="text-sm md:text-lg text-blue-primary">
						{data.descClient}
					</p>
				</div>
			</div>
			<div class="mt-8 flex">
				<div class="w-2/5">
					<h3 class="text-black font-bold text-2xl">Service Used</h3>
					<div class="w-4/5 grid grid-cols-2 gap-5 py-5">
						{#each service as s}
							<SmallCard title={s.title} icon={s.icon} alt="service-icon" />
						{/each}
					</div>
				</div>
				<div class="w-3/5">
					<h3 class="text-black font-bold text-2xl">Project Goals</h3>
					<div class="grid grid-cols-4 gap-4 py-5">
						<div class="w-full border-r-2 border-l-2 px-5">aa</div>
					</div>
				</div>
			</div>

			<div class="mt-5">
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
							<span class="font-bold">Bowo aldianto</span> - Director of Marketing OPPO Indonesia
						</p>
					</div>
					<div class="w-full md:w-1/5 p-5 flex justify-center items-center relative">
						<img class="w-full object-cover" src="/img/img-dummy.png" alt="img-testi" />
					</div>
				</div>
			</div>

			<div class="mt-10 border-b-2">
				<h3 class="text-black font-bold text-2xl">Campaign Gallery</h3>
				<div class="w-full mt-4 mb-5">
					<div class="w-full hidden md:flex items-center">
						<div class="w-1/2">
							<!-- {#if video} -->
							<!-- <iframe
								class="w-full h-[250px] rounded-md"
								src="https://www.youtube.com/embed/q_18LCWtn08"
								title="YouTube video player"
								frameborder="0"
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
								allowfullscreen
							/> -->
							<!-- {:else} -->
							<div class="w-full h-[250px] rounded-md">
								<ImageLoader src={data.galleryClient.imgFirst} alt="imageservices" />
							</div>
							<!-- {/if} -->
						</div>
						<div class="w-1/2">
							<!-- <div class="w-full">
								<div class="w-full flex overflow-x-auto gap-4 h-[250px]">

									<img
										class="w-[250px] h-[250px] rounded-md object-cover cursor-pointer"
										src={data.galleryClient.imgOne}
										alt=""
									/>
									<img
										class="w-[250px] h-[250px] rounded-md object-cover cursor-pointer"
										src={data.galleryClient.imgTwo}
										alt=""
									/>
									<img
										class="w-[250px] h-[250px] rounded-md object-cover cursor-pointer"
										src={data.galleryClient.imgThree}
										alt=""
									/>
								</div>
							</div> -->
							<div class="w-full items-center justify-center flex gap-3">
								<ImageLoader customeClass="object-cover" src={data.galleryClient.imgOne} alt="" />
								<ImageLoader src={data.galleryClient.imgTwo} alt="" />
								<ImageLoader src={data.galleryClient.imgThree} alt="" />
							</div>
						</div>
					</div>
				</div>
			</div>

			<div class="mt-5">
				<h3 class="text-black font-bold text-2xl">Other Cooperation</h3>
				<div class="grid grid-cols-3 gap-x-5">
					<div class="w-full h-72 py-5">
						<div class="w-full border rounded-lg my-2">
							<img
								class="w-full h-36 rounded-tl-xl rounded-tr-xl object-cover"
								src="/img/client/oppo/oppo.png"
								alt="logo"
							/>
							<div class="rounded-bl-md rounded-br-md px-3 py-5 flex items-center justify-between">
								<p class="text-sm md:text-base font-bold text-black">OPPO</p>
								<a href="" class="py-1 px-6 rounded-md text-white bg-green-primary">View Project</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
