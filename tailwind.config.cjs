/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "gray-20": "#191d2b",
        "gray-50": "#191d2b",
        "gray-100": "#191d2b",
        "gray-500": "#ffffff",
        "primary-100": "#191d2b",
        "primary-300": "#FFA6A3",
        "primary-500": "#27AE60",
        "secondary-400": "#FFCD5B",
        "secondary-500": "#FFC132",
        "yellow-100": "#F5F5DC",
        "red-100":"#f60b0b",
      },
      backgroundImage: (theme) => ({
        "gradient-darkblue":
          "linear-gradient(90deg, #FF616A 0%, #FFC837 100%)",
        "mobile-home": "url('./assets/HomePageGraphic.png')",
      }),
      fontFamily: {
        dmsans: ["DM Sans", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      content: {
        evolvetext: "url('./assets/NameLogo.png')",
        abstractwaves: "url('./assets/AbstractWaves.png')",
        sparkles: "url('./assets/Sparkles.png')",
        circles: "url('./assets/Circles.png')",
      },
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px",
    },
  },
  plugins: [],
};
