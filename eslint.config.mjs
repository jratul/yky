import { createRequire } from "module";

const require = createRequire(import.meta.url);
const nextConfig = require("eslint-config-next/core-web-vitals");

/** @type {import("eslint").Linter.Config[]} */
export default [
  ...nextConfig,
  {
    rules: {
      // 미사용 변수: _ 접두사 허용
      "@typescript-eslint/no-unused-vars": [
        "warn",
        { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
      ],
      // any 타입 경고
      "@typescript-eslint/no-explicit-any": "warn",
    },
  },
];
