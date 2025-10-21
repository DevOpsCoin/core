// lint-staged.config.mjs
// Robust setup for Husky v10 + ESLint v9 + Prettier 3

import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default {
  // TypeScript and React source files
  '*.{ts,tsx,js,jsx}': (filenames) => {
    const files = filenames
      // Exclude config & utility files that shouldn’t be linted
      .filter(
        (file) =>
          !file.includes('eslint.config.js') &&
          !file.includes('lint-staged.config.mjs') &&
          !file.includes('postcss.config.js') &&
          !file.includes('tailwind.config.js') &&
          !file.includes('next.config.mjs') &&
          !file.includes('next.config.js')
      )
      .map((file) => path.relative(__dirname, file));

    if (files.length === 0) return [];

    return [
      // Run ESLint (auto-fix)
      `pnpm exec eslint --no-warn-ignored --fix ${files.join(' ')}`,
      // Run Prettier after ESLint
      `pnpm exec prettier --write ${files.join(' ')}`,
    ];
  },

  // Markdown, JSON, YAML — formatted only
  '*.{md,json,yml,yaml}': (filenames) => {
    const files = filenames
      .filter(
        (file) =>
          !file.includes('eslint-report.json') &&
          !file.includes('eslint-summary.json') &&
          !file.includes('pnpm-lock.yaml')
      )
      .map((file) => path.relative(__dirname, file));

    if (files.length === 0) return [];

    return [`pnpm exec prettier --write ${files.join(' ')}`];
  },
};
