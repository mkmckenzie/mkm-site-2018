import React from 'react';
import Hexagon from './hexagon';
import COLOR_ARRAY from '../utils/constants';
import mk from '../img/mkm-granada-2017.jpg';


class Header extends React.Component {

	render() {
		const MainDarkColor = COLOR_ARRAY.darkest;
		const middleColor = COLOR_ARRAY.middle;
		const outerContainerStyle = { 
			padding: '50px',
			display: 'flex',
			flexWrap: 'wrap', 
			justifyContent: 'center',
		};

		const titleBackgroundStyle = {
			margin: '0',
			color: 'rgba(255,255,255,0.8)',
			padding: '10px',
			textTransform: 'uppercase',
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
			textAlign: 'center',
			width: '100%',
			position: 'relative',
			bottom: '200px',
			WebkitTextStroke: '1px ' + middleColor,
			textStroke: '1px ' + middleColor,
		};

		return (
			<div style={{maxHeight: '500px'}}>
				<div style={outerContainerStyle} aria-hidden="true">
					<div>
						<Hexagon
							sizeMultiplier='1'
							backgroundColor={MainDarkColor}
							image={mk}
						/>
					</div>
				</div>
				<div style={titleBackgroundStyle}>
					<h1 title="aka Mary Katherine McKenzie">MK McKenzie</h1>
				</div>
			</div>
		);
	}
}

export default Header;
