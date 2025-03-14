/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#F6FFEC",

          secondary: "#010101",

          accent: "#FF7178",

          neutral: "#B5BAAF",

          "base-100": "#D4E7E3",

          info: "#818cf8",

          success: "#34d399",

          warning: "#fde047",

          error: "#ef4444",
        },
      },
    ],
  },
  theme: {
    screens: {
      sm: "360px", // Mobile
      md: "768px", // Tablet
      lg: "1024px", // Large Tablet / Small Laptop
      xl: "1280px", // Desktop
      "2xl": "1920px", // Large Desktop
    },
  },
  plugins: [require("daisyui")],
};
