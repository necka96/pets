module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        dog: "url('./img/banner.webp')",
        dogTwo: "url('./img/section_bg02.jpg.webp')",
        dogThree: "url('./img/dog3.png')",
        dotanionSec: "url('./img/section_bg03.jpg.webp')",
      },
      keyframes: {
        customAnimate: {
          "100%": { opacity: 0, visibility: "hidden" },
        },
      },
      animation: {
        customAnimate: "customAnimate 1s  forwards",
      },
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
