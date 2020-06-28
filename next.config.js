const rehypePrism = require("@mapbox/rehype-prism");
const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
  options: {
    rehypePlugins: [rehypePrism],
  },
  // Or use this to support MD files too
  // extension: /\.(md|mdx)$/,
});
module.exports = withMDX({
  pageExtensions: ["js", "jsx", "mdx"],
});
