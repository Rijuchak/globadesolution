
import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#0b0d12",
        foreground: "#e8eaf2",
        muted: {
          DEFAULT: "#121522",
          foreground: "#a1a6b8",
        },
        primary: {
          DEFAULT: "#60a5fa",
          foreground: "#0b0d12",
        },
      },
      borderRadius: {
        xl: "0.875rem",
        "2xl": "1rem",
      },
    },
  },
  plugins: [],
};
export default config;
