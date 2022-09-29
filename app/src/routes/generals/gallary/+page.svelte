<script lang="ts">
	import List from '$lib/Collections/Fractal/List.svelte'
	import { Search } from "carbon-components-svelte";

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
	];
</script>

<div class="tw-p-3">
	<h3
		class="
			tw-text-3xl
			tw-font-semibold
			tw-text-center
			tw-mb-6
			tw-font-ProximaNova
		">
		Gallary
	</h3>

	<div class="tw-mb-4">
		<Search />
	</div>

	<List cardList={cards} />
</div>