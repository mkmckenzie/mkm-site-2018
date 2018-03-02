import Typography from "typography";

const typography = new Typography({ 
	baseFontSize: '18px',
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
	scaleRatio: 2,
	overrideStyles: () => ({
		body: {
			backgroundImage: 'linear-gradient(#fff, #F4EAD4)'
		},
		h1: {
			textTransform: 'uppercase',
			margin: '0',
			fontSize: '2rem',
			letterSpacing: '.2rem',
		},
	}),
 });

export default typography;