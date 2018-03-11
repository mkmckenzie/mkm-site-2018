import React from 'react'
import Link from 'gatsby-link'
import Hexagon from './hexagon'
import COLOR_ARRAY from '../utils/constants'

class SocialLinks extends React.Component {

	constructor() {
		super()
		this.state = { colorArray: Object.values(COLOR_ARRAY) }
	};

	_getAllLinks() {
		const links = [
			// {
			// 	title: '',
			// 	href: '',
			// 	description: '',
			// },
			{
				title: 'Blog',
				href: 'https://emkaydeum.wordpress.com/',
				description: 'A collection of my thoughts, tutorials, and walk-throughs.',
				color: this.state.colorArray[0],
				key: 1,
			},
			{
				title: 'Twitter',
				href: 'https://twitter.com/MaryKMcKenzie',
				description: 'I tweet things regularly, with wild (albiet polite) abandon.',
				color: this.state.colorArray[1],
				key: 2, 
			},
			{
				title: 'GitHub',
				href: 'https://github.com/mkmckenzie',
				description: 'Because I am a developer and this is a developer thing.',
				color: this.state.colorArray[2],
				key: 3,
			},
			{
				title: 'LinkedIn',
				href: 'https://www.linkedin.com/in/marykatherinemckenzie/',
				description: 'In case you want the FULL history.',
				color: this.state.colorArray[3],
				key: 4, 
			},
			{
				title: 'Email',
				href: 'mailto:marykatherinemckenzie@gmail.com',
				description: 'send me some mail!',
				color: this.state.colorArray[4],
				key: 5,

			}
		];

		return links.map((link) => {
			const titleStyle = {
				padding: '10px',
				background: `linear-gradient(217deg, ${COLOR_ARRAY.middle}, ${COLOR_ARRAY.darker})`,

				}

			const linkStyle = {
				color: 'white',
				backgroundColor: 'black',
			}
			return (
				<div className='social-link' key={link.key}>
					<a href={link.href} style={linkStyle}><h4 style={titleStyle}>{link.title}</h4></a>
				</div>
			);
		});
	}

	render() {
		const hoverLink = `.social-link h4:hover {
			boxShadow: '10px black',
		}`
		const styleSheet = document.styleSheets[0]
		styleSheet.insertRule(hoverLink, styleSheet.cssRules.length);
		const socialLinks = this._getAllLinks();
		const socialLinksStyle = {
			display: 'flex',
			flexWrap: 'wrap',
			justifyContent: 'space-around'

		}
		return(
			<div>
				<h2>Contact Me</h2>
				<div style={socialLinksStyle}>{socialLinks}</div>
			</div>
			)
	}
}

export default SocialLinks