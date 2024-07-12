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
        harabara: ['Harabara', 'sans-serif'],
        pacaembuThin: ['Pacaembu Thin', 'sans-serif'],
        pacaembuLight: ['Pacaembu Light', 'sans-serif'],
        pacaembuMedium: ['Pacaembu Medium', 'sans-serif'],
        pacaembuRegular: ['Pacaembu Regular', 'sans-serif'],
        pacaembuBold: ['Pacaembu Bold', 'sans-serif'],
      },
      colors: {
        mainYellow: '#f9e74e',
        secondaryYellow: '#ede3d0'
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
