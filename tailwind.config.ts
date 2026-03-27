import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        headline: ["var(--font-manrope)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      colors: {
        primary: "#003ec7",
        "primary-container": "#0052ff",
        "on-primary": "#ffffff",
        "primary-fixed": "#dde1ff",
        secondary: "#565e74",
        "secondary-container": "#dae2fd",
        "on-secondary-container": "#5c647a",
        surface: "#faf8ff",
        "surface-container-lowest": "#ffffff",
        "surface-container-low": "#f2f3ff",
        "surface-container": "#eaedff",
        "surface-container-high": "#e2e7ff",
        "on-surface": "#131b2e",
        "on-surface-variant": "#434656",
        "outline-variant": "#c3c5d9",
        "inverse-surface": "#283044",
        "inverse-on-surface": "#eef0ff",
      },
    },
  },
  plugins: [],
};
export default config;
