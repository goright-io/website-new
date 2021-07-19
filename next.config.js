const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
});

const exportPath = process.env.GORIGHT_EXPORT;
const basePath = process.env.BASEPATH;
module.exports = withMDX({
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
    config.node = {
      fs: "empty",
    };
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
  basePath: basePath ? basePath : "",
  assetPrefix: basePath ? basePath + "/" : "",
  pageExtensions: ["js", "jsx", "mdx"],
  trailingSlash: true, // keep true
});
