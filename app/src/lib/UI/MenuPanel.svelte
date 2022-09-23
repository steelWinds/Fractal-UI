<script lang="ts">
	let elementClass: string = "";

	export { elementClass as class };
</script>

<article
	class="{
		`menu-panel
		tw-rounded-full
		tw-px-8
		tw-py-3
		tw-bottom-6
		tw-left-1/2
		tw--translate-x-1/2
		tw-bg-white ${elementClass}`
	}"
>
	<slot />
</article>

<style lang="postcss">
	:global(.menu-panel) {
		box-shadow: 0 0 15px 0 rgba(0 0 0 / 30%);
	}
</style>