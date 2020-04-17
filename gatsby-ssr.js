const React = require('react')
const {withPrefix} = require('gatsby')

exports.onRenderBody = ({ setHeadComponents, setPostBodyComponents }, pluginOptions) => {
  let output = [
    <link key="oswald" rel="stylesheet" type="text/css" href={withPrefix('/') + "fonts/Webfonts/aladin/stylesheet.css"}/>
  ]
  setHeadComponents(output)
}

