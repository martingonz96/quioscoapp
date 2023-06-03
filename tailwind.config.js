/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./layout/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {},
  },
  purge: {
    content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./layout/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}"
    ],
    options: {
      safelist: ["p-10"], // Add the necessary utility classes here
    },
  },
  plugins: [],
};
