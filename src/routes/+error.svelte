<script>
	import { page } from '$app/stores';
	import MetaData from '$lib/component/Shared/MetaData.svelte';

	const metadata = {
		title: 'Not Found - Pixel Group',
		description: 'Page Not Found',
		url: ''
	};
</script>

<MetaData {metadata} />
<div class="pt-24 pb-5 px-5 md:px-[194px]">
	<h1 class="text-lg md:text-2xl">Page {$page.error.message}</h1>
</div>
