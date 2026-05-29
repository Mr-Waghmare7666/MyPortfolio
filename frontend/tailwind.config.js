module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        ink: "#0A0F1E",
        slate: "#24314F",
        mint: "#5BE6C9",
        coral: "#FF7B6B",
        electric: "#4B7BFF",
        gold: "#FFD86B",
      },
      fontFamily: {
        display: ["Syne", "sans-serif"],
        body: ["Sora", "sans-serif"],
      },
      boxShadow: {
        aura: "0 24px 80px rgba(75, 123, 255, 0.28)",
        soft: "0 12px 40px rgba(0, 0, 0, 0.25)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.6" },
          "50%": { opacity: "1" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        pulseGlow: "pulseGlow 4s ease-in-out infinite",
      },
    },
  },
};