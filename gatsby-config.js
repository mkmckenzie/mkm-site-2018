module.exports = {
	siteMetadata: {
		title: 'Mary-Katherine McKenzie',
	},
	plugins: [
    'gatsby-plugin-react-helmet',
    {
			resolve: 'gatsby-plugin-typography',
			options: {
				pathToConfigModule: 'src/utils/typography',
			},
		},
		{
			resolve: 'gatsby-plugin-google-analytics',
			options: {
				trackingId: 'UA-41941177-1',
				// Puts tracking script in the head instead of the body
				head: true,
				// Setting this parameter is optional
				anonymize: false,
				// Setting this parameter is also optional
				respectDNT: true,
			},
		},
	],
};
