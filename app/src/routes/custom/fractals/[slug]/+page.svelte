<script lang="ts">
	import type { IFractalItemData } from 'types/Pages/IFractalItemData';
	import MenuPanel from '$lib/UI/MenuPanel.svelte';
	import LinkItem from '$lib/UI/LinkItem.svelte';
  import Button from '$lib/UI/Button.svelte';
	import Input from '$lib/UI/Input.svelte';
	import Modal from '$lib/Modules/Modal.svelte';
	import { NumberInput } from 'carbon-components-svelte';
	import { modalStore } from '@/stores/modal-store';

	export let data: IFractalItemData; 
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
		{ data.title }
	</h3>
</div>

<MenuPanel class="tw-fixed tw-flex tw-space-x-3">
	<LinkItem class="link-item" link="/">
		<img src="/assets/icons/Sign_out_circle.svg" alt="Out link"> 
	</LinkItem>

	<Button class="link-item">
		<img src="/assets/icons/Video_fill.svg" alt="Play button"> 
	</Button>
	
	<Button class="link-item">
		<img src="/assets/icons/Stop_fill.svg" alt="Pause button"> 
	</Button>
	
	<Button class="link-item">
		<img src="/assets/icons/Refresh.svg" alt="Refresh button"> 
	</Button>

	<Button
		class="link-item"
		on:click={() => modalStore.openModal('fractal-animation-modal')}
	>
		<img src="/assets/icons/Chemistry.svg" alt="Animate settings"> 
	</Button>
	
	<Button class="link-item">
		<img src="/assets/icons/Chart_fill.svg" alt="Stats widget button"> 
	</Button>
</MenuPanel>

<Modal
	class="tw-bottom-3"
	modalId="fractal-animation-modal"
	title="Settings"
>
	<h5
		class="
			tw-font-ProximaNova
			tw-font-semibold
			tw-text-2xl
			tw-mb-2
		"
	>
		Animation
	</h5>

	<Input	
		type="text"
		class="tw-mb-2"
		slottedInput
	>
		<svelte:fragment slot="input">
			<span class="custom-number-input">
				<NumberInput />
			</span>
		</svelte:fragment>
	</Input>
</Modal>