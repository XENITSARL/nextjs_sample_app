module.exports = {
	content: ['./src/components/**/*.{ts,tsx,js,jsx}', './src/pages/**/*.{ts,tsx,js,jsx}', "./node_modules/flowbite/**/*.js"],
	theme: {
		extend: {
			colors: {
				primary: '#13152c',
				secondary: '#9fcbbc',
				'dark':"#000000"
			},
			fontFamily: {
				'poppins': ['Poppins', 'sans-serif'],
				'roboto': ['Roboto Mono', 'sans-serif'],
				'urbanist': ['Urbanist', 'sans-serif'],
				'indiflower': ['Indie Flower', 'cursive'],
				'jamjuree': ['Bai Jamjuree', 'sans-serif']
			},
		},
	},
	variants: {},
	plugins: [
		require('@tailwindcss/forms'),
		require('@tailwindcss/aspect-ratio'),
		require('flowbite/plugin')
	],
};
