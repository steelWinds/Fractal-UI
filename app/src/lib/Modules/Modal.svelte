<script lang="ts">
	import { slide } from 'svelte/transition';
	import { cubicOut } from 'svelte/easing';
	import { modalStore } from '@/stores/modal-store';
	import { clickOutside } from '@/actions/clickOutside';
	import Button from '$lib/UI/Button.svelte';

	export { elementClass as class };
	export let modalId: string;
	export let title: string;

	let elementClass: string = '';

	modalStore.addModalId(modalId);
</script>

{#if $modalStore.get(modalId)}
	<article
		use:clickOutside={() => modalStore.closeModal(modalId)}
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
			tw-max-w-sm
			tw-overflow-hidden
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
				<h4
					class="
						tw-font-ProximaNova
						tw-font-semibold
						tw-text-3xl
						tw-mb-4
					"
				>
					{ title }
				</h4>

				<slot />
			</div>
		</div>
	</article>
{/if}