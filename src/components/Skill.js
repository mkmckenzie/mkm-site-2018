import React from 'react';
import COLOR_ARRAY from '../utils/constants';


class Skill extends React.Component {
	render() {
		const cardStyle = {
			margin: '10px',
			flex: this.props.flex,
			padding: '10px',
			background: `linear-gradient(217deg, ${COLOR_ARRAY.middle}, ${COLOR_ARRAY.darker})`,
		};

		const innerCardStyle = {
			background: 'white',
			padding: '10px',
			height: '100%',
		};

		const titleStyle = {
			textTransform: 'uppercase',
			textAlign: 'center',
			margin: '14px',
		};

		return(
			<div style={cardStyle}>
				<div style={innerCardStyle}>
					<h4 style={titleStyle}>{this.props.skillName}</h4>
					<div style={{ fontSize: '14px', }}>{this.props.skillDescription}</div>
				</div>
			</div>
		);
	}
}

export default Skill;