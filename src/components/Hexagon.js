import React from 'react';

class Hexagon extends React.Component {
	render(){
		const hexStyle = {
			fill: this.props.backgroundColor,
			height: 300 * this.props.sizeMultiplier,
			transform: 'scale('+ this.props.sizeMultiplier +')',
		};

		const svgStyle = {
			height: 300 * this.props.sizeMultiplier + 'px',
			width: 300 * this.props.sizeMultiplier + 'px',
		};

		const clipSvgStyle = {
			width: '0',
			height: '0',
		};
    
		const imgStyle = {
			maxWidth: 300 * this.props.sizeMultiplier,
			height: 'auto',
			WebkitClipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
			clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
			WebkitClipPath: 'url("#polygon-clip-hexagon")',
			clipPath: 'url("#polygon-clip-hexagon")',
		};

		const renderHexWithImg = 
		<div className='wholeHexagon'>
			<svg className="clip-svg" style={clipSvgStyle} xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink">
				<defs>
					<clipPath id="polygon-clip-hexagon" clipPathUnits="objectBoundingBox">
						<polygon className="hexagon" style={hexStyle}  points="0.5 0, 1 0.25, 1 0.75, 0.5 1, 0 0.75, 0 0.25"></polygon>
					</clipPath>
				</defs>
			</svg>
			<div className="polygon-each-img-wrap">
				<img src={this.props.image} alt="Mary Katherine in Granada with the sun setting in the background and a glass of rose on the table." className="polygon-clip-hexagon" style={imgStyle} />
			</div>
		</div>;

		const renderHexWithBackground = 
		<div className='wholeHexagon'>
			<svg style={svgStyle} xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink">
				<polygon className="hexagon" style={hexStyle} points="300,150 225,280 75,280 0,150 75,20 225,20"></polygon>
			</svg>
		</div>;

		if(this.props.image.length > 1) {
			return(renderHexWithImg);
		} else {
			return(renderHexWithBackground);
		}
	}
}

export default Hexagon;