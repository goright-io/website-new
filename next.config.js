const isProd = process.env.NODE_ENV === "production";

const exportPath = process.env.GORIGHT_EXPORT;

const getBase = ((isProd, exportPath) => {
  if (!isProd) return null;
  if (exportPath) return exportPath;
  return "/website-new";
})(isProd, exportPath);
console.log("🚀 ~ file: next.config.js ~ line 10 ~ getBase ~ getBase", getBase);

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
  basePath: getBase,
  assetPrefix: getBase && getBase + "/",

};
