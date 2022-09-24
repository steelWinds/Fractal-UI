<script lang="ts">
import { Toggle } from "carbon-components-svelte";

export let toggle: boolean;
</script>

<article
	class="
		tw-flex
		tw-flex-row
		tw-justify-between
		tw-flex-wrap
		tw-text-center
		tw-items-center
		tw-px-3
	"
>
	<h3 class="tw-text-blue tw-text-xl tw-font-semibold tw-font-ProximaNova">
		<slot />
	</h3>

	<Toggle
		bind:toggled={toggle}
		class="tw-block tw-flex-none custom-toggle"
		labelA=""
		labelB=""
	/>
</article>