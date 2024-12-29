import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#ACFF00", // Neon lime
          hover: "#BDFF33",
          dark: "#86CC00",
        },
        secondary: {
          DEFAULT: "#00F0FF", // Cyan
          hover: "#33F3FF",
          dark: "#00C2CC",
        },
        dark: {
          DEFAULT: "#0A0A0B", // Main background
          lighter: "#141415",
          medium: "#1A1A1B",
        },
        accent: {
          purple: "#D946EF",
          blue: "#0EA5E9",
        },
      },
      fontFamily: {
        display: ["Space Grotesk", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
      fontSize: {
        // Typography scale
        "display-large": ["4.5rem", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "h1": ["3.5rem", { lineHeight: "1.2", letterSpacing: "-0.01em" }],
        "h2": ["2.5rem", { lineHeight: "1.2", letterSpacing: "-0.01em" }],
        "h3": ["2rem", { lineHeight: "1.3", letterSpacing: "-0.01em" }],
        "h4": ["1.5rem", { lineHeight: "1.4" }],
        "body-large": ["1.125rem", { lineHeight: "1.6" }],
        "body": ["1rem", { lineHeight: "1.6" }],
        "small": ["0.875rem", { lineHeight: "1.5" }],
      },
      spacing: {
        // Consistent spacing scale
        "xs": "0.5rem",
        "sm": "1rem",
        "md": "1.5rem",
        "lg": "2rem",
        "xl": "3rem",
        "2xl": "4rem",
      },
      keyframes: {
        "swarm-float": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        "swarm-pulse": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.5" },
        },
      },
      animation: {
        "swarm-float": "swarm-float 3s ease-in-out infinite",
        "swarm-pulse": "swarm-pulse 2s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;