const isProd = process.env.NODE_ENV === 'production'
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
  pageExtensions: ["js", "jsx"],
  basePath: isProd ? "/website-new" : "",
  assetPrefix: isProd ? "/website-new/" : "",
};
