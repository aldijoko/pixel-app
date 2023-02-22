<script>
	import Image from '../AssetRender/Image.svelte';
	import IntersectionObserver from './IntersectionObserver.svelte';

	export let src;
	export let alt;
	export let customeClass;
	export let customeStyle;
	export let isProfilePicture;
	export let onClick = () => {};
	export let noLazyLoad;

	let nativeLoading = false;
</script>

<IntersectionObserver once={true} let:intersecting>
	{#if intersecting || nativeLoading}
		<Image {alt} {src} {customeClass} {customeStyle} {isProfilePicture} {onClick} {noLazyLoad} />
	{/if}
</IntersectionObserver>
