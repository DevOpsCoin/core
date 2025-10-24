# CONTRIBUTING.md

We welcome open-source contributions that improve **DevOpsCoin** — whether that’s the website, documentation, or developer tooling that supports the project.

---

## 🚀 Quickstart

### 1. Fork & clone

```bash
git clone https://github.com/YOUR-USERNAME/website-v2.git
cd website-v2
pnpm install
pnpm run dev
```

The site will start at [http://localhost:3000](http://localhost:3000).

---

### 2. Create a branch

Use a short, descriptive branch name:

```
feature/add-landing-animation
fix/header-alignment
docs/update-governance
```

---

### 3. Commit convention

Follow the [Conventional Commits](https://www.conventionalcommits.org/) format:

| Type        | Meaning                                  |
| ----------- | ---------------------------------------- |
| `feat:`     | new feature                              |
| `fix:`      | bug fix                                  |
| `docs:`     | documentation change                     |
| `chore:`    | tooling or dependency update             |
| `refactor:` | code improvement without behavior change |

Examples:

```bash
git commit -m "feat: add Ship-It Fund grant card component"
git commit -m "fix: wallet connect modal alignment"
```

---

## 🧹 Lint & Format

We use **ESLint v9 (flat config)** and **Prettier** for consistent quality.

Before committing:

```bash
pnpm run lint
pnpm run format
```

Pre-commit hooks automatically lint and format staged files.  
Fix all errors locally before pushing to avoid CI failures.

---

## ✅ Submitting a Pull Request

1. Push your branch to your fork
2. Open a PR against `main`
3. Confirm that your PR:
   - Passes `pnpm run verify`
   - Clearly describes the change and intent
   - References an issue, discussion, or proposal if relevant

Pull requests are reviewed for clarity, maintainability, and alignment with the project’s mission:  
**transparency, simplicity, and open DevOps culture.**

---

## ⚙️ Development Notes

- **Stack:** Next.js 15 + TypeScript + Tailwind + pnpm 10
- **Node version:** 22 (LTS)
- **OS:** macOS / Linux / WSL2
- Environment variables (`NEXT_PUBLIC_*`) are safe to expose and documented in `.env.example`.

---

## 📄 License

By contributing, you agree that your work is licensed under the **MIT License**.  
See [LICENSE](../LICENSE) for details.

---

**Maintained by**  
**RootSignal / DevOpsCoin Engineering**  
_Where pipelines meet protocols._
