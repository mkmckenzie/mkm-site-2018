import React from 'react'
import COLOR_ARRAY from '../utils/constants'

class Nav extends React.Component {
	render() {

		const navStyle = {
			position: 'sticky',
			top: '0',
			background: COLOR_ARRAY.darkest,
			color: 'white',
			padding: '10px',
			display: 'flex',
			justifyContent: 'space-around',
			flexWrap: 'wrap',
		}

		return(
			<div className='nav-style' style={navStyle}>
				<a href="#summary">Summary</a>
				<a href="#skills">Skills</a>
				<a href="#work-history">Work History</a>
				<a href="#community-leadership">Community Leadership</a>
				<a href="#education">Education</a>
				<a href="#media-mentions">Media Mentions</a>
				<a href="#projects-presentations">Projects & Presentations</a>
				<a href="#contact">Contact</a>
			</div>
			)
	}
}

export default Nav