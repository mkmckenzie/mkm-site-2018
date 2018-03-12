import React from 'react'
import Skill from './Skill'
import COLOR_ARRAY from '../utils/constants'


class Skills extends React.Component {

	_getSkills() {
		const content = this.props.content
		return content.map((skill) => {
			return (
				<Skill
					skillName={skill.skillName}
					skillDescription={skill.skillDescription}
					flex={skill.flex}
					key={skill.key}
				/>
			);
		});
	};

	render(){
		const skillSet = this._getSkills();
		const skillStyle = {
			display: 'flex',
			flexWrap: 'wrap',
			justifyContent: 'space-around',
			marginLeft: '-10px',
			marginRight: '-10px',
		}

		return(
			<div>
				<h2>{this.props.title}</h2>
				<div style={skillStyle}>{skillSet}</div>
			</div>
			)
	}

}

export default Skills
