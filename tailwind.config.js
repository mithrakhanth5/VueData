/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: "#236cb1",
          cyan: "#2faae1",
          electric: "#2753ff",
          dark: "#29344a",
          darker: "#1c2434",
          lightBlue: "#d5f2ff",
          softBlue: "#85c4ff",
          grayText: "#3e3e3e",
          grayBody: "#6c757d",
          lightGray: "#fbfbfb",
          sectionGray: "#f2f2f2",
          borderGray: "#dddddd",
          accentOrange: "#e73700",
        },
      },
      fontFamily: {
        montserrat: ["var(--font-montserrat)", "Montserrat", "sans-serif"],
        sans: ["var(--font-roboto)", "Roboto", "sans-serif"],
      },
      boxShadow: {
        card: "0px 10px 30px rgba(0, 0, 0, 0.08)",
        nav: "0 0 10px 0 rgba(0, 0, 0, 0.06)",
        dropdown: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)",
      },
    },
  },
  plugins: [],
};
