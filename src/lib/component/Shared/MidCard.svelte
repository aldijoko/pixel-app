<script>
	export let icon = '';
	export let iconClass = 'text-green-primary';
	export let title = '';
	export let desc = '';
</script>

<div class="w-full h-full rounded-md bg-[#ECEBEB] p-4">
	<!-- <img class="w-14 h-14" src={icon} alt=""> -->
	<span class="iconify text-xl md:text-4xl lg:text-5xl {iconClass}" data-icon={icon} />
	<div class="mt-4 p-2">
		<h3 class="text-xs md:text-lg lg:text-xl font-bold">{title}</h3>
		<p class="text-xs md:text-sm text-blue-primary mt-2">{desc}</p>
	</div>
</div>
