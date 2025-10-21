# Development Guide

This document explains how to set up, lint, format, and maintain code quality for the **DevOpsCoin DApp (`website-v2`)**.

> **Note:**  
> Blockchain deployment (Solana contracts, NFT minting, and vesting logic) is temporarily deferred.  
> This guide covers the DApp and website development environment only.

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

```env
NEXT_PUBLIC_SITE_URL=https://devopscoin.ai
NEXT_PUBLIC_TOKEN_ADDRESS=YourTokenAddressHere
NEXT_PUBLIC_NETWORK=solana
NEXT_PUBLIC_SOLANA_RPC=https://api.mainnet-beta.solana.com
# Add other feature flags or analytics keys as needed
```

> In **Vercel**: set these under **Project → Settings → Environment Variables** for Production/Preview.

---

## Docker & VS Code Devcontainer (local dev)

This repo includes a small Docker Compose setup and a VS Code devcontainer to make local onboarding reproducible and simple.  
Use this when you want an environment that mirrors the app plus a local Postgres instance.

> Note: The local Postgres + Docker setup is optional.  
> It’s not required for static website or wallet-connect development — only for backend or admin analytics work.

Files of interest:

- `docker-compose.yml` — starts `web` (Next app) and `db` (Postgres)
- `Dockerfile` — multi-stage build; compose runs the `web` service in development mode
- `.env.docker.example` — example env values for Docker Compose
- `.devcontainer/devcontainer.json` — VS Code devcontainer config (uses the compose file)

Quickstart (Docker Compose)

```bash
# Copy example env (do not commit the resulting file)
cp .env.docker.example .env.docker

# Build and start (development mode with live reload)
docker compose up --build

# Open http://localhost:3000
```

---

## Pre-commit Automation

The project enforces consistent quality via **Husky v10 + lint-staged + Prettier + ESLint**.

**Husky** runs automatically on every commit and triggers `lint-staged`, which:

- Runs `eslint --fix` on staged `.ts`, `.tsx`, `.js`, `.jsx` files
- Runs `prettier --write` on staged Markdown, JSON, YAML, etc.
- Ignores build artifacts and reports (`eslint-report.json`, `eslint-summary.json`, `pnpm-lock.yaml`)

### Hook Layout

```text
.husky/
 ├── husky.sh          # environment loader
 └── pre-commit        # runs lint-staged
```

### Run manually

```bash
pnpm exec lint-staged
```

### Test the hook

```bash
echo "const foo={bar:'baz'}" >> app/test.tsx
git add app/test.tsx
git commit -m "test: verify pre-commit formatting"
```

---

## Linting Overview

This project uses **ESLint v9 Flat Config** with TypeScript, React, and Prettier integration.

**Configuration file:**  
`eslint.config.js`

**Features:**

- TypeScript rules via `typescript-eslint`
- React + a11y rules (`react`, `react-hooks`, `jsx-a11y`)
- Prettier formatting integration
- Smart `isCI` toggle to silence stylistic warnings in CI (Vercel/GitHub Actions)

---

## Commands

### Run all lint checks

```bash
pnpm run lint
```

### Auto-fix issues

```bash
pnpm run lint -- --fix
```

### Format only (Prettier)

```bash
pnpm exec prettier --write .
```

### Verify build & lint

```bash
pnpm run verify
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

## Team Conventions

### Commit Message Format

All commits must follow the **Conventional Commits** style:

| Type        | Meaning                                      |
| ----------- | -------------------------------------------- |
| `feat:`     | New feature                                  |
| `fix:`      | Bug fix                                      |
| `chore:`    | Maintenance or tooling change                |
| `docs:`     | Documentation update                         |
| `test:`     | Adds or updates tests                        |
| `refactor:` | Code restructuring without behavior change   |
| `style:`    | Formatting or stylistic fix (non-functional) |

Example:

```bash
git commit -m "feat: add Ship-It Fund dashboard component"
```

### Branch Naming

| Branch Type | Format Example                  |
| ----------- | ------------------------------- |
| Feature     | `feature/shipit-fund-dashboard` |
| Fix         | `fix/wallet-connect-timeout`    |
| Chore       | `chore/dependency-updates`      |
| Docs        | `docs/readme-update`            |

---

## 🧠 Editor & Environment Setup

To ensure consistent formatting, linting, and developer experience across contributors, this project includes VS Code workspace settings and EditorConfig.

### Recommended Setup

1. Install **Visual Studio Code**
2. When you open the project, VS Code will automatically prompt:
   > “This workspace has recommended extensions. Would you like to install them?”
3. Click **“Install All”** to apply consistent tools for linting, formatting, and Tailwind completion.

---

### 🧩 VS Code Configuration

**Files:**

- `.vscode/settings.json`
- `.vscode/extensions.json`
- `.editorconfig`

These files ensure:

- **Auto-format on save** using Prettier
- **Auto-fix on save** via ESLint v9 flat config
- **Consistent LF endings, 2-space indentation, trailing newline**
- **Tailwind IntelliSense** inside `clsx()` and `cn()` functions
- **Markdown linting** for project documentation
- **Ignored build artifacts** in file search (`.next`, `dist`, etc.)

---

### ✅ Recommended Extensions

| Purpose              | Extension                                                                                                                                                                                                 |
| -------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Linting              | [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)                                                                                                                      |
| Formatting           | [Prettier – Code Formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)                                                                                                   |
| TypeScript & Next.js | [TypeScript Next](https://marketplace.visualstudio.com/items?itemName=ms-vscode.vscode-typescript-next)                                                                                                   |
| Styling              | [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)                                                                                                |
| Docs                 | [Markdown All in One](https://marketplace.visualstudio.com/items?itemName=yzhang.markdown-all-in-one), [MarkdownLint](https://marketplace.visualstudio.com/items?itemName=davidanson.vscode-markdownlint) |
| Git                  | [GitLens](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens)                                                                                                                            |
| Config               | [YAML](https://marketplace.visualstudio.com/items?itemName=redhat.vscode-yaml), [EditorConfig](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)                             |

---

### 🧩 Non-VS Code Editors

This project also includes `.editorconfig` which enforces the same indentation, newline, and spacing rules in JetBrains IDEs, Vim, or other editors that support EditorConfig.

---

**Maintainer Note:**  
The lint setup is tuned for a modern **Next.js 15 + TypeScript 5 + Node 22** stack with **Husky v10**.  
If you add new directories (e.g., `src/`, `utils/`, or Solana-specific modules later), update `eslint.config.js` and `tsconfig.json` accordingly.
