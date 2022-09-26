<script lang="ts">
import { Search } from "carbon-components-svelte";
import Button from '$lib/UI/Button.svelte';
import List from '$lib/Collections/Fractal/List.svelte'
import Filter from '$lib/UI/Filter.svelte';

let gridType: 'columns' | 'rows' = 'columns';
let filterType: string = '';

$: {
	console.log(filterType);
}

const cards = [

		{
			id: 1,
			title: 'Line',
			tagList: [
				{
					id: 2,
					title: 'jopa'
				}
			]
		},

		{
			id: 3,
			title: 'Line',
			tagList: [
				{
					id: 4,
					title: 'jopa'
				}
			]
		},

		{
			id: 5,
			title: 'Line',
			tagList: [
				{
					id: 6,
					title: 'jopa'
				}
			]
		},

		{
			id: 7,
			title: 'Line',
			tagList: [
				{
					id: 8,
					title: 'jopa'
				}
			]
		},
	]
</script>

<div class="tw-p-3">
	<div class="tw-mb-3">
		<Search />
	</div>

	<div class="tw-flex tw-flex-row tw-justify-between tw-items-center">
		<div>
			<Filter
				type="alphabet"
				bind:state={filterType}
			>
				A
			</Filter>

			<Filter
				type="date"
				bind:state={filterType}
			>
				date
			</Filter>
		</div>
		
		<div>
			<Button
				class={`grid-type-btn ${gridType === 'columns' ? 'active' : ''}`}
				on:click={() => gridType = 'columns'}
			>
				<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
					<rect x="4" y="4" width="6" height="6" rx="1" stroke="#2E4057" stroke-width="2" stroke-linejoin="round"/>
					<rect x="4" y="14" width="6" height="6" rx="1" stroke="#2E4057" stroke-width="2" stroke-linejoin="round"/>
					<rect x="14" y="14" width="6" height="6" rx="1" stroke="#2E4057" stroke-width="2" stroke-linejoin="round"/>
					<rect x="14" y="4" width="6" height="6" rx="1" stroke="#2E4057" stroke-width="2" stroke-linejoin="round"/>
				</svg>
			</Button>

			<Button
				class={`grid-type-btn ${gridType === 'rows' ? 'active' : ''}`}
				on:click={() => gridType = 'rows'}
			>
				<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
					<rect x="4" y="5" width="16" height="5" rx="1" stroke="#2E4057" stroke-width="2" stroke-linejoin="round"/>
					<rect x="4" y="14" width="16" height="5" rx="1" stroke="#2E4057" stroke-width="2" stroke-linejoin="round"/>
				</svg>
			</Button>
		</div>
	</div>

	<List cardList={cards} gridType={gridType} />
</div>

<style lang="postcss">
:global(.grid-type-btn.active > svg) {
	& rect {
		stroke: #3AB795;

		transition: all .25s ease;
	}
}
</style>
