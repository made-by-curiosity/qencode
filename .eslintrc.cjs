module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2020,
    sourceType: "module",
  },
  plugins: [
    "react-refresh",
    "react",
    "react-hooks",
    "@typescript-eslint",
    "prettier",
  ],
  rules: {
    "react/react-in-jsx-scope": "off",
    "react-refresh/only-export-components": [
      "warn",
      {
        allowConstantExport: true,
      },
    ],
    "linebreak-style": "off",
    "import/prefer-default-export": "off",
    "react/prop-types": "off",
    camelcase: "error",
    "react/jsx-props-no-spreading": "off",
    "children?: React.ReactNode": "off",
    "react-hooks/exhaustive-deps": "off",
    "react/display-name": "off",
    "react/require-default-props": "off",
    "react/destructuring-assignment": "off",
    "no-param-reassign": "off",
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto",
      },
      {
        indent: ["true", 2],
      },
    ],
  },
};
