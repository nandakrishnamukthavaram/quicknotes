const tailwindcss = require('@tailwindcss/postcss');

module.exports = {
  plugins: [
    tailwindcss(), // NOT require('tailwindcss')
    require('autoprefixer'),
  ],
};
