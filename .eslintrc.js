module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  plugins: [
    "prettier",
    "@typescript-eslint",
    "simple-import-sort"
  ],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  rules: {
    indent: "off",
    "simple-import-sort/imports": [
      2,
      {
        groups: [
          ["^\u0000"], // all side-effects (0 at start)
          ["\u0000$", "^@polkadot.*\u0000$", "^\\..*\u0000$"], // types (0 at end)
          ["^[^/\\.]"], // non-polkadot
          ["^@polkadot"], // polkadot
          [
            "^\\.\\.(?!/?$)",
            "^\\.\\./?$",
            "^\\./(?=.*/)(?!/?$)",
            "^\\.(?!/?$)",
            "^\\./?$",
          ], // local (. last)
        ],
      },
    ],
  },
};
