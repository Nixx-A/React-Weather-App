/* eslint-disable quote-props */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'sky': "url('/Sky.jpeg')",
        'hs': "url('/hs.jpg')"
      },
      colors: {
        'regal-blue': '#fff'
      }
    }
  },
  plugins: []
}
