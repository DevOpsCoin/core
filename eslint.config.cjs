// Flat ESLint config for ESLint v9+ mapped from .eslintrc.cjs
// This file enables TypeScript and React parsing and applies project rules.

const tsPlugin = require('@typescript-eslint/eslint-plugin')
const reactPlugin = require('eslint-plugin-react')
const reactHooks = require('eslint-plugin-react-hooks')
const jsxA11y = require('eslint-plugin-jsx-a11y')
const prettier = require('eslint-plugin-prettier')

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
			prettier: prettier,
		},
		settings: { react: { version: 'detect' } },
		rules: {
			'@typescript-eslint/no-explicit-any': 'warn',
			'react/react-in-jsx-scope': 'off',
			'react/prop-types': 'off',
			'prettier/prettier': 'warn',
		},
	},
]
