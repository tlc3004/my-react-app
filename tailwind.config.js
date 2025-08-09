/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '480px',    // ejemplo de breakpoint extra chico
        '3xl': '1920px',  // ejemplo de breakpoint extra grande
      },
    },
  },
  plugins: [],
}
