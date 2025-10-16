// eslint.config.js – Flat config for ESLint v9 + Next 15 + TypeScript + Prettier + CI toggle

import js from "@eslint/js";
import tseslint from "typescript-eslint";
import reactPlugin from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import jsxA11y from "eslint-plugin-jsx-a11y";
import prettier from "eslint-plugin-prettier";

const isCI = process.env.CI === "true";

export default [
  {
    ignores: [
      "node_modules",
      ".next",
      "dist",
      "out",
      "coverage",
      "public",
      "build",
      "postcss.config.js",
      "tailwind.config.js",
      "next.config.js",
      "eslint.config.js",
      "*.config.cjs",
      "types/**/*.d.ts",
    ],
  },
  ...tseslint.configs.recommended,
  js.configs.recommended,
  {
    files: ["**/*.{ts,tsx,js,jsx}"],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: { tsconfigRootDir: import.meta.dirname },
      globals: {
        React: "readonly",
        alert: "readonly",
        console: "readonly",
        process: "readonly",
        module: "readonly",
        require: "readonly",
        window: "readonly",
        document: "readonly",
        localStorage: "readonly",
        fetch: "readonly",
        Response: "readonly",
        Request: "readonly",
        Headers: "readonly",
      },
    },
    plugins: {
      react: reactPlugin,
      "react-hooks": reactHooks,
      "jsx-a11y": jsxA11y,
    },
    rules: {
      // Base lint rules
      "no-unused-vars": "off",
      "react/react-in-jsx-scope": "off",
      "react-hooks/exhaustive-deps": "warn",
      "jsx-a11y/anchor-is-valid": "off",

      // TypeScript rules
      "@typescript-eslint/no-empty-object-type": "off",
      "@typescript-eslint/no-wrapper-object-types": "off",
      "@typescript-eslint/ban-ts-comment": "warn",
      "@typescript-eslint/triple-slash-reference": "off",
      "@typescript-eslint/no-unsafe-function-type": "warn",

      // Conditional rules depending on environment
      "@typescript-eslint/no-explicit-any": isCI ? "off" : "warn",
      "@typescript-eslint/no-unused-vars": isCI
        ? "off"
        : ["warn", { argsIgnorePattern: "^_", varsIgnorePattern: "^_" }],
    },
  },
  // ✅ Add Prettier plugin last so it runs after all other rules
  {
    files: ["**/*.{ts,tsx,js,jsx}"],
    plugins: { prettier },
    rules: { "prettier/prettier": "warn" },
  },
];
