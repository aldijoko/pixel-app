<script>
	import { MediaImage } from '$lib/store/services';
	import CardMedia from './component/CardMedia.svelte';
	import CardServiceImprove from './component/CardServiceImprove.svelte';

	let openImgOne = false;
	let openImgTwo = false;
	let openImgThree = false;

	export let titleCardMedia = '';
	export let descCardMedia = '';

	export let titleImproveMedia = '';
	export let descImproveMedia = '';

	export let itemCard = [];
	export let btnContact = '';
</script>

<div class="w-full ">
	<div class="py-5">
		<CardMedia
			title={titleCardMedia}
			desc={descCardMedia}
			video={true}
			src="https://www.youtube.com/embed/7Yw9H0sTowQ"
			itemImage={MediaImage}
			{btnContact}
			{openImgOne}
			{openImgTwo}
			{openImgThree}
			onImgOne={() => (openImgOne = !openImgOne)}
			onImgTwo={() => (openImgTwo = !openImgTwo)}
			onImgThree={() => (openImgThree = !openImgThree)}
		/>
	</div>
	<div class="py-5">
		<CardServiceImprove
			title={titleImproveMedia}
			desc={descImproveMedia}
			{itemCard}
			ImproveBtnContact={btnContact}
		/>
	</div>
</div>
