import React from 'react';
import Hexagon from './hexagon'
import COLOR_ARRAY from '../utils/constants'

class FloatingHexagon extends React.Component {

	constructor(props) {
		super(props)
		this.state = { 
			idName: 'animatedHex' + props.uniqId, 
			animationName: 'float-animatedHex' + props.uniqId,
			visibility: 'hidden', }
	}

	componentDidMount() {
		const styleSheet = document.styleSheets[0]
		const keyframes = `@keyframes ${this.state.animationName} { 
			0% {
				bottom: -1000px;
				right: ${this._getRandomInt(-500,500)}px;

			}
			100% {
				bottom: ${this._getRandomInt(500,700)}px;
				right: 0px;
			} 
		}`;
		styleSheet.insertRule(keyframes, styleSheet.cssRules.length)
		this.setState({ visibility: '' })
	}

	_getRandomInt(min, max) {
  	return parseFloat(Math.floor(Math.random() * Math.floor(max)) + min);
	};

	_getRandomColor() {
		const colors = Object.values(COLOR_ARRAY);
		return colors[this._getRandomInt(0, colors.length)];
	};

	render(){
		const randomNumber = this._getRandomInt(10,50)/100
		const randomColor = this._getRandomColor()
		const animationStyle = ['linear','ease-in', 'ease-out'][this._getRandomInt(0,2)]
		const animation = {
			position: 'relative',
			margin: this._getRandomInt(-80,80) + 'px',
			opacity: this._getRandomInt(30,60)/100,
			animationName: this.state.animationName,
			animationDuration: this._getRandomInt(4,20) + 's',
		  animationTimingunction: animationStyle,
		  animationDelay: '0',
		  animationIterationCount: 'infinite',
		  animationPlayState: 'running',
		}


		return(
			<div className={`animatedHex ${this.state.visibility}`} style={animation} id={this.state.idName}>
				<Hexagon
					sizeMultiplier={randomNumber}
					backgroundColor={randomColor}
					image=''
					/>
			</div>
			)
		}
	}



export default FloatingHexagon;