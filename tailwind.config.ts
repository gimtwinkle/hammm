import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

const config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#FFB6C1",
          foreground: "#FFFFFF",
        },
        secondary: {
          DEFAULT: "#FFD1DC",
          foreground: "#FFFFFF",
        },
        accent: {
          DEFAULT: "#FFDEE9",
        },
        background: "#FFF0F5",
        card: "#FFF5FA",
        border: "#FFC1CC",
      },
      fontFamily: {
        sans: ["Poppins", "Inter", ...fontFamily.sans],
      },
      borderRadius: {
        xl: "1.5rem",
      },
    },
  },
  plugins: [],
} satisfies Config;

export default config;
