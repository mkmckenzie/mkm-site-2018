import Typography from "typography";
import COLOR_ARRAY from '../utils/constants';


const typography = new Typography({ 
	baseFontSize: '18px',
	googleFonts: [
		{
			name: 'Lato',
			styles: [
				'300',
				'700',
				'700i',
			],
		},
		{
			name: 'Montserrat',
			styles: [
				'700',
				'900',
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
			fontSize: '3rem',
			letterSpacing: '.2rem',
			fontWeight: '900',
		},
		h2: {
			textTransform: 'uppercase',
			marginTop: '0',
			background: `linear-gradient(217deg, ${COLOR_ARRAY.middle}, ${COLOR_ARRAY.darker})`,
			color: 'white',
			textAlign: 'left',
			paddingLeft: '30px',
			marginBottom: '30px',
		},
		h4: {
			marginBottom: '10px',
		},
		'.nav-style a': {
			color: 'white',
			textDecoration: 'none',
			paddingLeft: '10px',
			paddingRight: '10px',
			textTransform: 'uppercase', 
			fontSize: '14px',
		},
		'.nav-style a:hover': {
			color: COLOR_ARRAY.lighter,
		},
		'.resume-button': {
			textAlign: 'center',
			marginTop: '20px',
		},
		'.resume-button a': {
			border: '6px solid ' + COLOR_ARRAY.darkest,
			padding: '20px',
		},
		'.hidden': {
			visibility: 'hidden',
		},
	}),
 });

export default typography;