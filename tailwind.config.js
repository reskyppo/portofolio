module.exports = {
  purge: ["./components/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}"],
  darkMode: "media", // 'media' or 'class'
  theme: {
    extend: {
      colors: {
        bg: "#E0E1E0",
        primary: "#193A54",
        secondary: "#2E516B",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
