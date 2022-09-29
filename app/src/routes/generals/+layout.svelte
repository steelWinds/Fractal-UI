<script lang="ts">
	import MenuPanel from '$lib/UI/MenuPanel.svelte';
	import LinkItem from '$lib/UI/LinkItem.svelte';
</script>

<main>
	<slot />

	<MenuPanel class="tw-fixed tw-flex tw-space-x-3">
		<LinkItem class="link-item" link="/generals/gallary">
			<img src="/assets/icons/Img_box_fill.svg" alt="Gallary-page" />
		</LinkItem>

		<LinkItem class="link-item" link="/custom/creator">
			<img src="/assets/icons/Edit_fill.svg" alt="Edit-page" />
		</LinkItem>
		
		<LinkItem class="link-item" link="/generals/saved">
			<img src="/assets/icons/Folder_file_fill.svg" alt="Saved-page" />
		</LinkItem>
		
		<LinkItem class="link-item" link="/generals/settings">
			<img src="/assets/icons/Setting_alt_fill.svg" alt="Settings-page" />
		</LinkItem>
	</MenuPanel>
</main>