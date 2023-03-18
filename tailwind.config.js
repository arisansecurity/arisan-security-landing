/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "dark-blue": "#11395d",
        "native-black": "#000000",
        "light-blue": "#0097f0",
        "light-grey": "#EBEBEB",
      }
    },
  },
  plugins: [],
}
