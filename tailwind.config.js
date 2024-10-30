/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      maintix: "#F7E7DC",
      maintext: "#1E3E62",
      secondtix: "#405D72",
      grey: "#A0A3BD",
      black: "#000",
      blue: "#0000FF",
      birmud: "#4267B2",
    },
    extend: {
      backgroundImage: {
        avengers: "url('/src/assets/images/avengers.png')",
      },
    },
  },
  plugins: [],
};
