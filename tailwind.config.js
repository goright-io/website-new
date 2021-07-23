const designSystem = require("@goright/design-system");

const goRightConfig = designSystem.twconfig;

const defaultConfig = require("tailwindcss/defaultConfig");

const resolveConfig = require("tailwindcss/resolveConfig");

const config = {
  mode: "jit",
  darkMode: false, // or 'media' or 'class'
  purge: goRightConfig.purge,
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
    extend: {
      ringColor: ["group-focus"],
      ringWidth: ["group-focus"],
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};

let finalConfig = resolveConfig(goRightConfig, config);

// Purge prop is not extendable, should be overriden
finalConfig.purge.content = [
  "./pages/**/*.{js,ts,jsx,tsx}",
  "./components/**/*.{js,ts,jsx,tsx}",
  "./node_modules/\\@goright/design-system/dist/**/*.js",
];

finalConfig.purge.safelist = finalConfig.purge.safelist.concat(["bg-6XL"]);

module.exports = finalConfig;
