/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: "Arisan Security",
    titleTemplate: "%s - Arisan Security",
    description:
      "Pecahkan kode & bersama merubah dunia! Arisan SECurity {A-SEC} adalah wadah untuk berbicara seputar Information Technology, terkhusus pada bidang Information Technology Security. Kami sangat terbuka bagi semua kalangan elemen masyarakat untuk bukan hanya sekedar berkolaborasi melainkan berelaborasi.",
    url: "https://arisansecurity.id",
    image: "/arisansecurity.jpg",
    twitterUsername: "@ArisanSecurity",
  },
  plugins: [
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    // {
    //   resolve: `gatsby-plugin-manifest`,
    //   options: {
    //     name: `gatsby-starter-default`,
    //     short_name: `starter`,
    //     start_url: `/`,
    //     background_color: `#663399`,
    //     // This will impact how browsers show your PWA/website
    //     // https://css-tricks.com/meta-theme-color-and-trickery/
    //     // theme_color: `#663399`,
    //     display: `minimal-ui`,
    //     icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
    //   },
    // },
    "gatsby-plugin-sass",
    "gatsby-plugin-postcss", 
    "gatsby-plugin-react-helmet",
    `gatsby-plugin-provide-react`,
    'gatsby-plugin-postcss',
  ],
}
