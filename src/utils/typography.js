import Typography from "typography";

const typography = new Typography({ 
	baseFontSize: '14px',
	googleFonts: [
		{
			name: 'Lato',
			styles: [
				'300',
				'700i',
			],
		},
		{
			name: 'Source Serif Pro',
			styles: [
				'700',
			],
		},
	],
	headerFontFamily: ['Source Serif Pro', 'serif'],
	bodyFontFamily: ['Lato', 'sans-serif'],
	headerWeight: 700,
	bodyWeight: 300,
	boldWeight: 700,
	includeNormalize: true,
	scaleRatio: 1.375,
	overrideStyle: () => ({
		h1: {
			textTransform: 'uppercase',
		}
	})
 });

export default typography;