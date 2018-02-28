import React from 'react';
import Hexagon from './hexagon'

class FloatingHexagon extends React.Component {

	_getRandomInt(max) {
  	return Math.floor(Math.random() * Math.floor(max));
	};

	_getRandomColor() {
		const colors = ['#6B322E','#FFDAC6','#636357', '#8E8B79', '#F4EAD4'];
		return colors[this._getRandomInt(colors.length)];
	};

	//  to view palette: https://coolors.co/6b322e-ffdac6-636357-8e8b79-f4ead4

	render(){
		const randomNumber = this._getRandomInt(70)/100;
		const randomColor = this._getRandomColor();
		const animation = {
			position: 'relative',
  		margin: '-' + this._getRandomInt(80) + 'px',
  		opacity: this._getRandomInt(100)/100,
  		animationName: 'float',
  		animationDuration: this._getRandomInt(5) + 's',
		  animationTimingunction: 'ease-out',
		  animationDelay: '0',
		  animationDirection: 'alternate',
		  animationIterationCount: 'infinite',
		  animationPlayState: 'running',
		}

		return(
			<div className='animatedHex' style={animation}>
				<Hexagon
					sizeMultiplier={randomNumber}
					backgroundColor={randomColor}
					/>
			</div>
			)
		}
	}

export default FloatingHexagon;