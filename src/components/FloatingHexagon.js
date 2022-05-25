import React, { useLayoutEffect, useState } from 'react';
import Hexagon from './hexagon';
import COLOR_ARRAY from '../utils/constants';
import PropTypes from 'prop-types';

function FloatingHexagon({ uniqId }) {
	const [visibility, setVisibility] = useState('hidden');

	const idName = 'animatedHex' + uniqId;
	const animationName = 'float-animatedHex' + uniqId;

	useLayoutEffect(() => {
		const styleSheet = document.styleSheets[0];
		const keyframes = `@keyframes ${animationName} { 
			0% {
				bottom: -1000px;
				right: ${getRandomInt(-500,500)}px;
			}
			100% {
				bottom: ${getRandomInt(500,700)}px;
				right: 0px;
			} 
		}`;
		styleSheet.insertRule(keyframes, styleSheet.cssRules.length);
		setVisibility('');
	});

	const getRandomInt = (min,max) => {
		return parseFloat(Math.floor(Math.random() * Math.floor(max)) + min);
	};


	const getRandomColor = () => {
		const colors = Object.values(COLOR_ARRAY);
		return colors[getRandomInt(0, colors.length)];
	};

	const randomNumber = getRandomInt(10,50)/100;
	const randomColor = getRandomColor();
	const animationStyle = ['linear','ease-in', 'ease-out'][getRandomInt(0,2)];
	const animation = {
		position: 'relative',
		margin: getRandomInt(-80,80) + 'px',
		opacity: getRandomInt(30,60)/100,
		animationName: animationName,
		animationDuration: getRandomInt(4,20) + 's',
		animationTimingunction: animationStyle,
		animationDelay: '0',
		animationIterationCount: 'infinite',
		animationPlayState: 'running',
	};


	return(
		<div className={`animatedHex ${visibility}`} style={animation} id={idName} aria-hidden="true">
			<Hexagon
				sizeMultiplier={randomNumber}
				backgroundColor={randomColor}
				image=''
			/>
		</div>
	);
}

FloatingHexagon.propTypes = {
	uniqId: PropTypes.number,
};

export default FloatingHexagon;