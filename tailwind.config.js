/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  plugins: [require("@tailwindcss/forms")],
  theme: {
    extend: {
      screens: {
        xs: { max: "420px" },
      },
    },
  },
};
