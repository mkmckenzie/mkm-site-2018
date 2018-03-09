import Typography from "typography";
import COLOR_ARRAY from '../utils/constants';


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
			name: 'Montserrat',
			styles: [
				'700',
			],
		},
	],
	headerFontFamily: ['Montserrat', 'serif'],
	bodyFontFamily: ['Lato', 'sans-serif'],
	headerWeight: 700,
	bodyWeight: 300,
	boldWeight: 700,
	includeNormalize: true,
	scaleRatio: 1.5,
	overrideStyles: () => ({
		h1: {
			textTransform: 'uppercase',
			margin: '0',
			fontSize: '2rem',
			letterSpacing: '.2rem',
		},
		h2: {
			textTransform: 'uppercase',
			marginTop: '0',
			background: `linear-gradient(217deg, ${COLOR_ARRAY.middle}, ${COLOR_ARRAY.darker})`,
			color: 'white',
			textAlign: 'right',
			paddingRight: '50px',
			marginBottom: '30px',
		},
		h4: {
			marginBottom: '10px',
		}
	}),
 });

export default typography;