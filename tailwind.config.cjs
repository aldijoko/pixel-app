/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			screens: {
				xxs: '380px',
				xs: '480px'
			},
			fontSize: {
				'10px': '10px',
				'14px': '14px',
				'18px': '18px',
				'20px': '20px',
				'22px': '22px',
				'24px': '24px',
				'32px': '32px'
			},
			colors: {
				'blue-primary': '#2B478B',
				'blue-secondary': '#37C5EF',
				'green-primary': '#43D57A',
				'green-secondary': '#ECFBF2',
				'violet-primary': '#8E68C0',
				'orange-primary': '#FFC827',
				'tosca-primary': '#5DCEBD',
				'grey-primary': '#ECEBEB'
			}
		}
	},
	plugins: []
};
