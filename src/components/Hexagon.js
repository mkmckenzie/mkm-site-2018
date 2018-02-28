import React from 'react';

class Hexagon extends React.Component {
	render(){
		const baseStyle = {
			background: this.props.backgroundColor,
			position: 'relative',
			width: (300 * this.props.sizeMultiplier) + `px`,
			height: (173.21 * this.props.sizeMultiplier) + `px`,
			margin: (86.60 * this.props.sizeMultiplier) + `px 0`,
		}

		const beforeStyle = {
			content: "",
			position: 'absolute',
			width: '0',
			borderLeft: (150 * this.props.sizeMultiplier) +'px solid transparent',
			borderRight: (150 * this.props.sizeMultiplier) +'px solid transparent',
			bottom: '100%',
			borderBottom: (86.60 * this.props.sizeMultiplier) + 'px solid ' + this.props.backgroundColor,
		}

		const afterStyle = {
			content: "",
  		position: 'absolute',
  		top: '100%',
  		width: '0',
  		borderLeft: (150 * this.props.sizeMultiplier) +'px solid transparent',
  		borderRight: (150 * this.props.sizeMultiplier) +'px solid transparent',
  		borderTop: (86.60 * this.props.sizeMultiplier) + `px solid ` + this.props.backgroundColor,
		}

		return(
			<div className='wholeHexagon' style={baseStyle}>
				<div className='hexagonBefore' style={beforeStyle}></div>
				<div className='hexagon' style={baseStyle}></div>
				<div className='hexagonAfter'style={afterStyle}></div>
			</div>
		)
	}
}

export default Hexagon;