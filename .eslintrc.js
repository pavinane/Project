module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: ["airbnb"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly"
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: "module"
  },
  plugins: ["react"],
  rules: {
    "react/prefer-stateless-function": 0,
    "import/no-named-as-default-member": 0,
    "import/no-named-as-default": 0,
    "react/prop-types": 0,
    "react/jsx-indent": 0,
    indent: 0,
    "max-classes-per-file": 0
  }
};
