/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "500px",

      md: "900px",

      lg: "1280px",
    },
    extend: {},
  },
  plugins: [],
};
