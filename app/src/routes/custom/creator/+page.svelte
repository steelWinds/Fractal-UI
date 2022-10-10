<script lang="ts">
	import FractalCreator from '$lib/Modules/FractalCreator.svelte';
	import MenuPanel from '$lib/UI/MenuPanel.svelte';
	import LinkItem from '$lib/UI/LinkItem.svelte';
  import Button from '$lib/UI/Button.svelte';
	import Input from '$lib/UI/Input.svelte';
	import Modal from '@/lib/Modules/Modal.svelte';
	import { MultiSelect } from "carbon-components-svelte";
	import SettingsPanel from '$lib/Partials/Other/SettingsPanel.svelte';
	import { modalStore } from '@/stores/modal-store';

	let fileName: string = '';
	let items: { id: number; text: string }[] = [
		{ id: 0, text: 'Slack' },
    { id: 1, text: 'Email' },
    { id: 2, text: 'Fax' },
	];
</script>

<div class="tw-flex tw-justify-center tw-pt-3">
	<FractalCreator xSizeDiff={30} canvasYSize={580} />
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
		on:click={() => modalStore.openModal('fractal-settings-modal')}
	>
		<img src="/assets/icons/Filter.svg" alt="Settings modal button"> 
	</Button>
	
	<Button class="link-item">
		<img src="/assets/icons/Chart_fill.svg" alt="Stats widget button"> 
	</Button>
	
	<Button
		class="link-item"
		on:click={() => modalStore.openModal('fractal-saving-modal')}
	>
		<img src="/assets/icons/File_dock_add_fill.svg" alt="Save fractal button"> 
	</Button>
</MenuPanel>

<Modal
	class="tw-bottom-3"
	modalId="fractal-settings-modal"
	title="Settings"
>
	<SettingsPanel />
</Modal>

<Modal
	class="tw-bottom-3"
	modalId="fractal-saving-modal"
	title="File save"
>
	<Input	
		type="text"
		class="tw-mb-2"
		placeholder="File name"
		bind:value={fileName}
	/>

	<span class="custom-select">
		<Input slottedInput>
			<svelte:fragment slot="input">
				<MultiSelect
					direction="top"
					label="Tags"
					{items}
				/>
			</svelte:fragment>
		</Input>
	</span>
</Modal>