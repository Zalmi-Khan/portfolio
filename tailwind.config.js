/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    container: {
      padding: {
        DEFAULT: "20px",
        sm: "30px",
        lg: "40px",
        xl: "60px",
        "2xl": "80px",
      },
      screens: {
        xl: "1280px",
      },
      center: true,
    },
    colors: {
      primary: "#C9F31D",
      secondary: "#b1b1b1",
      text: "#989898",
      white: "#ffffff",
      black: "#000000",
      light: "#1f1f1f",
      "light-hover": "#2f2f2f",
      dark: "#070707",
      "dark-light": "#131313",
    },
    extend: {
      backgroundImage: {
        "gradient-lines": "linear-gradient(90deg, #000 1px, transparent 1px)",
      },
      backgroundSize: {
        lines: "200px 9px",
      },
      colors: {
        bodyBackground: "#131313", 
        bodyText: "#ffffff",
      },
    },
  },
  plugins: [],
};
