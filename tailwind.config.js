/** @type {import('tailwindcss').Config} */
export default {
 content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
   
  theme: {
    theme: {
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px', // عرض برای lg
        xl: '1280px',
      },
    extend: {},
  },
  plugins: [],
}
}
