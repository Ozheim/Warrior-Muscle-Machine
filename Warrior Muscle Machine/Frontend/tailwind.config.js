/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,scss,sass}"],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};
