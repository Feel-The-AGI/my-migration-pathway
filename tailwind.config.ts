import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        charcoal: "#1F2933",
        warmwhite: "#FAFAF7",
        deepolive: "#2F3E35",
        mutedgold: "#B08D57",
        slate: "#6B7280"
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"]
      },
      boxShadow: {
        soft: "0 20px 60px -40px rgba(31, 41, 51, 0.45)",
        card: "0 20px 45px -35px rgba(31, 41, 51, 0.4)"
      }
    }
  },
  plugins: []
};

export default config;
