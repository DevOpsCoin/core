# Development Guide

This guide explains how to set up, lint, format, and maintain code quality for the **DevOpsCoin DApp (`website-v2`)**.  
It’s meant to keep development fast, predictable, and consistent across contributors.

> **Note:**  
> Blockchain deployment (Solana contracts, NFT minting, vesting logic) is deferred.  
> This document applies only to DApp and website development.

---

## Local Development Quickstart

### Requirements

- **Node.js:** v22.x (use `nvm` for version management)
- **pnpm:** v10+ (`corepack enable && corepack prepare pnpm@latest --activate`)
- **macOS** or Linux (Windows WSL supported)

### One-Time Setup

```bash
# Install nvm (if not installed)
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
source ~/.zshrc   # or ~/.bashrc

# Use Node 22 everywhere
nvm install 22
nvm use 22
nvm alias default 22

# Enable corepack and pnpm
corepack enable
corepack prepare pnpm@latest --activate
```

### Project Setup

```bash
# From repository root
pnpm install
pnpm run lint
pnpm run lint -- --fix
pnpm run build
pnpm run dev
```

App runs at [http://localhost:3000](http://localhost:3000).

### Environment Variables

Create `.env.local` (not committed) for runtime configuration:

```env
NEXT_PUBLIC_SITE_URL=https://devopscoin.ai
NEXT_PUBLIC_TOKEN_ADDRESS=YourTokenAddressHere
NEXT_PUBLIC_NETWORK=solana
NEXT_PUBLIC_SOLANA_RPC=https://api.mainnet-beta.solana.com
```

In **Vercel**, define these under **Project → Settings → Environment Variables** for both Production and Preview.

---

## Docker & Devcontainer (Optional)

For reproducible environments or backend-related work, Docker and VS Code Devcontainers are supported.

| File                              | Purpose                                      |
| --------------------------------- | -------------------------------------------- |
| `docker-compose.yml`              | Defines `web` (Next app) and `db` (Postgres) |
| `Dockerfile`                      | Multi-stage build for development            |
| `.env.docker.example`             | Example environment variables                |
| `.devcontainer/devcontainer.json` | VS Code devcontainer configuration           |

### Quickstart

```bash
cp .env.docker.example .env.docker
docker compose up --build
```

Access the app at [http://localhost:3000](http://localhost:3000).

---

## Pre-Commit Automation

Code consistency is enforced through **Husky v10**, **lint-staged**, **Prettier**, and **ESLint**.

### Behavior

Each commit automatically:

- Runs `eslint --fix` on staged `.ts`, `.tsx`, `.js`, `.jsx` files
- Runs `prettier --write` on staged `.md`, `.json`, `.yaml` files
- Skips build outputs and generated artifacts

To run manually:

```bash
pnpm exec lint-staged
```

### Hook Structure

```text
.husky/
 ├── husky.sh
 └── pre-commit
```

If hooks fail to trigger, re-enable permissions:

```bash
pnpm run prepare
chmod +x .husky/pre-commit .husky/husky.sh
```

---

## Linting & Formatting

**ESLint v9 (Flat Config)** + **TypeScript** + **React** + **Prettier**  
Configuration: `eslint.config.js`

Features include:

- TypeScript rules via `typescript-eslint`
- React + accessibility checks (`react`, `react-hooks`, `jsx-a11y`)
- Prettier integration for unified formatting
- CI-aware mode that suppresses stylistic noise in automation

### Common Commands

```bash
pnpm run lint              # run all lint checks
pnpm run lint -- --fix     # auto-fix issues
pnpm exec prettier --write .  # format all files
pnpm run verify            # lint + build verification
```

---

## CI Behavior

### In Local Development

- All lint rules active, including stylistic warnings.

### In CI (Vercel / GitHub Actions)

- Style-only warnings are suppressed for cleaner output.
- Failing rules or build errors always block deploys.

---

## Common Lint Warnings

| Rule                                 | Meaning                      | Suggested Fix                           |
| ------------------------------------ | ---------------------------- | --------------------------------------- |
| `@typescript-eslint/no-explicit-any` | Generic `any` type used      | Replace with typed interface or generic |
| `@typescript-eslint/no-unused-vars`  | Unused variable              | Remove or prefix with `_`               |
| `react-hooks/exhaustive-deps`        | Hook dependencies incomplete | Add all referenced state and props      |
| `prettier/prettier`                  | Formatting inconsistency     | Run Prettier or ESLint `--fix`          |

---

## Workflow Recommendations

1. During development:

   ```bash
   pnpm run lint
   pnpm run lint -- --fix
   ```

2. Before pushing:

   ```bash
   pnpm exec prettier --check .
   pnpm run build
   ```

3. If cache issues occur:

   ```bash
   rm -rf node_modules/.cache/eslint
   pnpm run lint
   ```

---

## Team Conventions

### Commit Message Format

Follow **Conventional Commits**:

| Type        | Meaning                     |
| ----------- | --------------------------- |
| `feat:`     | New feature                 |
| `fix:`      | Bug fix                     |
| `chore:`    | Maintenance or tooling      |
| `docs:`     | Documentation update        |
| `test:`     | Adds or updates tests       |
| `refactor:` | Code restructuring          |
| `style:`    | Formatting or stylistic fix |

Example:

```bash
git commit -m "feat: add Ship-It Fund dashboard component"
```

### Branch Naming

| Type    | Format Example                  |
| ------- | ------------------------------- |
| Feature | `feature/shipit-fund-dashboard` |
| Fix     | `fix/wallet-connect-timeout`    |
| Chore   | `chore/dependency-updates`      |
| Docs    | `docs/readme-update`            |

---

## Editor Configuration

Consistency across environments is maintained using VS Code settings and `.editorconfig`.

### Files

- `.vscode/settings.json`
- `.vscode/extensions.json`
- `.editorconfig`

These enforce:

- Auto-format and fix on save
- LF line endings, 2-space indentation
- Tailwind IntelliSense (`clsx()` and `cn()`)
- Markdown linting
- Ignored build artifacts in search (`.next`, `dist`, etc.)

---

### Recommended VS Code Extensions

| Purpose              | Extension                                                                                                                                                                                                 |
| -------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Linting              | [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)                                                                                                                      |
| Formatting           | [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)                                                                                                                    |
| TypeScript / Next.js | [TypeScript Next](https://marketplace.visualstudio.com/items?itemName=ms-vscode.vscode-typescript-next)                                                                                                   |
| Styling              | [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)                                                                                                |
| Docs                 | [Markdown All in One](https://marketplace.visualstudio.com/items?itemName=yzhang.markdown-all-in-one), [MarkdownLint](https://marketplace.visualstudio.com/items?itemName=davidanson.vscode-markdownlint) |
| Git                  | [GitLens](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens)                                                                                                                            |
| Config               | [YAML](https://marketplace.visualstudio.com/items?itemName=redhat.vscode-yaml), [EditorConfig](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)                             |

---

### Other Editors

The `.editorconfig` file ensures consistent indentation, newline, and spacing rules across any EditorConfig-compatible IDE (JetBrains, Vim, etc.).

---

**Maintainer Note:**  
The stack targets **Next.js 15**, **TypeScript 5**, and **Node 22** using **Husky v10**.  
When new directories or Solana modules are added, update `eslint.config.js`, `tsconfig.json`, and `lint-staged` accordingly.

_Last Updated: October 2025 — Development Standards Refinement_
