module.exports = {
  parserOptions: {
    ecmaVersion: 2018,
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    // Possible Errors
    "for-direction": "error",
    "getter-return": "error",
    "no-async-promise-executor": "error",
    "no-compare-neg-zero": "error",
    "no-cond-assign": "error",
    "no-console": "error",
    "no-constant-condition": "error",
    "no-control-regex": "error",
    "no-debugger": "error",
    "no-dupe-args": "error",
    "no-dupe-keys": "error",
    "no-duplicate-case": "error",
    "no-empty": "error",
    "no-empty-character-class": "error",
    "no-ex-assign": "error",
    "no-extra-boolean-cast": "error",
    "no-extra-parens": "error",
    "no-extra-semi": "error",
    "no-func-assign": "error",
    "no-inner-declarations": "error",
    "no-invalid-regexp": "error",
    "no-irregular-whitespace": "error",
    "no-obj-calls": "error",
    "no-regex-spaces": "error",
    "no-sparse-arrays": "error",
    "no-template-curly-in-string": "error",
    "no-unexpected-multiline": "error",
    "no-unreachable": "error",
    "no-unsafe-finally": "error",
    "no-unsafe-negation": "error",
    "use-isnan": "error",
    "valid-typeof": "error",
    // Best Practices
    "array-callback-return": "error",
    "block-scoped-var": "error",
    "consistent-return": "error",
    "dot-location": "error",
    "dot-notation": "error",
    "eqeqeq": "error",
    "no-caller": "error",
    "no-case-declarations": "error",
    "no-empty-pattern": "error",
    "no-eq-null": "error",
    "no-eval": "error",
    "no-extra-label": "error",
    "no-fallthrough": "error",
    "no-global-assign": "error",
    "no-implied-eval": "error",
    "no-lone-blocks": "error",
    "no-multi-spaces": "error",
    "no-octal": "error",
    "no-redeclare": "error",
    "no-return-assign": "error",
    "no-self-assign": "error",
    "no-unused-labels": "error",
    "no-useless-escape": "error",
    // Variables
    "no-delete-var": "error",
    "no-shadow-restricted-names": "error",
    "no-undef": "error",
    "no-undefined": "error",
    "no-unused-vars": "error",
    // Stylistic Issues
    "array-bracket-spacing": ["error", "never"],
    "block-spacing": ["error", "always"],
    "brace-style": "error",
    "comma-dangle": ["error", "always-multiline"],
    "comma-spacing": "error",
    "comma-style": ["error", "last"],
    "computed-property-spacing": "error",
    "eol-last": "error",
    "func-call-spacing": "error",
    "indent": ["error", 2],
    "jsx-quotes": "error",
    "key-spacing": "error",
    "keyword-spacing": "error",
    "linebreak-style": "error",
    "max-depth": "error",
    "max-nested-callbacks": ["error", {max: 3}],
    "new-parens": "error",
    "no-mixed-spaces-and-tabs": "error",
    "no-multiple-empty-lines": ["error", {max: 2, maxEOF: 0, maxBOF: 1}],
    "no-trailing-spaces": ["error", {skipBlankLines: true}],
    "no-whitespace-before-property": "error",
    "object-curly-spacing": "error",
    "quotes": ["error", "single"],
    "semi": "error",
    "semi-spacing": "error",
    "space-before-blocks": "error",
    "space-before-function-paren": ["error", "never"],
    "space-in-parens": "error",
    "space-unary-ops": "error",
    "spaced-comment": "error",
    "switch-colon-spacing": "error",
    "template-tag-spacing": "error",
  },
};
