import React from 'react';
import COLOR_ARRAY from '../utils/constants';
import PropTypes from 'prop-types';

function Skill({ flex, skillName, skillDescription }) {
	const cardStyle = {
		margin: '10px',
		flex: flex,
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
				<h4 style={titleStyle}>{skillName}</h4>
				<div style={{ fontSize: '14px', }}>{skillDescription}</div>
			</div>
		</div>
	);
}

Skill.propTypes = {
	flex: PropTypes.string,
	skillName: PropTypes.string,
	skillDescription: PropTypes.string,
};

export default Skill;