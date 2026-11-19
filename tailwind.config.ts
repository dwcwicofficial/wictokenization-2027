/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        wic: {
          dark: "#050509",
          soft: "#11111a",
          card: "#0a0a11",
          gold: "#f7b733",
          "gold-soft": "#f5d27a",
          green: "#5dff9a",
          purple: "#b58cff",
          text: "#f9fbff",
          muted: "#a0a4b8",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Space Grotesk", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "gold-grad": "linear-gradient(135deg, #f7b733, #fceabb)",
      },
      boxShadow: {
        soft: "0 24px 60px rgba(0, 0, 0, 0.6)",
        gold: "0 0 40px rgba(247, 183, 51, 0.35)",
      },
      borderRadius: {
        lg: "18px",
        xl: "24px",
      },
    },
  },
  plugins: [],
};