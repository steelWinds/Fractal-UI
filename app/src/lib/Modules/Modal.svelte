<script lang="ts">
	import { slide } from 'svelte/transition';
	import { cubicOut } from 'svelte/easing';
	import { modalStore } from '@/stores/modal-store';
	import Button from '$lib/UI/Button.svelte';

	let elementClass: string = '';

	export { elementClass as class };
	export let modalId: string;

	modalStore.addModalId(modalId);
</script>

{#if $modalStore.get(modalId)}
	<article
		transition:slide={{ duration: 250, easing: cubicOut }}
		class={`
			tw-fixed
			tw-rounded-xl
			default-shadow
			tw-left-1/2
			tw--translate-x-1/2
			tw-z-50
			tw-w-5/6
			tw-bg-white
			${elementClass}
		`}
	>
		<div
			class="
				tw-relative
				tw-px-3.5 tw-py-4
				tw-flex
				tw-flex-col
			"
		>
			<Button class="tw-self-end" on:click={() => modalStore.closeModal(modalId)}>
				<img class="tw-w-[28px] tw-h-[28px]" src="/assets/icons/Cross.svg" alt="Cross icon" />
			</Button>

			<div>
				<slot />
			</div>
		</div>
	</article>
{/if}