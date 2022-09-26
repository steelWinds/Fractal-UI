<script lang="ts">
	import type FractalCard from 'types/Components/Fractal/FractalCard';
	import Item from './Item.svelte';

	export let gridType: 'columns' | 'rows' = 'columns'; 
	export let cardList: FractalCard[] = [];

	const gridTypes = {
		columns: `
			tw-gap-2.5
			tw-space-y-2.5
			tw-columns-1
			mobile:tw-columns-2
			small-laptop:tw-space-y-0
			small-laptop:tw-columns-[unset]
			small-laptop:tw-grid
			small-laptop:tw-grid-cols-4
			desktop:tw-grid-cols-6
		`,
	
		rows: `
			tw-gap-2.5
			tw-grid
			tw-grid-cols-1
			small-laptop:tw-grid-cols-2
			desktop:tw-grid-cols-3
		`,
	}

	$: aspectRatioItem = gridType === 'columns' ? 
		'tw-aspect-[5/4]' : 'tw-aspect-[2/1]'
</script>

<article 
	class={gridTypes[gridType]}
>
	{#each cardList as card (card.id)}
		<Item
			tagList={card.tagList} 
			class={`tw-break-inside-avoid ${aspectRatioItem}`}
		>
			<svelte:fragment slot="title">
				{ card.title }
			</svelte:fragment>
		</Item>
	{/each}
</article>