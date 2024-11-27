/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      transitionDuration: {
        '2000': '2000ms',
        '1500': '1500ms',
      }
    },
    fontFamily: {
      body: ['Poppins']
    }
  },
  plugins: [],
}

