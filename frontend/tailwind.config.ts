import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        petrol: "#0B5563",
        brand: "#0E8584",
        amber: "#F4A259",
        ink: "#15292E",
        mist: "#F4F8F7",
        line: "#DCE7E5",
      },
    },
  },
  plugins: [],
};
export default config;
