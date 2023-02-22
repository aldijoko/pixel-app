<script>
	import { page } from '$app/stores';

	$: pages = $page.url.pathname.includes('en/');
	$: pagesId = $page.url.pathname.includes('id/');

	const textFooter = [
		{ descId: 'Beranda', descEn: 'Home', hrefId: '/id/home', hrefEn: '/en/home' },
		{ descId: 'Layanan', descEn: 'Services', hrefId: '/id/services', hrefEn: '/en/services' },
		{ descId: 'Profil', descEn: 'About Us', hrefId: '/id/about', hrefEn: '/en/about' },
		{ descId: 'Klien Kami', descEn: 'Our Client', hrefId: '/id/client', hrefEn: '/en/client' },
		{ descId: 'Insight', descEn: 'Insight', hrefId: '/id/insight', hrefEn: '/en/insight' },
		{ descId: 'Karir', descEn: 'Career', hrefId: '/id/career', hrefEn: '/en/career' },
		{ descId: 'Kontak Kami', descEn: 'Contact Us', hrefId: '/id/contact', hrefEn: '/en/contact' }
	];
</script>

<footer class="bg-blue-primary text-white w-full h-full">
	<div class="w-full 2xl:w-300 2xl:mx-auto pt-12 pb-6 flex flex-col md:flex-row justify-evenly">
		<div class="flex flex-col  items-start justify-start w-full md:w-1/2 px-5 md:pl-[194px]">
			<a href="/en/home">
				<img alt="logo-text" src="/img/shared/pixel-logo.svg" class="h-12" />
			</a>
			<p class="text-sm md:text-base mt-4 text-white">
				&copy;{new Date().getFullYear()} All Right Reserved
			</p>
			<div class="my-5 md:my-10 font-light">
				<p class="text-xl md:text-2xl font-semibold text-white mb-0">Pixel Group</p>
				<div class="mt-5 md:mt-10 ">
					<p class="text-white text-sm md:text-base mb-0">
						Jl. Panjang Cidodol No. 83 Kebayoran Lama Jakarta Selatan 12220
					</p>
					<p class="text-white text-sm md:text-base mb-0">
						Phone : <a href="tel:+62129428555" class="hover:underline">021 2942 8555</a>
					</p>
					<p class="text-white text-sm md:text-base">
						Email : <a href="mailto:ex@pixel.com" class="hover:underline">ex@pixel.com</a>
					</p>
				</div>
			</div>
			<div class="flex gap-5 items-center mt-5 md:mt-0">
				<a href="">
					<span class="iconify text-3xl" data-icon="mdi:twitter" />
				</a>
				<a href="">
					<span class="iconify text-3xl" data-icon="ri:facebook-fill" />
				</a>
				<a href="">
					<span class="iconify text-3xl" data-icon="mdi:instagram" />
				</a>
				<a href="">
					<span class="iconify text-3xl" data-icon="eva:linkedin-fill" />
				</a>
			</div>
		</div>
		<div class="hidden md:flex flex-col md:flex-row justify-between w-full md:w-1/2 pt-6">
			<div class="w-full md:w-1/2 mb-2 flex flex-col items-center md:items-start">
				{#if pages}
					<h3 class="hidden md:block font-bold text-lg mb-4">Company</h3>
					<div class="text-sm md:text-base flex md:flex-col gap-6 md:gap-2">
						{#each textFooter as tf}
							<a href={tf.hrefEn} class="hover:underline">{tf.descEn}</a>
						{/each}
					</div>
				{:else if pagesId}
					<h3 class="hidden md:block font-bold text-lg mb-4">Perusahaan</h3>
					<div class="text-sm md:text-base flex md:flex-col gap-6 md:gap-2">
						{#each textFooter as tf}
							<a href={tf.hrefId} class="hover:underline">{tf.descId}</a>
						{/each}
					</div>
				{/if}
			</div>
			<div class="w-full md:w-1/2 mb-2 flex flex-col items-center md:items-start">
				{#if pages}
					<h3 class="hidden md:block font-bold text-lg mb-4">Legal & Policies</h3>
					<div class="text-sm md:text-base flex md:flex-col gap-6 md:gap-2">
						<a href="#" class="hover:underline">Term of Services</a>
						<a href="#" class="hover:underline">Privacy Policy</a>
					</div>
				{:else if pagesId}
					<h3 class="hidden md:block font-bold text-lg mb-4">Legal & Policies</h3>
					<div class="text-sm md:text-base flex md:flex-col gap-6 md:gap-2">
						<a href="#" class="hover:underline">Persyaratan Layanan</a>
						<a href="#" class="hover:underline">Kebijakan Layanan</a>
					</div>
				{/if}
			</div>
		</div>
	</div>
	<div class="px-[194px] pb-10 2xl:w-300 2xl:mx-auto hidden md:flex md:flex-row flex-col gap-5 ">
		<div class="w-4/5 flex gap-5">
			<div class="w-full text-lg">
				<a href="/en/home" class="hover:underline">
					<p>Pixel Art</p>
				</a>
				<div class="border-b-8 border-green-primary mt-2" />
			</div>
			<div class="w-full text-lg">
				<a href="https://gocuit.com/">
					<p>OOH Production</p>
				</a>
				<div class="border-b-8 border-green-primary mt-2" />
			</div>
			<div class="w-full text-lg">
				<a
					href="https://www.innovesia.co.id/"
					target="_blank"
					class="hover:underline"
					rel="noreferrer"
				>
					<p>Digital Marketing</p>
				</a>
				<div class="border-b-8 border-orange-primary mt-2" />
			</div>
			<div class="w-full text-lg">
				<a href="#" class="hover:underline">
					<p>Business Innovation</p>
				</a>

				<div class="border-b-8 border-blue-secondary mt-2" />
			</div>
		</div>
	</div>
</footer>

<style lang="postcss">
	p {
		margin-bottom: 0px;
		color: white;
	}
</style>
