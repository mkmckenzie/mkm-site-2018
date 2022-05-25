import React from 'react';
import Skill from './Skill';
import PropTypes from 'prop-types';

function Skills({ content, title }) {
	const skillSet = () => (
		content.map(skill => {
			return (
				<Skill
					skillName={skill.skillName}
					skillDescription={skill.skillDescription}
					flex={skill.flex}
					key={skill.key}
				/>
			);
		})
	);

	const skillStyle = {
		display: 'flex',
		flexWrap: 'wrap',
		justifyContent: 'space-around',
		marginLeft: '-10px',
		marginRight: '-10px',
	};

	return(
		<div>
			<h2>{title}</h2>
			<div style={skillStyle}>{skillSet()}</div>
		</div>
	);
}

Skills.propTypes = {
	content: PropTypes.array,
	title: PropTypes.string,
};


export default Skills;
