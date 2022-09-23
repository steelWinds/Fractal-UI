<script lang="ts">
	import type TagItem from 'types/Components/UI/Tag/TagItem';
	import Item from "./Item.svelte";

	let elementClass: string = '';

	export let tagList: TagItem[] = [];
	export { elementClass as class };
</script>

<article class={`tag-list tw-flex tw-flex-wrap tw-gap-2 ${elementClass}`}>
	{#each tagList as tag (tag.id)}
		<Item>
			<svelte:fragment slot="title">
				{ tag.title }
			</svelte:fragment>
		</Item>
	{/each}
</article>