<script>
	export let icon = '';
	export let alt = '';
	export let title = '';
</script>

<div
	class="w-full h-full flex flex-col  justify-center text-center items-center border border-green-primary rounded-2xl p-5"
>
	<img class="md:w-10 w-8 h-8 md:h-10" src={icon} {alt} />
	<p class="text-blue-primary font-bold mt-2 text-sm md:text-lg">{title}</p>
</div>
