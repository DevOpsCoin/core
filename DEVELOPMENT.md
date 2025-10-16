# Development Guide

This document explains how to set up, lint, format, and maintain code quality for the DevOpsCoin DApp (`website-v2`).

---

## Local Development Quickstart

### Requirements

- **Node.js:** v22.x (managed with `nvm`)
- **pnpm:** v10+ (`corepack enable && corepack prepare pnpm@latest --activate`)
- **macOS** or Linux (Windows WSL works too)

### One-time setup

```bash
# Install nvm (if not installed)
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
source ~/.zshrc   # or ~/.bashrc

# Use Node 22 everywhere
nvm install 22
nvm use 22
nvm alias default 22

# Enable corepack + pnpm
corepack enable
corepack prepare pnpm@latest --activate
```

### Project setup

```bash
# From repo root
pnpm install           # installs deps (respects lockfile)
pnpm run lint          # quick health check
pnpm run lint -- --fix # optional: auto-fix style/minor issues
pnpm run build         # Next.js production build
pnpm run dev           # start dev server (http://localhost:3000)
```

### Environment variables

Create a `.env.local` (not committed) if you need runtime envs. Typical vars used by the app:

```
NEXT_PUBLIC_SITE_URL=https://devopscoin.ai
NEXT_PUBLIC_BSC_RPC=https://bsc-dataseed.binance.org/
NEXT_PUBLIC_BSC_CHAIN_ID=56
# Add any other keys your features require
```

> In **Vercel**: set these under **Project → Settings → Environment Variables** for Production/Preview.

### Common scripts

```bash
pnpm run dev        # Next.js dev server
pnpm run build      # Next.js production build
pnpm run start      # start the built app
pnpm run lint       # ESLint (flat config, TS + React + Prettier)
pnpm run lint:fix   # ESLint + Prettier auto-fix
```

### Gotchas & tips

- If ESLint output looks stale or odd:
  ```bash
  rm -rf node_modules/.cache/eslint
  pnpm run lint
  ```
- If you switch Node versions:
  ```bash
  nvm use 22
  rm -rf node_modules pnpm-lock.yaml
  pnpm install
  ```
- Using the **App Router**: source code is in `app/`, plus `components/` and `lib/`. We intentionally **don’t lint** config/build output and `.d.ts` files for speed and signal-to-noise.

---

## Linting Overview

This project uses **ESLint v9 Flat Config** with TypeScript, React, and Prettier integration.

**Configuration file:**  
`eslint.config.js`

**Features:**

- TypeScript rules via `typescript-eslint`
- React & accessibility rules (`react`, `react-hooks`, `jsx-a11y`)
- Prettier formatting integration
- Smart `isCI` toggle to silence stylistic warnings in CI (Vercel/GitHub Actions)

---

## Commands

### Run all lint checks

```bash
pnpm run lint
```

Checks TypeScript, React, and formatting consistency.

### Auto-fix issues

```bash
pnpm run lint -- --fix
```

Fixes minor issues automatically (spacing, quotes, unused imports, etc.).

### Format only (Prettier)

```bash
pnpm exec prettier --write .
```

---

## CI Behavior

When running in Vercel or GitHub Actions, ESLint automatically detects `CI=true` and disables some noisy developer-time rules (like `no-explicit-any` and `no-unused-vars`) to keep builds clean.

| Environment | Behavior                                                    |
| ----------- | ----------------------------------------------------------- |
| Local       | Full lint rules active, warns about `any` and unused vars   |
| CI / Vercel | Simplified linting to prevent build noise or false failures |

---

## Common Warnings

| Rule                                 | Meaning                      | Suggested Fix                                             |
| ------------------------------------ | ---------------------------- | --------------------------------------------------------- |
| `@typescript-eslint/no-explicit-any` | You used `any` type          | Replace with a real interface or generic type if possible |
| `@typescript-eslint/no-unused-vars`  | Declared variable not used   | Remove it or prefix with `_` to silence                   |
| `react-hooks/exhaustive-deps`        | Hook dependencies incomplete | Add all state/props that the hook depends on              |
| `prettier/prettier`                  | Code style inconsistent      | Run Prettier or ESLint `--fix`                            |

---

## Recommended Workflow

1. **During development:**
   ```bash
   pnpm run lint
   pnpm run lint -- --fix
   ```
2. **Before pushing a branch:**
   ```bash
   pnpm exec prettier --check .
   pnpm run build
   ```
3. **If you get strange ESLint cache issues:**
   ```bash
   rm -rf node_modules/.cache/eslint
   pnpm run lint
   ```

---

## File Ignore Rules

The following paths are ignored by ESLint:

```
node_modules
.next
dist
coverage
public
postcss.config.js
tailwind.config.js
next.config.js
types/**/*.d.ts
```

---

## Editor Setup

**VS Code:**  
Install the following extensions:

- **ESLint** (Dirk Baeumer)
- **Prettier – Code Formatter**  
  Then add this to `.vscode/settings.json`:

```json
{
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "eslint.validate": ["typescript", "typescriptreact", "javascript", "javascriptreact"]
}
```

---

## Troubleshooting

| Problem                                              | Fix                                                                                                      |
| ---------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| “Parsing error: ESLint was configured to run on ...” | Make sure your `tsconfig.json` includes all source directories (`app`, `components`, `lib`).             |
| “A config object is using the 'globals' key”         | You’re running ESLint 9 — ensure your `eslint.config.js` uses `languageOptions.globals` instead.         |
| “module is not defined / process is not defined”     | Already fixed via global definitions in the config. If still appearing, re-run ESLint after cache clear. |

---

**Maintainer Note:**  
The lint setup is tuned for a modern Next.js 15 + TypeScript 5 stack.  
If you add new directories (e.g., `src/` or `utils/`), update the `files` array in `eslint.config.js`.

---
