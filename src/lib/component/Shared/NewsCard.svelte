<script>
	export let title = '';
	export let image = '/img/insight/blog-1.png';
	export let imgAlt = '';
	export let customClass = 'bg-blue-primary';
	export let projects = false;
	export let customText = '';
	export let href = '';
</script>

{#if projects}
	<div class="w-full h-full border rounded-xl">
		<img class="w-full h-36 rounded-tl-xl rounded-tr-xl object-cover" src={image} alt={imgAlt} />
		<div
			class="rounded-bl-md rounded-br-md px-3 py-5 {customClass} flex items-center justify-between"
		>
			<p class="text-sm md:text-base font-bold text-black">{title}</p>
			<a {href} class="py-1 px-6 rounded-md text-white bg-green-primary text-xs md:text-lg"
				>View Project</a
			>
		</div>
	</div>
{:else}
	<a {href}>
		<!-- <div class="w-full border rounded-xl">
        <img class="w-full h-36 rounded-tl-xl rounded-tr-xl object-cover" src={image} alt={imgAlt}>
        <div class="rounded-bl-xl rounded-br-xl py-2 px-5 {customClass}">
            <p class="text-sm md:text-base font-medium hover:underline {customText}">{@html title}</p>
        </div>
    </div> -->
		<div class="w-full h-full border rounded-xl">
			<div class="w-full h-full pb-3 {customClass}">
				<img
					class="w-full h-32 rounded-tl-xl rounded-tr-xl object-cover object-center mb-3"
					src={image}
					alt={imgAlt}
				/>
				<p class="text-sm md:text-base font-medium hover:underline px-4 {customText}">
					{@html title}
				</p>
			</div>
		</div>
	</a>
{/if}
