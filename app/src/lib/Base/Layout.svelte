<script lang="ts">
	import '../app.css';
	import Header from '$lib/Base/Header.svelte';
</script>

<svelte:head>
	<title>
		Fractal UI
	</title>
</svelte:head>

<Header />

<main>
	<slot />
</main>

<slot name="other-panels" />