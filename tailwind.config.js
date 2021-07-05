const designSystem = require("@goright/design-system");

const goRightConfig = designSystem.twconfig;

const defaultConfig = require("tailwindcss/defaultConfig");

const resolveConfig = require("tailwindcss/resolveConfig");

const config = {
  important: true,
  mode: "jit",
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      keyframes: {
        fadein: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        reveal: {
          "0%": { transform: "translateY(25px)", opacity: 0 },
          "100%": { transform: "translateY(0)", opacity: 1 },
        },
      },
      animation: {
        fadein: "fadein 2s ease-out ",
        reveal: "reveal 1s cubic-bezier(0.390, 0.575, 0.565, 1.000) both",
        fadeindelay: "fadein 2s 1s ease-out both",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};

let finalConfig = resolveConfig(goRightConfig, config);

// Purge prop is not extendable, should be overriden
finalConfig.purge = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/\\@goright/design-system/dist/**/*.js",
  ],
  safelist: ["bg-highlight-yellow-100", "bg-highlight-primary-100", "bg-6Xl"],
};

module.exports = finalConfig;
