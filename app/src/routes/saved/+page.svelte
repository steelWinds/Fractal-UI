<script lang="ts">
import { setContext } from 'svelte';
import { writable } from 'svelte/store';
import { Search } from "carbon-components-svelte";
import Button from '$lib/UI/Button.svelte';
import List from '$lib/Collections/Fractal/List.svelte'
import Filter from '$lib/UI/Filter.svelte';

const state = writable({
	currentFilter: '',
});

setContext('out-filters', state);

let gridType: 'columns' | 'rows' = 'columns';
let filterType: string = '';


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
	<div class="tw-mb-4">
		<Search />
	</div>

	<div class="tw-flex tw-flex-row tw-justify-between tw-items-center tw-mb-4">
		<div class="tw-flex tw-flex-row tw-space-x-1">
			<Filter
				type="alphabet"
				activeClass="tw-stroke-azure tw-fill-azure"
				disableClass="tw-stroke-blue tw-fill-blue"
				bind:state={filterType}
				let:isActive
			>
				<span
					class="tw-font-semibold tw-text-lg tw-text-blue"
					class:tw-text-azure={isActive}
				>
					A
				</span>
			</Filter>

			<Filter
				type="date"
				activeClass="tw-stroke-azure tw-fill-azure"
				disableClass="tw-stroke-blue tw-fill-blue"
				bind:state={filterType}
				let:isActive
			>
				<svg
					width="18"
					height="18"
					viewBox="0 0 18 18"
					xmlns="http://www.w3.org/2000/svg"
					class:tw-fill-azure={isActive}
				>
					<path d="M1.5 6.75C1.5 5.81812 1.5 5.35218 1.65224 4.98463C1.85523 4.49458 2.24458 4.10523 2.73463 3.90224C3.10218 3.75 3.56812 3.75 4.5 3.75H13.5C14.4319 3.75 14.8978 3.75 15.2654 3.90224C15.7554 4.10523 16.1448 4.49458 16.3478 4.98463C16.5 5.35218 16.5 5.81812 16.5 6.75V6.75C16.5 6.98297 16.5 7.09946 16.4619 7.19134C16.4112 7.31386 16.3139 7.41119 16.1913 7.46194C16.0995 7.5 15.983 7.5 15.75 7.5H2.25C2.01703 7.5 1.90054 7.5 1.80866 7.46194C1.68614 7.41119 1.58881 7.31386 1.53806 7.19134C1.5 7.09946 1.5 6.98297 1.5 6.75V6.75Z"/>
					<path d="M1.5 12.5C1.5 14.3856 1.5 15.3284 2.08579 15.9142C2.67157 16.5 3.61438 16.5 5.5 16.5H12.5C14.3856 16.5 15.3284 16.5 15.9142 15.9142C16.5 15.3284 16.5 14.3856 16.5 12.5V10C16.5 9.5286 16.5 9.29289 16.3536 9.14645C16.2071 9 15.9714 9 15.5 9H2.5C2.0286 9 1.79289 9 1.64645 9.14645C1.5 9.29289 1.5 9.5286 1.5 10V12.5Z"/>
					<path d="M5.25 2.25L5.25 4.5" class={`${isActive ? 'tw-stroke-azure' : 'tw-stroke-blue'}`} stroke-width="2" stroke-linecap="round"/>
					<path d="M12.75 2.25L12.75 4.5" class={`${isActive ? 'tw-stroke-azure' : 'tw-stroke-blue'}`} stroke-width="2" stroke-linecap="round"/>
				</svg>
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
