module.exports = {
  extends: [
    "./javascript.js",
  ],
  parser: "@typescript-eslint/parser",
  plugins: [
    "@typescript-eslint",
  ],
  rules: {
    "@typescript-eslint/class-name-casing": "error",
    "@typescript-eslint/member-delimiter-style": "error",
    "@typescript-eslint/no-angle-bracket-type-assertion": "error",
    "@typescript-eslint/type-annotation-spacing": "error",
    "@typescript-eslint/adjacent-overload-signatures": "error",
  },
};
