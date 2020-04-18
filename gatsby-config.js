require("dotenv").config({
    path: `.env.${process.env.NODE_ENV}`,
})
const sculptingPluginOptions = {
  contentPath: `posts`,
}
const siteMetadata = {
  title: "小书匠",
  siteUrl: "https://suziwen.github.io/acorns",
  author: "suziwen",
  description: `一款让你爱不释手的写作软件`,
}
sculptingPluginOptions['gitalk'] = {
  clientID: "10453cc36f0507d47d1b",
  clientSecret: "e0dc0be2f99fbe88d8a9035eb3d172aa6bbe4d9c",
  repo: "acorns",
  owner: "suziwen",
  admin: ["suziwen"],
}
module.exports = {
  siteMetadata,
  pathPrefix: "/acorns",
  plugins: [{ 
    resolve: `@suziwen/gatsby-theme-sculpting`,
    options: sculptingPluginOptions 
  }],
}
