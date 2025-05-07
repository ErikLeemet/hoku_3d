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
          bightspace: {
            primary: "#F6FFEC",

            secondary: "#010101",

            accent: "#FF7178",

            neutral: "#B5BAAF",

            "base-100": "#D4E7E3",

            info: "#818cf8",

            success: "#34d399",

            warning: "#fde047",

            error: "#ef4444",

            "--custom-shadow":
            "5px 5px rgba(255, 113 ,120, 0.4), 10px 10px rgba(255, 113 ,120, 0.3), 15px 15px rgba(255, 113, 120, 0.2), 20px 20px rgba(255, 113, 120, 0.1), 25px 25px rgba(255, 113, 120, 0.05)",
          },
          darkspace: {
              primary: "#1A1A1A",

              secondary: "#FFFFFF",

              accent: "#E3F449",

              neutral: "#F9EDFE",

              "base-100": "#2C223A",

              info: "#818cf8",

              success: "#34d399",

              warning: "#fde047",

              error: "#ef4444",

              "--custom-shadow":
            "5px 5px rgba(227, 244, 73, 0.4), 10px 10px rgba(227, 244, 73, 0.3), 15px 15px rgba(227, 244, 73, 0.2), 20px 20px rgba(227, 244, 73, 0.1), 25px 25px rgba(227, 244, 73, 0.05)",
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
