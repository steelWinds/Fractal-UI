module.exports = {
	prefix: 'tw-',
	content: [
		'./src/**/*.{html,js,svelte,ts}'
	],
	theme: {
		fontFamily: {
			'ProximaNova': ['Proxima Nova']
		},

		extend: {
			colors: {
				blue: '#2E4057',
				gold: '#DEB841',
				white: '#FFFFFF',
				azure: '#3AB795',
			}
		},
	},
	plugins: [],
}
