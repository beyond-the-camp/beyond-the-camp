/*eslint-env node*/

module.exports = {
  siteMetadata: {
    title: `Beyond the Camp`
  },
  plugins: [
    `gatsby-plugin-typescript`,
    {
      resolve: 'gatsby-plugin-eslint',
      options: {
        test: /\.js$|\.jsx$|\.ts$|\.tsx$/
      }
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/projects`,
        name: 'projects'
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/categories`,
        name: 'categories'
      }
    },
    `gatsby-plugin-react-leaflet`,
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        tailwind: true // Enable tailwindcss support
      }
    },
    `gatsby-plugin-netlify-cms`,
    `gatsby-plugin-netlify`
  ]
};
