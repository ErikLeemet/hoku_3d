export default {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        title: "var(--color-title)",
        neutral: "var(--color-neutral)",
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        accent: "var(--color-accent)",
      },
      boxShadow: {
        custom: "var(--shadow-custom)",
      },
      screens: {
        sm: "360px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1920px",
      },
      fontFamily: {
        thedusCLR: ["var(--font-thedus-clr)", "sans-serif"],
        thedusCLB: ["var(--font-thedus-clb)", "sans-serif"],
        thedusWLR: ["var(--font-thedus-wlr)", "sans-serif"],
        thedusWLB: ["var(--font-thedus-wlb)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
