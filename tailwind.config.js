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
          primary: "#E07125",

          secondary: "#f3f4f6",

          accent: "#16C47F",

          neutral: "#1e1e1e",

          "base-100": "#1e1e1e",

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
    extend: {
      backgroundImage: {
        "the-wave-dark": "url('/wave_dark.png')",
      },
      colors: {
        main: "var(--main)",
        nero: "#1E1E1E",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [require("daisyui")],
};
