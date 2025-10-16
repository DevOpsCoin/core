// lint-staged.config.mjs
// Safe Husky + lint-staged setup for ESLint v9 + Prettier

import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default {
  // TypeScript and React sources
  "*.{ts,tsx,js,jsx}": (filenames) => {
    const files = filenames
      // exclude config and lint-staged files
      .filter(
        (file) =>
          !file.includes("eslint.config.js") &&
          !file.includes("lint-staged.config.mjs")
      )
      .map((file) => path.relative(__dirname, file));

    if (files.length === 0) return [];

    return [
      `pnpm exec eslint --no-warn-ignored --max-warnings=0 --fix ${files.join(" ")}`,
      ...files.map((file) => `pnpm exec prettier --write ${file}`),
    ];
  },

  // JSON, Markdown, YAML — but skip ESLint reports and lockfiles
  "*.{md,json,yml,yaml}": (filenames) => {
    const files = filenames
      .filter(
        (file) =>
          !file.includes("eslint-report.json") &&
          !file.includes("eslint-summary.json") &&
          !file.includes("pnpm-lock.yaml")
      )
      .map((file) => path.relative(__dirname, file));

    return files.map((file) => `pnpm exec prettier --write ${file}`);
  },
};

