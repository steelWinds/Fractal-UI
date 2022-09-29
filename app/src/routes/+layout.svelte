<script lang="ts">
	import '../app.css';
	import Header from '$lib/Base/Header.svelte';
	import MenuPanel from '$lib/UI/MenuPanel.svelte';
	import LinkItem from '$lib/UI/LinkItem.svelte';
</script>

<svelte:head>
	<title>
		Fractal UI
	</title>
</svelte:head>

<Header />

<slot />