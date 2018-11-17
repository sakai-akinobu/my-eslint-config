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
    "flowtype/array-style-simple-type": ["error", "shorthand"],
    "flowtype/boolean-style": "error",
    "flowtype/delimiter-dangle": ["error", "always-multiline"],
    "flowtype/generic-spacing": "error",
    "flowtype/no-dupe-keys": "error",
  },
};
