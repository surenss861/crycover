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
        cream: "#F8F6F3",
        sand: "#E8E4DE",
        stone: "#9A958C",
        sage: "#7D8B7A",
        blush: "#D4B5A8",
        charcoal: "#2C2A28",
        ink: "#2B2B2B",
        mist: "#B8B3AB",
      },
      boxShadow: {
        panel: "0 20px 60px rgba(0,0,0,0.06)",
        panelInner: "inset 0 0 0 1px rgba(255,255,255,0.4)",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        serif: ["var(--font-geist-mono)", "Georgia", "serif"],
      },
    },
  },
  plugins: [],
};

export default config;
