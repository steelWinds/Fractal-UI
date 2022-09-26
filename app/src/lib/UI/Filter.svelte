<script context="module" lang="ts">
	let currentFilterType: string = '';

	const setCurrentFilterType = (type: string) => {
		if (type !== currentFilterType) {
			currentFilterType = type;
		}
	}
</script>

<script lang="ts">
	import Button from '$lib/UI/Button.svelte'

	export let type: string = '';
	export let activeClass: string = '';
	export let state: string = '';

	const trueState = `up_${type}`
	const falseState = `down_${type}`

	const switchState = () => {
		state = state === trueState ? falseState : trueState;
	}
</script>

<Button
	on:click={() => {
			setCurrentFilterType(type)
			switchState()
		}
	}
	class={`
		tw-flex
		tw-flex-cols
		tw-items-center
		${type === currentFilterType ? activeClass : ''}
	`}
>
	<slot />

	<svg width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path
			d="M9 3l-.707-.707L9 1.586l.707.707L9 3zm1 11.25a1 1 0 11-2 0h2zM3.793 6.793l4.5-4.5 1.414 1.414-4.5 4.5-1.414-1.414zm5.914-4.5l4.5 4.5-1.414 1.414-4.5-4.5 1.414-1.414zM10 3v11.25H8V3h2z"
			fill="#2E4057" />
	</svg>
</Button>
