<script lang="ts">
	import type FractalCard from 'types/Components/Fractal/FractalCard';
	import Item from './Item.svelte';

	export let cardList: FractalCard[] = [];
</script>

<article 
	class={`
		tw-p-2.5
		tw-gap-2.5
		tw-space-y-2.5
		tw-columns-1
		mobile:tw-columns-2
		small-laptop:tw-space-y-0
		small-laptop:tw-columns-[unset]
		small-laptop:tw-grid
		small-laptop:tw-grid-cols-4
		desktop:tw-grid-cols-6
	`}
>
	{#each cardList as card (card.id)}
		<Item tagList={card.tagList} class="tw-break-inside-avoid">
			<svelte:fragment slot="title">
				{ card.title }
			</svelte:fragment>
		</Item>
	{/each}
</article>