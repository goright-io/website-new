const path = require("path");
const replaceAll = require("string.prototype.replaceall");
const exportPath = process.env.GORIGHT_EXPORT;

const frontmatterPlugin = require("./lib/frontmatter");
const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [frontmatterPlugin],
  },
});

module.exports = withMDX({
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    // replace images with NextImage and require statement in mdx files
    // @source: https://dev.to/jokeneversoke/adding-relative-img-paths-to-mdx-59l4
    let rule = config.module.rules.find(
      (rule) => String(rule.test) === String(/\.mdx?$/)
    );
    rule.use.push({ loader: path.resolve(__dirname, "lib/mdxLoader.js") });
    return config;
  },
  exportPathMap: async (defaultPathMap) => {
    const resultMap = {
      "/handout/v2/releasing-library": {
        page: "/hands-on-workshop/handout/v2/releasing-library",
        query: { canonical: true },
      },
    };

    if (exportPath && exportPath in defaultPathMap) {
      const exportPaths = Object.keys(defaultPathMap).forEach((path) => {
        if (path.startsWith(exportPath)) {
          const newPath =
            path.length === exportPath.length
              ? "/"
              : path.substring(exportPath.length);
          resultMap[newPath] = Object.assign(defaultPathMap[path], {
            query: { canonical: true },
          });
        }
      });
      return resultMap;
    }
    return defaultPathMap;
  },
  pageExtensions: ["js", "jsx", "mdx"],
  trailingSlash: true, // keep true
});
