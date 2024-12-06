/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        world: `url('../WorldMap.svg')`,
      },
      colors: {
        gold: "#D4AF37", // Main accent color
        darkBg: "#121212", // Background for dark mode
        lightText: "#E5E5E5", // Text for dark mode
        accentDark: "#8C7851", // Secondary accent for dark mode
      },
    },
  },
  plugins: [],
};
