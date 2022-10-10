<script lang="ts">
	export let group: any;
	export let value: any;
</script>

<label 
	class="
		tw-relative
		tw-cursor-pointer
		"
	>
	<input
		bind:group={group}
		value={value}
		type="radio"
		name={$$restProps.name}
		class="
			tw-absolute
			tw-top-0
			tw-left-0
			tw-w-0
			tw-h-0
			tw-peer
		"
	/>

	<div
		class="
		tw-px-3
		tw-py-0.5
		tw-rounded-full
		tw-bg-blue
		peer-checked:tw-bg-azure
		tw-transition-colors tw-transition-300
		"
	>
		<p class="tw-text-white tw-inline-block tw-font-ProximaNova">
			<slot />
		</p>
	</div>
</label>