/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Open Sans", "sans-serif"],
        plex: ["IBM Plex Sans", "sans-serif"],
        flecha: ["flecha-m", "serif"],
        surt: ["surt", "sans-serif"],
        libre: ["Libre Baskerville", "serif"],
      },
    },
  },
  plugins: [],
};
