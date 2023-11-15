/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        primary: "#363535",
        secondary: "#5A5A5A",
        lightBlue: "#00C9C9",
        blue: "#0D4C93",
        gray: "#ECF5F5",
        // white: "red"
      },
      margin: {
        18: "18px",
        22: "22px",
        119: "119px"
      },
      padding: {
        15: "15px",
        18: "18px",
        49: "49px",
        58: "58px"
      },
      fontSize: {
        22: "22px",
        26: "26px",
        50: "50px"
      },
      borderRadius: {
        15: "15px",
        25: "25px",
        35: "35px",
        30: "30px",
        50: "50px",
      },
    },
  },
  plugins: [],
};
