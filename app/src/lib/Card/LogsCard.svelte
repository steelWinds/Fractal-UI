<script lang="ts">
	import type ILogsData from '@/types/Components/Card/ILogsData';

	export let data: ILogsData[];
</script>

<article
	class="
		default-shadow
		tw-rounded-2xl
		tw-bg-blue
		tw-text-white
		tw-max-w-[350px]
		tw-space-y-1.5
		tw-p-4
	"	
>
	{#each data as logItem, id (id)}
		<section	
			class="
				tw-flex
				tw-flex-row
				tw-flex-wrap
				tw-font-ProximaNova
				tw-text-xl
			"
		>
			<h5 class="">
				{ logItem.title }:
			</h5>

			&nbsp;

			<span>
				{ logItem.value }
			</span>

			&nbsp;

			<span>
				{ logItem.unit }
			</span>
		</section>
	{/each}
</article>
