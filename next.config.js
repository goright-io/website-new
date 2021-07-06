// const isProd = process.env.NODE_ENV === "production";
const exportPath = process.env.GORIGHT_EXPORT;

module.exports = {
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
    let exportPathMap = defaultPathMap;
    if (exportPath && exportPath in defaultPathMap) {
      exportPathMap = {
        "/": Object.assign(defaultPathMap[exportPath], {
          query: { canonical: true },
        }),
      };
    }
    return exportPathMap;
  },
  pageExtensions: ["js", "jsx"],
  trailingSlash: true,
  basePath: exportPath,
  assetPrefix: exportPath && exportPath + "/",
};
