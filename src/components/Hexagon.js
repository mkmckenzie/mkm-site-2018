import React from 'react';

class Hexagon extends React.Component {
	render(){
		const hexStyle = {
			fill: this.props.backgroundColor,
			height: 300 * this.props.sizeMultiplier,
			transform: 'scale('+ this.props.sizeMultiplier +')',
		}

		const svgStyle = {
			height: 300 * this.props.sizeMultiplier + 'px',
			width: 300 * this.props.sizeMultiplier + 'px',
		}

		const wholeHexagonStyle = {
		}

		return(
			<div className='wholeHexagon' style={wholeHexagonStyle}>
				<svg style={svgStyle} xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink">
  				<polygon className="hexagon" style={hexStyle} points="300,150 225,280 75,280 0,150 75,20 225,20"></polygon>
				</svg>
			</div>
		)
	}
}

export default Hexagon;