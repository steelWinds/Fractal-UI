<script lang="ts">
	import type FractalCard from 'types/Components/Fractal/FractalCard';
	import Item from './Item.svelte';

	export let cardList: FractalCard[] = [];
	export let cols: number = 2;
</script>

<article 
	class={`
		tw-p-2.5
		tw-gap-2.5
		tw-space-y-2.5
		tw-columns-${cols}
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