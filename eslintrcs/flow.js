module.exports = {
  extends: [
    "./javascript.js",
  ],
  parser: "babel-eslint",
  plugins: [
    "flowtype",
  ],
  settings: {
    flowtype: {
      onlyFilesWithFlowAnnotation: true,
    },
  },
  rules: {
    "array-style-simple-type": ["error", "shorthand"],
  },
};
