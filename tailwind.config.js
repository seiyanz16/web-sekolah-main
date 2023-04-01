/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      width: {
        350: "350px",
        609: "609px",
      },
      colors: {
        black: "#171717",
        dark: "#333",
        "main-color": "#DA0037",
        "light-one": "#fff",
        "light-two": "#f9fafb",
        "light-three": "#ededed",
        navBackground: "rgba(23, 23, 23, 0.8)",
        "light-transparent": "rgba(237, 237, 237, 0.8)",
        "home-color": "#E5E5E5",
        "home-text-p": "#444444",
      },
      backgroundImage: {
        hero: "url('/public/images/home/hero.svg')",
        playRed: "url('/public/images/home/play-red.svg')",
        playWhite: "url('/public/images/home/play-white.svg')",
      },
    },
  },
  plugins: [],
};
