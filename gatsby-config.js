require("dotenv").config({
  // path: `.env.${process.env.NODE_ENV}`,
  path: ".env",
});

module.exports = {
  siteMetadata: {
    title: "Logística los Príncipes",
    description:
      "Página de presentación de servicios para Logística los Príncipes",
    author: "Cugini-Sviluppatori",
    siteUrl: "https://www.logisticalosprincipes.com",
    social: {
      twitter: "@losprincipes",
      facebook: "logisticalosprincipes",
      instagram: "logisticalosprincipes",
    },
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
  ],
};
