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
			screens: {
				'ultra-mobile': '320px',
				'mobile': '360px',
				'tablet': '640px',
				'small-laptop': '920px',
				'laptop': '1024px',
				'desktop': '1280px',
			},

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
