module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
    commonjs: true,
    es6: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parserOptions: { ecmaVersion: "latest", sourceType: "module" },
  settings: { react: { version: "18.2" } },
  plugins: ["react-refresh"],
  rules: {
    "react/jsx-no-target-blank": "off",

    // "react/jsx-uses-vars": "error",
    // "react/jsx-uses-react": "error",
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
  },
  rules: {
    "no-unused-vars": [
      {
        "no-unused-vars": [
          "error",
          { vars: "all", args: "after-used", ignoreRestSiblings: false },
        ],
      },
    ],
    "react/prop-types": ["off"],
  },
};
