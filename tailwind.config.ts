import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        backGroundPage: "#F2E5BF",
        backGroundBox: "#257180",
        textPrimary: "#CB6040",
        textSecondary: "#FD8B51",
      },
      fontFamily: {
        arabic: ["Cairo", "serif"],
        english: ["Outfit", "serif"]
      }
    },
  },
  plugins: [],
} satisfies Config;
