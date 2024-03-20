/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  variants:{
    extend:{
      display:["focus-group"]
    }
  }
}
