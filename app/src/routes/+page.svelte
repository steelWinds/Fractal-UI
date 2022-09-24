<script lang="ts">
	import List from '$lib/Collections/Fractal/List.svelte'

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

<List cardList={cards} />
