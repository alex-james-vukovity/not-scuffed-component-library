module.exports = {
  rules: {
    "type-enum": [
      2,
      "always",
      ["feat", "refactor", "fix", "docs", "test", "config"],
    ],
    "type-empty": [2, "never"],
    "type-case": [2, "always", "lower-case"],
  },
}
