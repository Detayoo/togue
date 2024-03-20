import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      "2xl": { min: "1600px" },
      xl: { max: "1599px" },
      lg: { max: "1280px" },
      md: { max: "1024px" },
      sm: { max: "768px" },
      "2xs": { max: "640px" },
      xs: { max: "400px" },
      tab: { min: "769px", max: "900px" },
    },
    extend: {
      colors: {
        "primary-color": "var(--primary-color)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
