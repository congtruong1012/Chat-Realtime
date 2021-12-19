// tailwind.config.js
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  darkMode: false, // or 'media' or 'class'
  variants: {
    extend: {
      spacing: {
        616: "154rem",
      },
    },
  },
  plugins: [],
};
