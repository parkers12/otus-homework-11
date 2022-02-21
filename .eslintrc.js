module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["airbnb-base", "prettier"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 13,
    sourceType: "module",
  },
  plugins: ["@typescript-eslint"],
  rules: {
    "import/extensions": ["error"],
    "max-len": [
      "error",
      {
        ignoreComments: true,
      },
    ],
  },
  settings: {
    "import/resolver": {
      node: {
        extensions: [".ts", ".js"],
      },
    },
  },
};
