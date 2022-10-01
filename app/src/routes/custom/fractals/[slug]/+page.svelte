<script lang="ts">
	import type { IFractalItemData } from 'types/Pages/IFractalItemData';
	import MenuPanel from '$lib/UI/MenuPanel.svelte';
	import LinkItem from '$lib/UI/LinkItem.svelte';
  import Button from '$lib/UI/Button.svelte';

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

	<Button class="link-item">
		<img src="/assets/icons/Chemistry.svg" alt="Animate settings"> 
	</Button>
	
	<Button class="link-item">
		<img src="/assets/icons/Chart_fill.svg" alt="Stats widget button"> 
	</Button>
</MenuPanel>