<script lang="ts">
	let elementClass: string = "";

	export { elementClass as class };
</script>

<article
	class="{
		`menu-panel
		tw-overflow-x-auto
		tw-snap-x
		tw-snap-mandatory
		tw-fixed
		tw-flex
		tw-justify-between
		tw-space-x-3
		tw-w-full
		tablet:tw-w-auto
		tablet:tw-rounded-full
		tw-px-8
		tw-py-3
		tw-bottom-0
		tablet:tw-bottom-6
		tw-left-1/2
		tw--translate-x-1/2
		tw-bg-white ${elementClass}`
	}"
>
	<slot />
</article>