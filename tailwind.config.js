/** @type {import('tailwindcss').Config} */
module.exports = {
  plugins: [require("daisyui")],
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        audiowide: ["Audiowide, cursive"],
        rajdhani: ["Rajdhani", "sans-serif"],
      },
      borderRadius: {
        mdd: "0.4rem",
      },
      spacing: {
        100: "6.25rem",
        128: "32rem",
        88: "5.5rem",
        90: "22rem",
      },
      backgroundImage: {
        "hero-image": "url('/src/assets/imagens/raphaelpaiva-equipe.jpg')",
        logotipo: "url('/src/assets/imagens/rapha-logo.png')",
      },
      colors: {
        white: "#ffff",
        black: "#111",
        blue: "#0A2647",
        blueLight: "#1e324e",
        blueBelt: "#3a86ff",
        purpleBelt: "#560bad",
        brownBelt: "#583101",
        yellow: {
          50: "#fff3b0",
          100: "#ffea00",
          200: "#F2CF30",
          500: "#FFBD59",
          800: "#FAA500",
        },
        pink: {
          200: "#AF1685",
          800: "#E31C79",
        },
        orange: {
          500: "#CD7925",
        },
        green: {
          400: "#7FD768",
          450: "#5cc32c",
          500: "#52b028",
        },
        red: {
          400: "#D70000",
          500: "#a4161a",
          800: "#6a040f",
        },
        gray: {
          50: "#F3F3F3",
          100: "#eaeaea",
          200: "#E4E4E4",
          300: "#CCCCCC",
          500: "#313131",
          900: "#1F1F1E",
        },
      },
    },
  },
  plugins: [],
};
