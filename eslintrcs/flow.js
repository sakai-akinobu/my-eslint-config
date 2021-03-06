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
    "flowtype/no-primitive-constructor-types": "error",
    "flowtype/no-types-missing-file-annotation": "error",
    "flowtype/object-type-delimiter": "error",
    "flowtype/semi": "error",
    "flowtype/space-after-type-colon": "error",
    "flowtype/space-before-generic-bracket": "error",
    "flowtype/space-before-type-colon": "error",
    "flowtype/type-import-style": ["error", "declaration"],
    "flowtype/union-intersection-spacing": "error",
  },
};
