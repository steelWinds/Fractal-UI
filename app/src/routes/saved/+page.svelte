<script lang="ts">
import { Search } from "carbon-components-svelte";
import Button from '$lib/UI/Button.svelte';
</script>

<div class="tw-p-3">
	<div class="tw-mb-3">
		<Search />
	</div>

	<div class="tw-flex tw-flex-row tw-justify-between tw-items-center">
		<div></div>
		
		<div>
			<Button>
				<img 
					class="tw-block tw-w-7"
					src="src/assets/icons/darhboard.svg"
					alt="Grid type dashboard"
				/>
			</Button>

			<Button>
				<img 
					class="tw-block tw-w-7"
					src="src/assets/icons/Menu.svg"
					alt="Grid type material"
				/>
			</Button>
		</div>
	</div>
</div>
