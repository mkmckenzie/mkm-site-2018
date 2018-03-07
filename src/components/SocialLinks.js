import React from 'react';
import Link from 'gatsby-link';

class SocialLinks extends React.Component {

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
			},
			{
				title: 'Twitter',
				href: 'https://twitter.com/MaryKMcKenzie',
				description: 'I tweet things regularly, with wild (albiet polite) abandon.',
			},
			{
				title: 'GitHub',
				href: 'https://github.com/mkmckenzie',
				description: 'Because I am a developer and this is a developer thing.',
			}
		];

		return links.map((link) => {
			return (
				<div>
					<b><Link to={link.href}>{link.title}</Link></b>
					<p>{link.description}</p>
				</div>
			);
		});
	}

	render() {
		const socialLinks = this._getAllLinks();
		return(
			<div>
				<h2>Social Links</h2>
				<div>{socialLinks}</div>
			</div>
			)
	}
}

export default SocialLinks