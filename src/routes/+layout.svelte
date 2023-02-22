<script>
	import '../app.css';
	import Header from '$lib/component/Header/TopNav.svelte';
	import Footer from '$lib/component/Footer/index.svelte';
</script>

<div class="w-full">
	<Header />
	<div class="w-full">
		<slot />
	</div>
	<Footer />
</div>
