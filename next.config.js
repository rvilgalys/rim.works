const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
  // Or use this to support MD files too
  // extension: /\.(md|mdx)$/,
});
module.exports = withMDX({
  pageExtensions: ["js", "jsx", "mdx"],
});
