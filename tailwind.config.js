export default {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        title: "#e86f67",
        muted: "#475569",
        primary: "#e6f2ef",
        secondary: "#bcc7a5",
        accent: "#e86f67",
        panel: "#ffffff",
        border: "#c7d2dc",
        dark: {
          title: "#b68235",
          primary: "#1e120f",
          secondary: "#bcc7a5",
          accent: "#b68235",
          muted: "#dfe6c0",
          panel: "#22120f",
          border: "#4a3a2f",
        },
      },
      fontFamily: {
        thedusCLR: ["thedusCLR"],
        thedusCLB: ["thedusCLB"],
        thedusWLR: ["thedusWLR"],
        thedusWLB: ["thedusWLB"],
      },
    },
  },
  plugins: [],
};
