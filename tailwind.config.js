/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/elements/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: "var(--font-inter)",
        grotesuqe: "var(--font-grotesuqe)",
      },
      colors: {
        "adaptive-extrastrong": "var(--adaptive-color-extrastrong)",
        "adaptive-extrastrong-hover": "var(--adaptive-color-extrastrong-hover)",
        "adaptive-strong": "var(--adaptive-color-strong)",
        "adaptive-strong-hover": "var(--adaptive-color-strong-hover)",
        "adaptive-strong-hover": "var(--adaptive-color-strong-hover)",
        "adaptive-weak": "var(--adaptive-color-weak)",
        "adaptive-weak-hover": "var(--adaptive-color-weak-hover)",
        "adaptive-weak-hover": "var(--adaptive-color-weak-hover)",
        "adaptive-off-white": "var(--adaptive-off-white) ",
        "adaptive-off-black": "#111"
      },
      borderColor: {
        "adaptive-strong": "var(--aptive-border-strong)",
      },
    },
  },
  plugins: [],
};
