/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./views/**/*.ejs", // Include all EJS files
    "./public/**/*.js", // Include JS files in the public folder (if any)
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
