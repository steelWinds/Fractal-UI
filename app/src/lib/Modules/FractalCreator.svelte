<script lang="ts">
import { onMount } from 'svelte';

export let canvasYSize: number = 300;
export let xSizeDiff: number = 0;

let canvas: HTMLCanvasElement;
let windowSize: number;

onMount(() => {
	const ctx = canvas.getContext('2d');

	ctx?.beginPath();       // Начинает новый путь
	ctx?.moveTo(30, 50);    // Передвигает перо в точку (30, 50)
	ctx?.lineTo(150, 100);  // Рисует линию до точки (150, 100)
	ctx?.stroke();
})
</script>

<svelte:window bind:outerWidth={windowSize} />

<canvas
	class="fractal-creator"
	bind:this={canvas}
	height={canvasYSize}
	width={windowSize - 10 - xSizeDiff}
>
	<strong>
		Your browser is no supported canvas! Try load this page from the another browser.
	</strong>
</canvas>

<style lang="postcss">
.fractal-creator {
	border-radius: 15px;
	border:  3px solid #2E4057;
}
</style>