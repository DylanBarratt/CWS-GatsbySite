/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
module.exports = {
  /* Your site config here */
  plugins: [
    {
      resolve: `gatsby-source-contentful`,
      options: {
        accessToken: `NGXUjZxiPw6-FkJAysvpTpfVoh8nOQiLKo-bvH9SrBM`,
        spaceId: `upfs1qtoj9kd`,
      },
    },
  ],
}
