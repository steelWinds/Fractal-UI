<script lang="ts">
	import '../app.css';
	import Header from '$lib/Base/Header.svelte';
	import MenuPanel from '$lib/UI/MenuPanel.svelte';
	import LinkItem from '$lib/UI/LinkItem.svelte';
</script>

<Header />

<main>
	<slot />

	<MenuPanel class="tw-fixed tw-flex tw-space-x-3">
		<LinkItem class="link-item" link="/">
			<img src="src/assets/icons/Img_box_fill.svg" alt="Gallary-page" />
		</LinkItem>

		<LinkItem class="link-item" link="/edit">
			<img src="src/assets/icons/Edit_fill.svg" alt="Edit-page" />
		</LinkItem>
		
		<LinkItem class="link-item" link="/saved">
			<img src="src/assets/icons/Folder_file_fill.svg" alt="Saved-page" />
		</LinkItem>
		
		<LinkItem class="link-item" link="/settings">
			<img src="src/assets/icons/Setting_alt_fill.svg" alt="Settings-page" />
		</LinkItem>
	</MenuPanel>
</main>

<style lang="postcss">
:global(.link-item) {
	position: relative;

	display: block;
	inline-size: 36px;
	aspect-ratio: 1 / 1;

	user-select: none !important;
	text-decoration: none !important;

	& > img {
		object-fit: contain;
	}

	&:after {
		content: "";

		position: absolute;
		top: -5px;
		left: 50%;

		display: block;
		inline-size: 50%;
		block-size: 3px;
		border-radius: 10rem;

		background-color: #3AB795;

		transform: translateX(-50%) scale(0);
		transition: all .25s ease;
  }
}

:global(.link-item.active) {
	&:after {
		transform: translateX(-50%) scale(1);
	}
}
</style>