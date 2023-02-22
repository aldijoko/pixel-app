<script>
	export let visible = false;
	// export let type = '';
</script>

<div
	class="overlay"
	class:not-visible={!visible}
	class:is-visible={visible}
	on:click={() => (visible = false)}
/>

<div class="panel-wrapper" class:is-active={visible} on:click|self={() => (visible = false)}>
	<div class="panel-content overflow-auto flex items-center justify-center relative rounded-xl">
		<div class="w-full">
			<slot />
		</div>
	</div>
</div>

<style lang="postcss">
	.panel-wrapper {
		@apply flex justify-center items-center mx-auto;
		position: fixed;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
		max-width: 80%;
		/* transform: translateY(100%); */
		transform: scale(0);
		opacity: 0;
		transition: 0.3s ease-out;
		z-index: 1002;
	}
	.panel-wrapper.is-active {
		/* transform: translateY(0%); */
		transform: scale(1);
		opacity: 1;
	}
	.panel-content {
		transition: 0.3s ease-out;
		max-height: 95%;
		@apply bg-white absolute;
	}

	@media only screen and (max-width: 960px) {
		.panel-wrapper {
			max-width: 90%;
		}
	}
	/* .panel {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background: #FFF;
      overflow: auto;
      padding: 24px;
    } */
	.overlay {
		@apply md:cursor-pointer;
		/* background-color: rgba(0, 0, 0, 0.5); */
		background-color: rgba(0, 0, 0);
		position: fixed;
		left: 0;
		top: 0;
		right: 0;
		bottom: 0;
		z-index: 1001;
		opacity: 0.5;
	}
	.overlay.not-visible {
		visibility: hidden;
		opacity: 0;
		transition: all 500ms;
	}
	.overlay.is-visible {
		visibility: visible;
		opacity: 0.5;
		transition: visibility 0.5s linear 0s, opacity 500ms;
	}
</style>
