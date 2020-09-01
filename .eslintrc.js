const LEVEL = {
  OFF: 0, // 关闭规则
  WARN: 1, // 将规则视为一个警告（不会影响退出码）
  ERROR: 2 // 将规则视为一个错误 (退出码为 1)
};

module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ["plugin:react/recommended", "standard"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: "module"
  },
  plugins: ["react", "@typescript-eslint"],
  rules: {
    semi: [LEVEL.ERROR, "always"],
    quotes: [LEVEL.ERROR, "double"],
    indent: [LEVEL.ERROR, 2, { ignoreComments: false }],
    "spaced-comment": [LEVEL.ERROR, "always"],
    "line-comment-position": [
      LEVEL.ERROR,
      {
        position: "above"
      }
    ]
  }
};
