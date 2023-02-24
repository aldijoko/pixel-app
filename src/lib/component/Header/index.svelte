<script>
	import { page } from '$app/stores';
	import Hamburger from '../Shared/Hamburger.svelte';

	$: pages = $page.url.pathname.includes('en/');
	$: pagesId = $page.url.pathname.includes('id/');

	export let open = false;

	let pathName = '';
	const unsubscribe = page.subscribe((p) => {
		pathName = p.url.pathname;
	});

	const textHeader = [
		// { descId: 'Beranda', descEn: 'Home', hrefId: '/id/home', hrefEn: '/en/home'},
		// { descId: 'Layanan', descEn: 'Services', hrefId: '/id/services', hrefEn: '/en/services'},
		{ descId: 'Profil', descEn: 'About Us', hrefId: '/id/about', hrefEn: '/en/about' },
		// { descId: 'Klien Kami', descEn: 'Our Client', hrefId: '/id/client', hrefEn: '/en/client' },
		{ descId: 'Insight', descEn: 'Insight', hrefId: '/id/insight', hrefEn: '/en/insight' },
		// { descId: 'Karir', descEn: 'Career', hrefId: '/id/career', hrefEn: '/en/career' },
		{ descId: 'Kontak Kami', descEn: 'Contact Us', hrefId: '/id/contact', hrefEn: '/en/contact' }
	];
</script>

<header class="bg-pixel-image w-full h-20">
	<nav class="base p-3 md:px-[194px] flex items-center relative md:p-1 bg-dots-pixel">
		{#if pages}
			<a class="w-1/5" href="/en/home">
				<div class="flex items-center">
					<img src="/img/shared/logo-pixel-blue.svg" alt="logo-pixel" class="h-12" />
				</div>
			</a>
		{:else}
			<a class="w-1/5" href="/id/home">
				<div class="flex items-center">
					<img src="/img/shared/logo-pixel-blue.svg" alt="logo-pixel" class=" h-12" />
				</div>
			</a>
		{/if}

		<div class="hidden md:flex items-center justify-end mt-2 w-full">
			<ul class="flex items-center gap-6 ">
				{#if pages}
					<li>
						<a
							href="/en/home"
							class="text-xs md:text-base"
							class:is-active={pathName === '/en/home'}>Home</a
						>
					</li>
					<li class="flex items-center gap-1 dropdown py-4">
						<a
							href="/en/services"
							class="text-xs md:text-base"
							class:is-active={pathName === '/en/services'}>Services</a
						>
					</li>
					{#each textHeader as th}
						<li>
							<a
								href={th.hrefEn}
								class="ntext-xs md:text-base"
								class:is-active={pathName === th.hrefEn}>{th.descEn}</a
							>
						</li>
					{/each}
					<li>
						<a href="/en/home">
							<span class="font-bold underline">EN</span>
						</a>
						<!-- <span>/</span>
						<a href="/id/home">
							<span>ID</span>
						</a> -->
					</li>
				{:else if pagesId}
					<li>
						<a
							href="/id/home"
							class="text-xs md:text-base"
							class:is-active={pathName === '/id/home'}>Beranda</a
						>
					</li>
					<li class="flex items-center gap-1 dropdown py-4">
						<a
							href="/id/services"
							class="text-xs md:text-base"
							class:is-active={pathName === '/id/services'}>Layanan</a
						>
						<!-- <span class="iconify cursor-pointer" data-icon="akar-icons:chevron-down" />
						<div class="dropdown-content rounded-lg">
							<a href="#" class:is-active={pathName === '/id/services/'}>
								<div class="flex gap-3">
									<img src="/img/icon/monitor.svg" alt="" />
									<span>OOH Media Management</span>
								</div>
							</a>
							<a href="#" class:is-active={pathName === '/id/services/'}>
								<div class="flex gap-3">
									<img src="/img/icon/printer.svg" alt="" />
									<span>OOH Production</span>
								</div>
							</a>
							<a href="#" class:is-active={pathName === '/id/services/'}>
								<div class="flex gap-3">
									<img src="/img/icon/pie-chart.svg" alt="" />
									<span>Digital Marketing</span>
								</div>
							</a>
							<a href="#" class:is-active={pathName === '/id/services/'}>
								<div class="flex gap-3">
									<img src="/img/icon/bulb.svg" alt="" />
									<span>Business Innovation</span>
								</div>
							</a>
						</div> -->
					</li>
					{#each textHeader as th}
						<li>
							<a
								href={th.hrefId}
								class="text-xs md:text-base"
								class:is-active={pathName === th.hrefId}>{th.descId}</a
							>
						</li>
					{/each}
					<li>
						<a href="/en/home">
							<span>EN</span>
						</a>
						<!-- <span>/</span>
						<a href="/id/home">
							<span class="font-bold underline">ID</span>
						</a> -->
					</li>
				{/if}
			</ul>
		</div>
		<div class="flex flex-1 md:hidden justify-end items-center cursor-pointer text-blue-primary">
			{#if pathName === '/en/home'}
				<p class="text-lg font-bold mr-4">Home</p>
			{:else if pathName === '/en/services'}
				<p class="text-lg font-bold mr-4">Services</p>
			{:else if pathName === '/en/about'}
				<p class="text-lg font-bold mr-4">About Us</p>
			{:else if pathName === '/en/client'}
				<p class="text-lg font-bold mr-4">Our Client</p>
			{:else if pathName === '/en/insight'}
				<p class="text-lg font-bold mr-4">Insight</p>
			{:else if pathName === '/en/career'}
				<p class="text-lg font-bold mr-4">Career</p>
			{:else if pathName === '/en/contact'}
				<p class="text-lg font-bold mr-4">Contact Us</p>
			{/if}
			<Hamburger bind:open />
		</div>
	</nav>
</header>

<style lang="postcss">
	.base {
		@apply w-full mx-auto;
	}

	.is-active {
		font-weight: bold;
	}

	.dropdown-content {
		display: none;
		position: absolute;
		background-color: #ecfbf2;
		min-width: 200px;
		box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
		z-index: 1;
		top: 81px;
	}

	.dropdown-content a {
		color: black;
		padding: 12px;
		display: block;
		text-align: left;
		border-radius: 8px;
	}

	.dropdown-content a:hover {
		background-color: #f1f1f1;
	}

	.dropdown:hover .dropdown-content {
		display: block;
	}

	.bg-pixel-image {
		background-image: linear-gradient(269.91deg, #43d57a 45.47%, rgba(67, 213, 122, 0) 90.95%);
	}

	.bg-dots-pixel {
		background-image: url('/img/shared/bg-dots.svg');
		background-repeat: no-repeat;
		background-size: cover;
		/* background-image: linear-gradient(269.91deg, #43D57A 45.47%, rgba(67, 213, 122, 0) 90.95%); */
	}

	p {
		margin-bottom: 0px;
	}

	@media (min-width: 768px) {
		/* .base {
			@apply w-11/12;
		} */
	}
</style>
