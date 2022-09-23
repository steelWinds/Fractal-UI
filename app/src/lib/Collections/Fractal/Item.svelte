<script lang="ts">
import type TagItem from 'types/Components/UI/Tag/TagItem';
import List from '$lib/UI/Tag/List.svelte';

let elementClass: string = '';

export let tagList: TagItem[] = [];
export { elementClass as class };
</script>

<article 
	class={`
		fractal-card
		tw-bg-blue
		tw-rounded-xl
		tw-p-3
		tw-flex
		tw-flex-col
		tw-justify-between
		${elementClass}
	`}
>
	<h3 
		class="
			title
			tw-text-white
			tw-text-xl
			tw-font-ProximaNova
			tw-font-semibold
			tw-mb-3
		"
	>
		<slot name="title"> No name </slot>
	</h3>

	<List tagList={tagList} class="tw-justify-end" />
</article>

<style lang="postcss">
.fractal-card {
	aspect-ratio: 5 / 4;
}
</style>