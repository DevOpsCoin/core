# CONTRIBUTING_INTERNAL.md

This guide defines internal contributor standards for the **DevOpsCoin DApp (website-v2)** repository.  
All maintainers and core collaborators should follow these rules to keep the repo stable, clean, and CI-compliant.

---

## 🧰 Local Setup

- **Node.js:** v22.x  
- **pnpm:** v10+ (`corepack enable && corepack prepare pnpm@latest --activate`)  
- **OS:** macOS, Linux, or WSL  

```bash
pnpm install
pnpm run dev
```

---

## 🧹 Code Quality & Hygiene

### Linting

Uses **ESLint v9 (Flat Config)** with:

- `typescript-eslint`
- `eslint-plugin-react`
- `eslint-plugin-react-hooks`
- `eslint-plugin-jsx-a11y`
- `eslint-plugin-prettier`

Run manually:

```bash
pnpm run lint
pnpm run lint -- --fix
```

### Formatting

Handled by **Prettier** with a unified config.  
To format everything:

```bash
pnpm run format
```

---

## 🧩 Pre-commit Hooks (Husky v10)

All commits trigger **Husky + lint-staged**:

- Runs ESLint autofix on staged TS/JS/React files  
- Runs Prettier on Markdown, JSON, and YAML  
- Skips large report files and build artifacts  

Manually run:

```bash
pnpm exec lint-staged
```

If Husky isn’t running:

```bash
pnpm run prepare
chmod +x .husky/pre-commit .husky/husky.sh
```

---

## 🧱 Branching & Commits

### Branch Naming

| Type    | Format Example               |
| -------- | ---------------------------- |
| Feature | `feature/shipit-ui-update`   |
| Fix     | `fix/wallet-connect-timeout` |
| Chore   | `chore/update-husky-v10`     |
| Docs    | `docs/update-readme`         |

### Commit Format

Follow **Conventional Commits**:

| Type        | Description               |
| ------------ | ------------------------- |
| `feat:`     | New feature               |
| `fix:`      | Bug fix                   |
| `chore:`    | Tooling or dependency     |
| `docs:`     | Documentation             |
| `test:`     | Adds or updates tests     |
| `refactor:` | Internal code improvement |
| `style:`    | Non-functional formatting |

Example:

```bash
git commit -m "feat: add Ship-It Fund dashboard section"
```

---

## 🧪 CI Verification

Before pushing:

```bash
pnpm run verify
```

This runs:

- `eslint` with `--max-warnings=0`
- `prettier --check .`
- `next build`

In CI (Vercel or GitHub Actions):

- Warnings are ignored only for stylistic rules  
- Errors always block deployment  

---

## 🧭 Review Guidelines

Every PR must:

- Be small and atomic (≤300 LOC preferred)  
- Pass all local checks  
- Include a clear title and description  
- Follow Conventional Commit message rules  
- Reference related issues or tickets  

Use **squash merges** to keep `main` history clean.

---

## 🔧 Troubleshooting

| Problem                        | Solution                                               |
| ------------------------------ | ------------------------------------------------------ |
| “husky – DEPRECATED”           | Ensure `husky.sh` path is `.husky/husky.sh`, not `._/` |
| ESLint cache weirdness         | `rm -rf node_modules/.cache/eslint`                    |
| “no-undef” for console/process | Confirm globals in `eslint.config.js`                  |
| Prettier not auto-fixing       | Run `pnpm exec prettier --write .` manually            |
| Hook not firing                | `chmod +x .husky/pre-commit`                           |

---

**Maintainer Note:**  
This internal guide extends the public [CONTRIBUTING.md](../../.github/CONTRIBUTING.md) and [DEVELOPMENT.md](../../docs/DEVELOPMENT.md).  
It defines the enforcement layer that keeps the DevOpsCoin codebase production-ready.

Maintained by **RootSignal / DevOpsCoin Engineering**

_Last updated: October 2025_
