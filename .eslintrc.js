module.exports = {
  env: {
    browser: true,
    es2020: true,
    node: true,
  },
  extends: ["eslint:recommended", "plugin:react/recommended"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    indent: ["error", 2],
    "linebreak-style": 0,
    quotes: ["error", "double"],
    semi: ["error", "always"],
  },
};
