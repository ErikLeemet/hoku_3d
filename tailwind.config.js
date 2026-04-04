import { Tilt_Neon } from "next/font/google";

export default {
  darkMode: "class", // key part
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // LIGHT THEME
        title: "#FF7178",
        neutral: "#010101",
        primary: "#D4E7E3",
        secondary: "#F6FFEC",
        accent: "#FF7178",

        // DARK THEME
        dark: {
          title: "#AE6821",
          primary: "#1A1A1A",
          secondary: "#FFFFFF",
          accent: "#E3F449",
          neutral: "#D7C957",
        },
      },
      // FONTS
      fontFamily: {
        thedusCLR: ["thedusCLRegular", "sans-serif"],
        thedusCLB: ["thedusCLBold", "sans-serif"],
        thedusWLR: ["thedusWLRegular", "sans-serif"],
        thedusWLB: ["thedusWLBold", "sans-serif"],
      },
    },
  },
  plugins: [],
};
