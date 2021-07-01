const designSystem = require("@goright/design-system");

const goRightConfig = designSystem.twconfig;

const defaultConfig = require("tailwindcss/defaultConfig");

const resolveConfig = require("tailwindcss/resolveConfig");

const config = {
  mode: "jit",
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

let finalConfig = resolveConfig(goRightConfig, config);

// Purge prop is not extendable, should be overriden
finalConfig.purge = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/\\@goright/design-system/dist/**/*.js",
  ],
  safelist: ["bg-highlight-yellow-100", "bg-highlight-primary-100"],
};

module.exports = finalConfig;
