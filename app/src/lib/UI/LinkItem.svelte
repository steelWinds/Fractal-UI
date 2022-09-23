<script lang="ts">
	import { page } from '$app/stores'

	let elementClass: string = "";

	export let link: string = "";
	export { elementClass as class };
	export let activeClass: string = "active";

	$: linkIsActive = $page.url.pathname === link;
</script>

<a class={`${elementClass} ${linkIsActive ? activeClass : ''}`} href={link}>
	<slot />
</a>
