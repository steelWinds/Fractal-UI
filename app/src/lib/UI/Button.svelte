<script lang="ts">
let elementClass: string = '';

export { elementClass as class };
</script>

<button
	class={`tw-select-none ${elementClass}`}
	on:click
>
	<slot />
</button>