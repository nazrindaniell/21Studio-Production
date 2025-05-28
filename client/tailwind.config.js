/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "black-100": "#0E110C", // Black
        "white-200": "#EAF0F5", // Light gray
        "white-300": "#CCCCCC", // Gray
        lime: "#CFFA14", // Lime
        purple: "#4131D3", // Purple
      },
      fontFamily: {
        outfit: ["Outfit", "sans-serif"],
        nunito: ["Nunito Sans", "sans-serif"],
      },
      container: {
        center: true,
        margin: {
          DEFAULT: "0",
          sm: "0",
          md: "0",
          lg: "0",
          xl: "0",
        },
        padding: {
          DEFAULT: "2rem",
          lg: "1rem",
        },
      },
      aspectRatio: {
        "3/2": 3 / 2,
        "5/2": 5 / 2,
      },
    },
  },
  plugins: [],
};
