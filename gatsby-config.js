module.exports = {
  siteMetadata: {
    title: 'Mary-Katherine McKenzie',
  },
  plugins: [
  	'gatsby-plugin-react-helmet',
  	{
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography.js`,
      },
    },
  ],
};
