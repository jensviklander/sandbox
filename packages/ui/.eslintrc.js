/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: [
    "@repo/eslint-config/react-internal.js",
    // "plugin:vitest/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.lint.json",
    tsconfigRootDir: __dirname,
  },
  plugins: ["@typescript-eslint"],
  rules: {
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        vars: "all",
        args: "after-used",
        ignoreRestSiblings: true,
        caughtErrors: "none",
      },
    ],
  },
  ignorePatterns: ["vitest.setup.ts"],
  globals: {
    afterEach: "readonly",
    describe: "readonly",
    it: "readonly",
    expect: "readonly",
    vi: "readonly",
    screen: "off",
  },
};
