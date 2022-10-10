export const clickOutside = (
	node: Node,
	callback: () => void
) => {
	const handler = (event: Event) => {
		const target = event.target as Node;
		const composed = event.composedPath();

		if (
			!composed.includes(node) &&
			target &&
			!node.isSameNode(target)
		) {
			callback()
		}
	}

	document.addEventListener('click', handler, true);

	return {
		destroy() {
			document.removeEventListener('click', handler, true);
		}
	}
}