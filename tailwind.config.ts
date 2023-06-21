import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#FDF7F1",
          100: "#FBEBDF",
          200: "#F8DAC4",
          300: "#F4C7A4",
          400: "#F1B689",
          500: "#EDA268",
          600: "#E67D2D",
          700: "#B65B16",
          800: "#7B3E0F",
          900: "#3B1E07",
          950: "#201004"
        },
        secondary: {
          50: "#EBF2FF",
          100: "#DBE9FF",
          200: "#B8D3FF",
          300: "#8FBAFF",
          400: "#6BA4FF",
          500: "#478EFF",
          600: "#2176FF",
          700: "#0052D6",
          800: "#00378F",
          900: "#001B47",
          950: "#000E24"
        }
      },
    },
  },
  plugins: [],
} satisfies Config;
