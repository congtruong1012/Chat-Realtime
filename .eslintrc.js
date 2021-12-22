const fs = require("fs");
const path = require("path");

const prettierOptions = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, ".prettierrc"), "utf8"),
);

module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: ["plugin:react/recommended", "plugin:import/recommended", "airbnb"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 13,
    sourceType: "module",
  },
  plugins: ["react", "prettier", "import"],
  rules: {
    "prettier/prettier": ["error", prettierOptions],
    "prefer-template": 2,
    quotes: ["error", "double"],
    "object-curly-newline": 0,
    "no-param-reassign": [
      "error",
      {
        props: false,
      },
    ],
  },
};
