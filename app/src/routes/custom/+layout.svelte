<script lang="ts">
	import MenuPanel from '$lib/UI/MenuPanel.svelte';
	import LinkItem from '$lib/UI/LinkItem.svelte';
</script>

<main>
	<slot />

	<MenuPanel class="tw-fixed tw-flex tw-space-x-3">
		<LinkItem class="link-item" link="/">
			<img src="/assets/icons/Sign_out_circle.svg" alt="Out link"> 
		</LinkItem>

		<LinkItem class="link-item" link="/creator">
			<img src="/assets/icons/Video_fill.svg" alt="Play button"> 
		</LinkItem>
		
		<LinkItem class="link-item" link="/saved">
			<img src="/assets/icons/Stop_fill.svg" alt="Pause button"> 
		</LinkItem>
		
		<LinkItem class="link-item" link="/settings">
			<img src="/assets/icons/Refresh.svg" alt="Refresh button"> 
		</LinkItem>

		<LinkItem class="link-item" link="/creator">
			<img src="/assets/icons/Filter.svg" alt="Settings modal button"> 
		</LinkItem>
		
		<LinkItem class="link-item" link="/saved">
			<img src="/assets/icons/Chart_fill.svg" alt="Stats widget button"> 
		</LinkItem>
		
		<LinkItem class="link-item" link="/settings">
			<img src="/assets/icons/File_dock_add_fill.svg" alt="Save fractal button"> 
		</LinkItem>
	</MenuPanel>
</main>