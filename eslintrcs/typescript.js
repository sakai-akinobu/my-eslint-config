module.exports = {
  extends: [
    "./javascript.js",
  ],
  parser: "typescript-eslint-parser",
  plugins: [
    "typescript",
  ],
  rules: {
    "typescript/class-name-casing": "error",
    "typescript/member-delimiter-style": "error",
  },
};
