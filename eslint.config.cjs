// eslint.config.cjs
// Next.js + TypeScript + Prettier unified config for ESLint v9+

const tsPlugin = require('@typescript-eslint/eslint-plugin');
const reactPlugin = require('eslint-plugin-react');
const reactHooks = require('eslint-plugin-react-hooks');
const jsxA11y = require('eslint-plugin-jsx-a11y');
const prettier = require('eslint-plugin-prettier');
const nextPlugin = require('@next/eslint-plugin-next');

module.exports = [
  {
    ignores: [
      'node_modules',
      '.next',
      'dist',
      'out',
      'coverage',
      'public',
      'build',
      'types/**/*.d.ts',
    ],
  },
  {
    files: ['**/*.{ts,tsx,js,jsx}'],
    languageOptions: {
      parser: require('@typescript-eslint/parser'),
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: { jsx: true },
      },
    },
    plugins: {
      '@typescript-eslint': tsPlugin,
      react: reactPlugin,
      'react-hooks': reactHooks,
      'jsx-a11y': jsxA11y,
      prettier,
      next: nextPlugin,
    },
    settings: { react: { version: 'detect' } },
    rules: {
      //
      // --- TypeScript
      //
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          varsIgnorePattern: '^_',
          argsIgnorePattern: '^_',
        },
      ],

      //
      // --- React
      //
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
      'react-hooks/exhaustive-deps': 'warn',

      //
      // --- Next.js
      //
      'next/no-img-element': 'off',

      //
      // --- Prettier (syncs with .prettierrc)
      //
      'prettier/prettier': [
        'warn',
        {
          semi: true,
          singleQuote: true,
          trailingComma: 'es5',
          printWidth: 80,
          endOfLine: 'lf',
        },
      ],
    },
  },
];

