import React from 'react';
import Skill from './Skill'

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
				</ul>
			},
			{
				skillName: 'Ruby',
				skillDescription: 
				<ul>
					<li>Introduced to Ruby via <a href="https://skillcrush.com/">Skillcrush</a> in 2015</li>
					<li>Co-hosted an international <a href="https://www.youtube.com/watch?v=3klKWmwpn4U&list=PLtNihcG6aHOzjk9SEW6s6oxpxFvgSUfGB">remote book club</a> for Sandi Metz's Practical Object Oriented Design in Ruby</li>
					<li>Attended <a href="http://rubyconf.org/">RubyConf</a> 2015 as an <a href="http://rubyconf.org/scholarships">Opportunity Scholar</a></li>
					<li>Attended <a href="http://rubyforgood.org/">Ruby for Good</a> 2016 & 2017</li>
				</ul>
			},
			{
				skillName:'React',
				skillDescription: 
				<ul>
					<li>My current fancy</li>
					<li>Used on some features at WeddingWire</li>
					<li>First introduced to at <a href="http://rubyforgood.org/">Ruby for Good</a> 2017</li>
					<li>This site is built with <a href="https://www.gatsbyjs.org/">Gatsby</a>, a static site generator for React</li>
				</ul>
			},
		];

		return skillGroup.map((skill) => {
			return (
				<Skill
					skillName={skill.skillName}
					skillDescription={skill.skillDescription}
				/>
			);
		});
	};

	render(){
		const skillSet = this._getSkills();
		return(
			<div>
				<h2>Skills</h2>
				<div>{skillSet}</div>
			</div>
			)
	}

}

export default Skills
