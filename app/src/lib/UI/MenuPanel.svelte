<script lang="ts">
	let elementClass: string = "";

	export { elementClass as class };
</script>

<article
	class="{
		`menu-panel
		tw-shrink-0
		tw-mt-6
		tablet:tw-mt-12
		tw-overflow-x-auto
		tw-snap-x
		tw-snap-mandatory
		tw-sticky
		tw-flex
		tw-justify-between
		tw-space-x-3
		tw-w-full
		tablet:tw-w-fit
		tablet:tw-rounded-full
		tw-px-8
		tw-py-3
		tw-bottom-0
		tablet:tw-bottom-3
		tablet:tw-mx-auto
		tw-bg-white ${elementClass}`
	}"
>
	<slot />
</article>