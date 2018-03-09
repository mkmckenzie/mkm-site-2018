import React from 'react';
import Skill from './Skill'
import COLOR_ARRAY from '../utils/constants'


class Skills extends React.Component {
	_getSkills() {
		const skillGroup = [
			{
				skillName: 'Rails',
				skillDescription:
				<ul>
					<li>My first love</li>
					<li>Attended <a href="http://railsconf.org/">RailsConf</a> 2017</li>
					<li>Learned primarily through self-directed online tutorials & mentorship</li>
				</ul>,
				flex: '1',
			},
			{
				skillName: 'Ruby',
				skillDescription: 
				<ul>
					<li>Introduced to Ruby via <a href="https://skillcrush.com/">Skillcrush</a> in 2015</li>
					<li>Co-hosted an international <a href="https://www.youtube.com/watch?v=3klKWmwpn4U&list=PLtNihcG6aHOzjk9SEW6s6oxpxFvgSUfGB">remote book club</a> for Sandi Metz's Practical Object Oriented Design in Ruby</li>
					<li>Attended <a href="http://rubyconf.org/">RubyConf</a> 2015 as an <a href="http://rubyconf.org/scholarships">Opportunity Scholar</a></li>
					<li>Attended <a href="http://rubyforgood.org/">Ruby for Good</a> 2016 & 2017</li>
				</ul>,
				flex: '1',
			},
			{
				skillName:'React',
				skillDescription: 
				<ul>
					<li>My current fancy</li>
					<li>Used on some features at WeddingWire</li>
					<li>First introduced to at <a href="http://rubyforgood.org/">Ruby for Good</a> 2017</li>
					<li>This site is built with <a href="https://www.gatsbyjs.org/">Gatsby</a>, a static site generator for React</li>
				</ul>,
				flex: '1',
			},
			{
				skillName:'Other Skills',
				skillDescription: <div style={{ textAlign: 'center' }}> HTML5/CSS3, Coffeescript, Sass, Elasticsearch, MySQL, Adobe Illustrator, Generally Being a Good Person </div>,
				flex: '100%',
			},
		];

		return skillGroup.map((skill) => {
			return (
				<Skill
					skillName={skill.skillName}
					skillDescription={skill.skillDescription}
					flex={skill.flex}
				/>
			);
		});
	};

	render(){
		const skillSet = this._getSkills();
		const skillStyle = {
			display: 'flex',
			flexWrap: 'wrap',
			justifyContent: 'space-between',
			marginLeft: '-10px',
			marginRight: '-10px',
		}

		const titleStyle = {
			margin: '0',
			background: `linear-gradient(217deg, ${COLOR_ARRAY.middle}, ${COLOR_ARRAY.darker})`,
			color: 'white',
			textAlign: 'right',
			paddingRight: '50px',
			marginBottom: '10px',
		}
		return(
			<div>
				<h2 style={titleStyle}>Skills</h2>
				<div style={skillStyle}>{skillSet}</div>
			</div>
			)
	}

}

export default Skills
