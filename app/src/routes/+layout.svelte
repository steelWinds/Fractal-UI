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

<main
	class="
		main
		tw-flex
		tw-flex-col
		tw-justify-between
	"
>
	<slot />
</main>

<style lang="postcss">
.main {
	block-size: calc(100vh - 64px);
}
</style>