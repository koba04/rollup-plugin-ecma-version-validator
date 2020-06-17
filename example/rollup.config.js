import ecmaVersionValidator from "../lib/index";

export default {
  input: "index.js",
  // An error would occur if you change the ecmaVersion to 5
  plugins: [ecmaVersionValidator({ ecmaVersion: 2015 })],
};
