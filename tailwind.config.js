const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./common/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./widgets/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#E5E5E5",
        primary: "#5285F2",
        orange: "#F57200",
        lightBlue: "linear-gradient(90deg, #DCE7FA 0%, #E5F2FA 100%)",
        lightOrange: "#FFEFE1",
        lightHash: "#F5F6FA",
      },
      boxShadow: {
        card: "0px 50px 80px -32px rgba(0, 71, 204, 0.07)",
      },
      fontFamily: {
        sans: ["Proxima Nova", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
