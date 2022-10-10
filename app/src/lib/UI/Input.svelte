<script lang="ts">
	import { Tooltip } from "carbon-components-svelte";

	export let value: any = null;
	export let slottedInput: boolean = false;

	const handleInput = (event: Event) => {
		const target = event.target as HTMLInputElement;

		value = target.value;
	}
</script>

<div class="tw-relative" on:click|preventDefault>
	<label
		class={`
			tw-block
			tw-relative
			${$$restProps.class}
		`}>

		{#if !slottedInput}
			<input
				type="{$$restProps.type}"
				placeholder="{$$restProps.placeholder}"
				class="
					tw-rounded
					tw-bg-blue
					tw-w-full
					tw-p-2
					tw-pr-10
					tw-text-white
					tw-outline-azure
					tw-font-ProximaNova
				"
			/>

			{:else}

			<slot name="input" />
		{/if}
	</label>

	<div
		on:click|preventDefault
		class="
			tw-absolute
			tw-right-2.5
			tw-top-1.5
			tw-select-none
		"
	>
		<Tooltip
			direction="top"
			align="end"
		>
			<svelte:fragment slot="icon">
				<img
					class="
						tw-h-[25px]
						tw-w-[24px]
					"
					src="/assets/icons/information.svg"
					alt="Info button"
				/>
			</svelte:fragment>

			<p>
				Text for saving file
			</p>
		</Tooltip>
	</div>
</div>