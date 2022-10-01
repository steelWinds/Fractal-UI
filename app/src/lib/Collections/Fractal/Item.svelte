<script lang="ts">
import type TagItem from 'types/Components/UI/Tag/TagItem';
import List from '$lib/UI/Tag/List.svelte';

let elementClass: string = '';

export let tagList: TagItem[] = [];
export let link: string = ''
export let baseURL: string = '';
export { elementClass as class };
</script>

<article 
	class={`
		tw-relative
		tw-bg-blue
		tw-rounded-xl
		tw-p-3
		tw-flex
		tw-flex-col
		tw-justify-between
		${elementClass}
	`}
>
	{#if Boolean(link && baseURL)}
		<!-- svelte-ignore a11y-missing-content -->
		<a href={`${baseURL}${link}`} class="tw-absolute tw-w-full tw-h-full"></a>
	{/if}

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