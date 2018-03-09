import React from 'react'
import Link from 'gatsby-link'
import Hexagon from './hexagon'
import COLOR_ARRAY from '../utils/constants'

class SocialLinks extends React.Component {

	constructor() {
		super()
		this.state = { colorArray: Object.values(COLOR_ARRAY)}
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
				color: this.state.colorArray[0]
			},
			{
				title: 'Twitter',
				href: 'https://twitter.com/MaryKMcKenzie',
				description: 'I tweet things regularly, with wild (albiet polite) abandon.',
				color: this.state.colorArray[1]
			},
			{
				title: 'GitHub',
				href: 'https://github.com/mkmckenzie',
				description: 'Because I am a developer and this is a developer thing.',
				color: this.state.colorArray[2]
			},
			{
				title: 'LinkedIn',
				href: 'https://www.linkedin.com/in/marykatherinemckenzie/',
				description: 'In case you want the FULL history.',
				color: this.state.colorArray[3]
			},
		];

		return links.map((link) => {
			const hexStyle = {
				opacity: '0.6',
				display: 'inline-block',
				overflow: 'hidden',
			}

			const tileStyle = {
				width: '400px',
				padding: '25px',
				marginTop: '10px',
				marginBottom: '10px',
				borderWidth: '10px',
				borderImageSource: 'linear-gradient(217deg, ' + COLOR_ARRAY.lighest + ', ' + COLOR_ARRAY.darkest +')',
				borderStyle: 'solid',
			}

			const titleHexStyle = {
				display: 'flex',
				alignContent: 'center',
			}

			return (
				<div style={tileStyle}>
					<div style={titleHexStyle}>
						<div style={hexStyle}>
							<Hexagon 
								sizeMultiplier='0.13'
								backgroundColor={link.color}
								/>
						</div>
						<div>
							<a href={link.href}><strong>{link.title}</strong></a>
						</div>
					</div>
					<p>{link.description}</p>
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
				<h2>Social Links</h2>
				<div style={socialLinksStyle}>{socialLinks}</div>
			</div>
			)
	}
}

export default SocialLinks