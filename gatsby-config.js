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
if (process.env.DISQUS_SHORT_NAME) {
  sculptingPluginOptions['disqus'] = {
    shortname: process.env.DISQUS_SHORT_NAME
  }
}

if (
  process.env.GITALK_CLIENT_ID &&
  process.env.GITALK_CLIENT_SECRET &&
  process.env.GITALK_REPO &&
  process.env.GITALK_OWNER
) {
  sculptingPluginOptions['gitalk'] = {
    clientID: process.env.GITALK_CLIENT_ID,
    clientSecret: process.env.GITALK_CLIENT_SECRET,
    repo: process.env.GITALK_REPO,
    owner: process.env.GITALK_OWNER,
    admin: [process.env.GITALK_ADMIN || process.env.GITALK_OWNER],
  }
}
module.exports = {
  siteMetadata,
  pathPrefix: "/acorns",
  plugins: [{ 
    resolve: `@suziwen/gatsby-theme-sculpting`,
    options: sculptingPluginOptions 
  }],
}
