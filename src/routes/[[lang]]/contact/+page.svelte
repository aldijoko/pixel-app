<script>
	import ImageLoader from '$lib/component/LazyLoader/ImageLoader.svelte';
	import MetaData from '$lib/component/Shared/MetaData.svelte';
	import SmallCard from '$lib/component/Shared/SmallCard.svelte';
	import Textareainput from '$lib/component/Shared/Textareainput.svelte';
	import TextInput from '$lib/component/Shared/TextInput.svelte';
	import { fly } from 'svelte/transition';

	const service = [
		{ title: 'OOH Media Management', icon: '/img/icon/monitor.svg', alt: 'iconOOH' },
		{ title: 'OOH House Production', icon: '/img/icon/settings.svg' },
		// { title: 'Digital Printing', icon: '/img/icon/printer.svg', alt: 'iconOOH' },
		{ title: 'Digital Marketing', icon: '/img/icon/pie-chart.svg', alt: 'iconOOH' },
		{ title: 'Business Innovation', icon: '/img/icon/bulb.svg', alt: 'iconOOH' }
	];

	const metadata = {
		title: 'Contact Us - Pixel Group',
		description: 'Contact Us Pixel Group',
		url: ''
	};

	export let data;

	let name = '';
	let email = '';
	let companyName = '';
	let business = '';
	let message = '';

	const onSend = () => {
		const data = {
			name,
			email,
			companyName,
			business,
			message
		};
		console.log(data);
	};
</script>

<MetaData {metadata} />
<section in:fly={{ x: -30, duration: 1000, delay: 200 }} out:fly={{ x: 15, duration: 200 }}>
	<div class="w-full flex md:flex-row flex-col pt-28 pb-10 px-5 md:px-[194px]">
		<div class="w-full md:w-1/3">
			<h2 class="font-bold text-2xl md:text-4xl md:block hidden">{data.contactUs}</h2>
			<h2 class="font-bold text-2xl md:hidden text-center text-black">{data.discuss}</h2>
			<p class="text-sm md:text-lg text-blue-primary py-3 md:text-start text-center">
				{data.descContactUs}
			</p>
			<div class="w-full h-full hidden md:flex">
				<div class="w-max h-max border rounded-md p-5 bg-green-primary flex flex-col items-center">
					<img class="w-1/2 h-1/2" src="/img/icon/icon-chat.svg" alt="icon" />
					<div class="text-center mt-2">
						<h3 class="text-white font-bold text-xl px-8 leading-8 mb-5">{data.chat}</h3>
						<a
							href="https://wa.wizard.id/1bd9f9"
							rel="noreferrer"
							target="_blank"
							class="text-green-primary bg-white w-full py-3 px-5 rounded-md text-xl font-bold"
						>
							{data.chatNow}
						</a>
					</div>
				</div>
			</div>
		</div>
		<div class="w-full md:w-2/3 px-5">
			<!-- <form method="POST"> -->
			<TextInput
				inputClass="border-blue-primary my-2"
				placeholder={data.inputName + '*'}
				onChange={(e) => {
					name = e;
				}}
				bind:value={name}
			/>
			<TextInput
				inputClass="border-blue-primary my-2"
				placeholder={data.inputEmail + '*'}
				bind:value={email}
				onChange={(e) => {
					email = e;
				}}
				type="email"
			/>
			<TextInput
				inputClass="border-blue-primary my-2"
				placeholder={data.inputCompany + '*'}
				bind:value={companyName}
				onChange={(e) => {
					companyName = e;
				}}
			/>
			<TextInput
				inputClass="border-blue-primary mt-2 mb-4"
				placeholder={data.inputInterest + '*'}
				bind:value={business}
				onChange={(e) => {
					business = e;
				}}
			/>
			<Textareainput
				inputClass="my-2"
				placeholder={data.inputMessage}
				value={message}
				onChange={(e) => {
					message = e;
				}}
			/>
			<div class="mt-2">
				<p class="ml-2 text-[#757D8A]"><span class="text-green-500">*</span> {data.must}</p>
				<button
					on:click={onSend}
					type="submit"
					class="flex items-center gap-2 bg-green-primary px-4 py-1.5 text-white rounded-md mt-4 text-sm md:text-lg"
				>
					{data.submitIn}
					<span
						class="iconify text-white"
						data-icon="teenyicons:direction-solid"
						data-rotate="90deg"
					/>
				</button>
			</div>
			<!-- </form> -->
		</div>
	</div>
	<div class="w-full flex md:flex-row flex-col-reverse py-10 md:px-[194px] px-5">
		<div class="w-full md:w-1/2 p-5">
			<ImageLoader customeClass="w-full" src="/img/contact/image-address.svg" alt="maps" />
		</div>
		<div class="w-full md:w-1/2 p-5">
			<h3 class="font-bold text-xl md:text-3xl mb-4">{data.office}</h3>
			<p class="text-sm md:text-lg text-blue-primary mb-3">
				{data.descContactUs}
			</p>
			<div class="mt-3 text-sm md:text-base text-blue-primary">
				<p class="mb-1">Jl. Panjang Cidodol No. 83 Kebayoran Lama Jakarta Selatan 12220</p>
				<p class="mb-1">
					{data.phone} :<a href="tel:02129428555" class="text-sm md:text-base ml-1 hover:underline"
						>021-2942-8555</a
					>
				</p>
				<p>
					Email :<a
						href="mailto:contact@pixelgroup.id"
						class="text-sm md:text-base ml-1 hover:underline">contact@pixelgroup.id</a
					>
				</p>
			</div>
		</div>
	</div>
	<div class="px-10 md:px-[194px] py-10">
		<h2 class="font-bold text-2xl md:text-4xl mt-5 mb-1 text-center">{data.service}</h2>
		<div class="grid grid-cols-2 md:grid-cols-4 gap-5 py-5">
			{#each service as s}
				<SmallCard title={s.title} icon={s.icon} alt="service-icon" />
			{/each}
		</div>
	</div>
</section>
