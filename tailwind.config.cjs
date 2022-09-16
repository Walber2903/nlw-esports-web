/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
    './index.html'
  ],
  theme: {
    fontFamily: {
      sans: ['Inter', 'sans-serif']
    },
    extend: {
      backgroundImage: {
        galaxy: "url('/backgound-galaxy.png')",
        'nlw-gradient': "linear-gradient(89.86deg, #9572FC 23.08%, #43E7AD 33.94%, #E1D55D 44.57%)",
        'game-gradiente': "linear-gradient(90deg, #9572FC 0%, #43E7AD 50.52%, #E2D45C 100%)"
      }
    },
  },
  plugins: [],
}
