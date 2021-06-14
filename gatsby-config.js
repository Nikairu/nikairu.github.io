module.exports = {
  siteMetadata: {
    title: "portfolio",
  },
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-react-helmet",
    // "gatsby-plugin-sitemap",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-plugin-offline",
    "gatsby-transformer-sharp",
    "gatsby-plugin-preload-fonts",
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/, // See below to configure properly
        },
      },
    },
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        google: {
          families: [
            'Barlow: 100, 200, 300, 400'
          ], 
        },
      },
    },
  ],
};
