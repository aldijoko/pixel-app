<script>
	import BusinessInnovation from '$lib/component/Services/BusinessInnovation.svelte';
	import DigitalMarketing from '$lib/component/Services/DigitalMarketing.svelte';
	import MediaManagement from '$lib/component/Services/MediaManagement.svelte';
	import Production from '$lib/component/Services/Production.svelte';
	import BottomPage from '$lib/component/Shared/BottomPage.svelte';
	import MenuTab from '$lib/component/Shared/MenuTab.svelte';
	import MetaData from '$lib/component/Shared/MetaData.svelte';
	import { fly } from 'svelte/transition';

	const metadata = {
		title: 'Service - Pixel Group',
		description: 'Service Pixel Group',
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
	let openModal = false;

	const handleClick = (tabValue) => () => (currentTab = tabValue);

	export let data;
</script>

<MetaData {metadata} />
<section in:fly={{ x: -30, duration: 1000, delay: 200 }} out:fly={{ x: 15, duration: 200 }}>
	<div
		class="bg-white base-container pt-20 md:pt-28 md:px-[194px] h-full"
		style="min-height: 100vh;"
	>
		<MenuTab
			bind:activeTab={currentTab}
			items={services}
			customclass="hidden md:flex justify-evenly"
		/>

		<div class="md:hidden w-full bg-grey-primary mt-5">
			<div class="px-8 py-5 w-full">
				<div class="flex overflow-x-auto gap-5">
					{#each services as s}
						<!-- svelte-ignore a11y-click-events-have-key-events -->
						<div
							class="w-max flex-none cursor-pointer hover:text-green-primary transition duration-300"
							class:is-active={currentTab === s.value}
							on:click={handleClick(s.value)}
						>
							<p class="text-base font-medium">{s.name}</p>
						</div>
					{/each}
				</div>
			</div>
		</div>

		{#if 1 === currentTab}
			<div
				class="w-full px-5"
				id="media"
				in:fly={{ x: -30, duration: 1000, delay: 200 }}
				out:fly={{ x: 15, duration: 200 }}
			>
				<MediaManagement
					titleCardMedia={data.serviceMediaTitle}
					descCardMedia={data.serviceMediaDesc}
					titleImproveMedia={data.serviceMediaOne}
					descImproveMedia={data.serviceMediaTwo}
					itemCard={data.oohMedia}
					btnContact={data.contactUs}
				/>
			</div>
		{/if}

		{#if 2 === currentTab}
			<div
				class="w-full px-5"
				id="production"
				in:fly={{ x: -30, duration: 1000, delay: 200 }}
				out:fly={{ x: 15, duration: 200 }}
			>
				<Production
					titleCardProduction={data.serviceProductionTitle}
					descCardProduction={data.serviceProductionDesc}
					titleImproveProduction={data.serviceProductionOne}
					descImproveProduction={data.serviceProductionTwo}
					titleProduct={data.serviceProductionThree}
					descProduct={data.serviceProductionFour}
					titleProducPrint={data.serviceProductionEightTitle}
					descProducPrint={data.serviceProductionEightDesc}
					titleProducPrintOne={data.serviceProductionFiveTitle}
					descProducPrintOne={data.serviceProductionFiveDesc}
					titleProducPrintTwo={data.serviceProductionSixTitle}
					descProducPrintTwo={data.serviceProductionSixDesc}
					titleProducPrintThree={data.serviceProductionSevenTitle}
					descProducPrintThree={data.serviceProductionSevenDesc}
					itemCard={data.oohProduction}
					btnContact={data.contactUs}
					textLearnMore={data.learnMore}
				/>
			</div>
		{/if}

		{#if 3 === currentTab}
			<div
				class="w-full px-5"
				in:fly={{ x: -30, duration: 1000, delay: 200 }}
				out:fly={{ x: 15, duration: 200 }}
			>
				<DigitalMarketing
					titleCardDigital={data.serviceDigitalTitle}
					descCardDigital={data.serviceDigitalDesc}
					titleCardServiceAbout={data.serviceDigitalOne}
					descCardServiceAbout={data.serviceDigitalTwo}
					titleCardServiceImprove={data.serviceDigitalThree}
					descCardServiceImprove={data.serviceDigitalFour}
					btnContact={data.contactUs}
					txtFree={data.txtFree}
					txtServices={data.txtServices}
					servicesCuit={data.servicesCuit}
				/>
			</div>
		{/if}

		{#if 4 === currentTab}
			<div
				class="w-full px-5"
				in:fly={{ x: -30, duration: 1000, delay: 200 }}
				out:fly={{ x: 15, duration: 200 }}
			>
				<BusinessInnovation
					titleCardBusiness={data.serviceBusinessTitle}
					descCardBusiness={data.serviceBusinessDesc}
					titleServiceAbout={data.serviceBusinessOne}
					descServiceAbout={data.serviceBusinessTwo}
					titleServiceImprove={data.why}
					descServiceImprove={data.whyDesc}
					titleBusiness={data.serviceBusinessThree}
					descBusiness={data.serviceBusinessFour}
					btnContact={data.contactUs}
					txtLearn={data.learnMore}
					infuseOne={data.infuseOne}
					infuseTwo={data.infuseTwo}
					enableOne={data.enableOne}
					enableTwo={data.enableTwo}
					equipOne={data.equipOne}
					equipTwo={data.equipTwo}
				/>
			</div>
		{/if}
	</div>

	<BottomPage />
</section>

<style lang="postcss">
	.is-active {
		@apply text-green-primary;
		padding-bottom: 3px;
		border-bottom: 2px solid #43d57a;
	}
</style>
