const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("C:\\xampp\\htdocs\\hautea-portfolio\\.cache\\dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("C:\\xampp\\htdocs\\hautea-portfolio\\src\\pages\\404.js"))),
  "component---src-pages-action-mma-js": hot(preferDefault(require("C:\\xampp\\htdocs\\hautea-portfolio\\src\\pages\\action\\MMA.js"))),
  "component---src-pages-creativity-jardin-de-justino-js": hot(preferDefault(require("C:\\xampp\\htdocs\\hautea-portfolio\\src\\pages\\creativity\\jardin-de-justino.js"))),
  "component---src-pages-creativity-plants-js": hot(preferDefault(require("C:\\xampp\\htdocs\\hautea-portfolio\\src\\pages\\creativity\\plants.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("C:\\xampp\\htdocs\\hautea-portfolio\\src\\pages\\index.js")))
}

