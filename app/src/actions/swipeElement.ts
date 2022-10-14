type Axis = 'x' | 'y';
type Direction = Axis extends 'x' ? 'left' | 'right' : 'up' | 'down';
type Coords = {
	x: number,
	y: number,
	directions: {
		[key in 'x' | 'y']: 'left' | 'right' | 'up' | 'down'
	} | null;
};
type Config = {
	axis: Axis,
	direction: Direction,
	minElementDiv: number,
	callback: () => void,
}

export const swipeElement = (
	node: HTMLElement,
	config: Config,
) => {
	const coords: Coords = {
		x: 0,
		y: 0,
		directions: null,
	};

	const {
		x: nodeX,
		y: nodeY,
		height: nodeBlockSize,
	} = node.getBoundingClientRect();

	node.addEventListener('touchstart', (event: TouchEvent) => {
		coords.x = event.touches[0].pageX - nodeX;
		coords.y = event.touches[0].pageY - nodeY;
	})

	node.addEventListener('touchend', (event: TouchEvent) => {
		coords.x -= event.changedTouches[0].pageX - nodeX;
		coords.y -= event.changedTouches[0].pageY - nodeY;

		if (coords.x === 0 && coords.y === 0) return;

		console.log(coords.x, coords.y);

		coords.directions = {
			x: coords.x > 0 ? 'left' : 'right',
			y: coords.y > 0 ? 'up' : 'down'
		};

		if (coords?.directions?.[config.axis] === config.direction) {
			const swipeSize = Math.abs(coords[config.axis]);
			const minSwipeSize = Math.abs(nodeBlockSize / config.minElementDiv);

			console.log(minSwipeSize);

			if (swipeSize > minSwipeSize) {
				config.callback();
			}
		}
	});
}