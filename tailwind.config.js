/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";
import { API_URL } from "./src/config/apiConfig";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      maintix: "#F3E9BE",
      maintext: "#1E3E62",
      secondtix: "#405D72",
      grey: "#A0A3BD",
      black: "#000",
      blue: "#1D4ED8",
      birmud: "#4267B2",
      abumuda: "#A0A3BD1A",
      abu: "#DEDEDE",
      pink: "#ffd1dc",
      red: "#ff6961",
    },
    extend: {
      backgroundImage: {
        avengers: "url('/src/assets/images/avengers.png')",
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#405D72",
          "primary-content": "#1E3E62",
          secondary: "#F3E9BE",
          "secondary-content": "#A0A3BD",
          neutral: "#ffffff",
          success: "#1CA350",
          error: "#ff6961",
        },
      },
    ],
  },
  plugins: [daisyui],
};
