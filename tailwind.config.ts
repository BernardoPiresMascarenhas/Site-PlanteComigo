import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        olive: "#5C6742",
        moss: "#3D4A2E",
        sage: "#7A8C65",
        sand: "#C9B99A",
        cream: "#F5F1EA",
        ice: "#FAFAF7",
        earth: "#8B7355",
        "warm-gray": "#9E9B94",
        dark: "#1A1C18",
        charcoal: "#2E3028",
      },
      fontFamily: {
        cormorant: ["var(--font-cormorant)", "serif"],
        dm: ["var(--font-dm-sans)", "sans-serif"],
      },
      animation: {
        marquee: "marquee 28s linear infinite",
        "fade-up": "fadeUp 1s ease forwards",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        fadeUp: {
          from: { opacity: "0", transform: "translateY(24px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
