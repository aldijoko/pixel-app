<script>
	import { page } from '$app/stores';
	import FooterMobile from '../Footer/FooterMobile.svelte';

	$: pages = $page.url.pathname.includes('en/');
	$: pagesId = $page.url.pathname.includes('id/');

	export let open;

	let openEvent = false;
	let pathName = '';
	const unsubscribe = page.subscribe((p) => {
		pathName = p.url.pathname;
	});

	const menuList = [
		// { descId: 'Beranda', descEn: 'Home', hrefId: '/id/home', hrefEn: '/en/home'},
		// { descId: 'Layanan', descEn: 'Services', hrefId: '/id/services', hrefEn: '/en/services'},
		{ descId: 'Profil', descEn: 'About Us', hrefId: '/id/about', hrefEn: '/en/about' },
		// { descId: 'Klien Kami', descEn: 'Our Client', hrefId: '/id/client', hrefEn: '/en/client' },
		{ descId: 'Insight', descEn: 'Insight', hrefId: '/id/insight', hrefEn: '/en/insight' },
		// { descId: 'Karir', descEn: 'Career', hrefId: '/id/career', hrefEn: '/en/career' },
		{ descId: 'Kontak Kami', descEn: 'Contact Us', hrefId: '/id/contact', hrefEn: '/en/contact' }
	];

	const pathList = [
		{
			displayName: 'OOH  Media Management',
			pathEn: '/en/services',
			pathId: '/id/services'
		},
		{
			displayName: 'OOH Production',
			pathEn: '/en/services',
			pathId: '/id/services'
		},
		{
			displayName: 'Digital Marketing',
			pathEn: '/en/services',
			pathId: '/id/services'
		},
		{
			displayName: 'Business Innovation',
			pathEn: '/en/services',
			pathId: '/id/services'
		}
	];
</script>

<div class="overflow-y-auto flex flex-col justify-between bg-white w-full">
	<div class="flex flex-col gap-4 mt-2 px-4 py-6">
		{#if pages}
			<div class="flex justify-between items-center">
				<div class="font-medium text-base">
					<a
						href="/en/home"
						class:is-active={pathName === '/en/home'}
						on:click={() => (open = false)}
					>
						Home
					</a>
				</div>
				<button on:click={() => (open = !open)}>
					<span
						class="iconify text-3xl"
						data-icon="material-symbols:line-start-arrow-notch-rounded"
					/>
				</button>
			</div>
			<div class="font-medium text-base mb-1">
				<a
					rel="prefetch"
					href="/en/services"
					on:click={() => (open = false)}
					class:is-active={pathName === '/en/services'}
				>
					Services
				</a>
			</div>
			<!-- <div
				class="font-medium text-base flex items-center gap-1 cursor-pointer mb-1"
				on:click={() => {
					if (open) {
						openEvent = !openEvent;
					}
				}}
				class:is-active={pathName === '/en/services'}
			>
				<p>Services</p>
				<span class="iconify" data-icon="akar-icons:chevron-down" />
			</div> -->
			<!-- {#if openEvent}
				{#each pathList as p}
					<div class="px-2 flex flex-col">
						<a
							rel="prefetch"
							class="font-medium text-sm"
							href={p.pathEn}
							on:click={() => (open = false)}
						>
							{p.displayName}
						</a>
					</div>
				{/each}
			{/if} -->
			{#each menuList as l}
				<div class="font-medium text-base mb-1">
					<a
						rel="prefetch"
						href={l.hrefEn}
						on:click={() => (open = false)}
						class:is-active={pathName === l.hrefEn}
					>
						{l.descEn}
					</a>
				</div>
			{/each}
			<div class="font-medium text-base">
				<a href="/en/home" rel="prefetch" on:click={() => (open = false)}>
					<span class="font-bold">EN</span>
				</a>
				<!-- <span>/</span>
				<a href="/id/home" rel="prefetch" on:click={() => (open = false)}>
					<span>ID</span>
				</a> -->
			</div>
		{:else if pagesId}
			<div class="flex justify-between items-center">
				<div class="font-medium text-base">
					<a
						rel="prefetch"
						href="/id/home"
						class:is-active={pathName === '/id/home'}
						on:click={() => (open = false)}
					>
						Beranda
					</a>
				</div>
				<button on:click={() => (open = !open)}>
					<span
						class="iconify text-3xl"
						data-icon="material-symbols:line-start-arrow-notch-rounded"
					/>
				</button>
			</div>
			<div class="font-medium text-base mb-1">
				<a
					rel="prefetch"
					href="/id/services"
					on:click={() => (open = false)}
					class:is-active={pathName === '/id/services'}
				>
					Layanan
				</a>
			</div>
			<!-- <div
				class="font-medium text-base flex items-center gap-1 cursor-pointer mb-1"
				on:click={() => {
					if (open) {
						openEvent = !openEvent;
					}
				}}
				class:is-active={pathName === '/id/services'}
			>
				<p>Layanan</p>
				<span class="iconify" data-icon="akar-icons:chevron-down" />
			</div> -->
			<!-- {#if openEvent}
				{#each pathList as p}
					<div class="px-2 flex flex-col">
						<a
							rel="prefetch"
							class="font-medium text-sm"
							href={p.pathId}
							on:click={() => (open = false)}
						>
							{p.displayName}
						</a>
					</div>
				{/each}
			{/if} -->
			{#each menuList as l}
				<div class="font-medium text-base mb-1">
					<a
						rel="prefetch"
						href={l.hrefId}
						on:click={() => (open = false)}
						class:is-active={pathName === l.hrefId}
					>
						{l.descId}
					</a>
				</div>
			{/each}
			<div class="font-medium text-base">
				<a href="/en/home" rel="prefetch" on:click={() => (open = false)}>
					<span>EN</span>
				</a>
				<span>/</span>
				<a href="/id/home" rel="prefetch" on:click={() => (open = false)}>
					<span class="font-bold">ID</span>
				</a>
			</div>
		{/if}
	</div>
	<div class="mt-24">
		<FooterMobile />
	</div>
</div>

<style lang="postcss">
	.btn-overide {
		@apply h-10 flex items-center justify-center bg-black w-full px-4 py-1 rounded-lg text-white cursor-pointer hover:bg-black transition duration-500;
	}
	.btn-overide-outline {
		@apply h-10 flex items-center justify-center text-black border border-black w-full px-4 py-1 rounded-lg cursor-pointer hover:bg-black hover:text-white hover:border-black transition duration-500;
	}

	.is-active {
		font-weight: bold;
	}

	p {
		margin-bottom: 0px;
	}
</style>
