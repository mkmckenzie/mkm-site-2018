import React from 'react'
import Link from 'gatsby-link'
import Hexagon from './hexagon'
import COLOR_ARRAY from '../utils/constants'
import LinksContent from '../content/links'

class SocialLinks extends React.Component {

	constructor() {
		super()
		this.state = { colorArray: Object.values(COLOR_ARRAY) }
	};

	_getAllLinks() {
		const links = LinksContent
		return links.map((link) => {
			const titleStyle = {
				marginBottom: '0',
				color: 'white',
				}

			const linkStyle = {
				textDecoration: 'none', 
			}

			const containerStyle = {
				textAlign: 'center',
				backgroundColor: this.state.colorArray[link.order - 1],
				padding: '10px',
				margin: '10px',
				order: link.order,
			}

			const subtitleStyle = {
				margin: '0',
				fontSize: '14px',
				color: 'white',
			}


			return (
				<div className='social-link' key={link.key} style={containerStyle}>
					<a href={link.href} style={linkStyle} title={link.description}><h4 style={titleStyle}>{link.title}</h4></a>
					<p style={subtitleStyle}><em>{link.subtitle}</em></p>
				</div>
			);
		});
	}

	render() {
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