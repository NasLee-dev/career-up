// const autoprefixer = require("autoprefixer");
// const tailwindcss = require("tailwindcss");

// module.exports = {
//   plugins: [tailwindcss, autoprefixer],
//   tailwindcss: {},
//   autoprefixer: {},
// };
module.exports = {
  plugins: {
    "@tailwindcss/nesting": {},
    tailwindcss: {},
    autoprefixer: {},
  },
};
