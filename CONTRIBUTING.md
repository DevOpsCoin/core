# CONTRIBUTING.md

We welcome open-source contributions that improve **DevOpsCoin** — whether that’s the DApp, documentation, or developer experience.

---

## Quickstart

### 1. Fork & clone

```bash
git clone https://github.com/YOUR-USERNAME/website-v2.git
cd website-v2
pnpm install
pnpm run dev
```

### 2. Create a branch

Use a short, descriptive name:

```
feature/add-nft-banner
fix/wallet-timeout
```

### 3. Commit convention

Follow [Conventional Commits](https://www.conventionalcommits.org/):

| Type      | Meaning                                  |
| --------- | ---------------------------------------- |
| feat:     | new feature                              |
| fix:      | bug fix                                  |
| docs:     | documentation change                     |
| chore:    | tooling or dependency update             |
| refactor: | code improvement without behavior change |

Examples:

```bash
git commit -m "feat: add Ship-It NFT mint page"
git commit -m "fix: correct RPC chain ID handling"
```

---

## Lint & Format

We use **ESLint v9 (flat config)** and **Prettier** for code quality.

Run before committing:

```bash
pnpm run lint
pnpm run format
```

Pre-commit hooks automatically format and lint your code.  
If you see an error, fix it before pushing.

---

## Submitting a Pull Request

1. Push your branch to your fork
2. Open a PR against `main`
3. Ensure your PR:
   - Passes `pnpm run verify`
   - Describes the change clearly
   - References an issue if applicable

---

## License

By contributing, you agree that your work is licensed under the **MIT License**.  
See [LICENSE](./LICENSE) for details.

---

**Maintained by:**  
**RootSignal / DevOpsCoin Engineering**  
_Where pipelines meet protocols._
