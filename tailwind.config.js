/** @type {import('tailwindcss').Config} */
export default {
  darkMode:"class", 
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'radial-custom': 'radial-gradient(ellipse at top left, #1c0314, #b0049c)',
      },
    },
  },
  plugins: [],
}

