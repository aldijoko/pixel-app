<script>
	import MidCard from '$lib/component/Shared/MidCard.svelte';

	export let title = '';
	export let desc = '';
	export let type = 'contact';
	export let itemCard = [];
	export let ImproveBtnContact = '';
</script>

<div class="w-full h-full">
	<h2 class="font-bold text-xl md:text-4xl mb-1 text-start md:text-center">
		{#if type == 'cuit'}
			{title} <span class="text-orange-primary">CUiT For Business</span>
		{:else if type == 'innovesia'}
			{title} <span class="text-blue-secondary">Innovesia</span>
		{:else if type == 'contact'}
			{title}
		{/if}
	</h2>
	<p class="text-sm md:text-lg text-blue-primary mb-2 text-start md:text-center">
		{desc}
	</p>
	<div class="grid grid-cols-2 md:grid-cols-4 gap-5 py-5">
		{#each itemCard as om}
			<MidCard title={om.title} desc={om.desc} icon={om.icon} iconClass={om.iconClass} />
		{/each}
	</div>
	<div class="w-full flex justify-center">
		{#if type == 'contact'}
			<a href="">
				<div
					class="mt-5 flex items-center px-3 py-1 rounded-md bg-green-primary gap-2 text-xs md:text-lg hover:bg-blue-primary transition duration-500"
				>
					<img src="/img/icon/icon_whatsapp2.svg" class="w-5 h-5" alt="icon-wa" />
					<span class=" text-white">{ImproveBtnContact}</span>
				</div>
			</a>
		{:else if type == 'cuit'}
			<a href="">
				<div
					class="w-full hidden text-xs md:text-lg md:flex items-center gap-1 text-violet-primary border border-violet-primary rounded-md bg-white px-3 py-1 mt-5 hover:text-orange-primary hover:border-orange-primary transition duration-500 hover:scale-105"
				>
					<p>{ImproveBtnContact}</p>
					<span class="iconify text-xl" data-icon="material-symbols:arrow-right-alt-rounded" />
				</div>
			</a>
		{:else if (type = 'innovesia')}
			<a href="">
				<div
					class="w-full hidden text-xs md:text-lg md:flex items-center gap-1 text-white rounded-md bg-blue-secondary px-3 py-1 mt-5 hover:bg-blue-primary transition duration-500"
				>
					<p>{ImproveBtnContact}</p>
					<span class="iconify text-xl" data-icon="material-symbols:arrow-right-alt-rounded" />
				</div>
			</a>
		{/if}
	</div>
</div>
