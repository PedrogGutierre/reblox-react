/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-blue': '#004C9C', 
        'secondary-blue': '#0099CC', 
        'hover-blue': '#0072A4', 
        'light-white': '#E1F0F6'  
    },
    },
  },
  plugins: [],
}