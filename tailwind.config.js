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
        background: "#f5f6fa",
        primary: "#5285F2",
        blue_2: "#2E6BEF",
        dark: "#001540",
        success: "#4ECC4E",
        "dark-semi-dark": "#001540",
        orange: "#F57200",
        "light-blue": "linear-gradient(90deg, #DCE7FA 0%, #E5F2FA 100%)",
        "light-blue-2": "rgba(82, 133, 242, 0.07)",
        "light-orange": "#FFEFE1",
        "light-hash": "#F5F6FA",
        "light-color": "#90A0C2",
      },
      boxShadow: {
        card: "0px 50px 80px -32px rgba(0, 71, 204, 0.07)",
      },
      fontFamily: {
        recoleta: "Recoleta",
        sans: ["Proxima Nova", ...defaultTheme.fontFamily.sans],
        euclid: "Euclid",
      },
      fontSize: {
        sm: "12px",
        base: "14px",
        md: "16px",
        lg: "18px",
        xl: "24px",
      },
      backgroundImage: {
        "balance-coin-one": "url('/coin-3.png')",
        "balance-coin-two": "url('/coin-1.png')",
        "balance-coin-three": "url('/coin-2.png')",
      },
    },
  },
  plugins: [],
};
