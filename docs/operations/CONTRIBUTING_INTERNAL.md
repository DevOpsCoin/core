# Internal Contributor Standards

This guide defines contributor and maintainer standards for the **DevOpsCoin DApp (`website-v2`)** repository.  
All collaborators should follow these rules to keep the codebase stable, consistent, and easy to maintain.

---

## Local Setup

- **Node.js:** v22.x
- **pnpm:** v10+ (`corepack enable && corepack prepare pnpm@latest --activate`)
- **OS:** macOS, Linux, or WSL

```bash
pnpm install
pnpm run dev
```

Use the same toolchain versions defined in `.nvmrc` and `package.json` to avoid dependency drift.

---

## Code Quality & Hygiene

### Linting

The project uses **ESLint v9 (Flat Config)** with the following plugins:

- `@typescript-eslint/eslint-plugin`
- `eslint-plugin-react`
- `eslint-plugin-react-hooks`
- `eslint-plugin-jsx-a11y`
- `eslint-plugin-prettier`

Run checks manually:

```bash
pnpm run lint
pnpm run lint -- --fix
```

### Formatting

All source files follow the unified **Prettier** configuration for formatting consistency:

```bash
pnpm run format
```

Linting and formatting must pass before merging to `main`.

---

## Pre-Commit Hooks (Husky v10)

Commits are automatically validated through **Husky + lint-staged**.  
Each staged change triggers:

- ESLint autofix on `.ts`, `.tsx`, and `.js` files
- Prettier formatting on `.md`, `.json`, and `.yaml` files
- Build outputs and generated assets are skipped

To run manually:

```bash
pnpm exec lint-staged
```

If Husky isn’t triggering correctly:

```bash
pnpm run prepare
chmod +x .husky/pre-commit .husky/husky.sh
```

---

## Branching & Commits

### Branch Naming

| Type    | Example                      | Purpose                |
| ------- | ---------------------------- | ---------------------- |
| Feature | `feature/shipit-ui-update`   | New functionality      |
| Fix     | `fix/wallet-connect-timeout` | Bug fix                |
| Chore   | `chore/update-husky-v10`     | Tooling or maintenance |
| Docs    | `docs/update-readme`         | Documentation updates  |

### Commit Format

Follow **Conventional Commits** to maintain semantic consistency:

| Type        | Description               |
| ----------- | ------------------------- |
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

## CI Verification

Before pushing changes:

```bash
pnpm run verify
```

This runs:

- ESLint with `--max-warnings=0`
- Prettier formatting check
- Next.js build verification

### In Continuous Integration

- **Stylistic warnings** are tolerated; functional errors block deployment.
- **CI workflows** mirror local `verify` commands for consistent enforcement.

---

## Review Guidelines

All pull requests should:

- Be **small and atomic** (≤300 LOC recommended)
- Pass all local checks before submission
- Include a clear title and purpose statement
- Follow **Conventional Commit** rules
- Reference any related issues or proposals

All merges use **squash merging** to keep the `main` branch history clean and linear.

---

## Troubleshooting

| Problem                        | Solution                                 |
| ------------------------------ | ---------------------------------------- |
| Husky deprecated warning       | Verify `.husky/husky.sh` path is correct |
| ESLint cache issues            | `rm -rf node_modules/.cache/eslint`      |
| `no-undef` for console/process | Confirm globals in `eslint.config.js`    |
| Prettier not formatting        | `pnpm exec prettier --write .`           |
| Hook not running               | `chmod +x .husky/pre-commit`             |

---

**Maintainer Note:**  
This internal guide extends [CONTRIBUTING.md](../../.github/CONTRIBUTING.md) and [DEVELOPMENT.md](./DEVELOPMENT.md).  
It defines the **engineering standards** that keep the DevOpsCoin codebase production-ready — pragmatic, predictable, and consistent.

Maintained by **RootSignal / DevOpsCoin Engineering**  
_Last Updated: October 2025 — Engineering Standards Refinement_
