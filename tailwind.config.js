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

            accent: "#c2410c",

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
          'sm': '576px',
          // => @media (min-width: 576px) { ... }

          'md': '960px',
          // => @media (min-width: 960px) { ... }

          'lg': '1440px',
          // => @media (min-width: 1440px) { ... }
        },
      extend: {
        backgroundImage: {
          "the-wave-dark": "url('/wave_dark.png')",
        },
        colors: {
          "tahiti-gold": "#E07126",
          "nero": "#1E1E1E",
          background: "var(--background)",
          foreground: "var(--foreground)",
        },
      },
    },
    plugins: [require("daisyui")],
  };
