import baseTheme from "@suziwen/gatsby-theme-sculpting/src/gatsby-plugin-theme-ui"
import merge from "lodash.merge"

// lodash.merge will deeply merge custom values with the
// blog theme's defaults
export default merge({}, baseTheme, {
  fonts: {
    logo: "aladin, sans-serif",
  },
})
