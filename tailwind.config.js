/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        plex: ["IBM Plex Sans", "sans-serif"],
        flecha: ["flecha-m", "serif"],
        surt: ["surt", "sans-serif"],
      },
    },
  },
  plugins: [],
};
