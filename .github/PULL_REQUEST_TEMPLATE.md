# PULL_REQUEST_TEMPLATE.md

# Pull Request Template

Thank you for contributing to **DevOpsCoin**.  
Please review the checklist below before submitting your PR.

---

## 🧩 Summary

> Briefly describe the change:

- What does this PR add, fix, or improve?
- Why is it needed?

Example:

> Adds a new Ship-It Fund grant section and updates the governance page for Solana vesting transparency.

---

## ✅ PR Checklist

### Code & Lint

- [ ] Code compiles and runs locally
- [ ] Ran `pnpm run lint` and fixed all warnings/errors
- [ ] Ran `pnpm run format` (Prettier)
- [ ] Passed `pnpm run verify` (lint + build)

### Commit & Branch Hygiene

- [ ] Commit messages follow **Conventional Commits** (`feat:`, `fix:`, `chore:`, `docs:`)
- [ ] Branch name follows convention (`feature/...`, `fix/...`, `chore/...`)
- [ ] Each commit is focused (prefer squash merges)

### Tests / Behavior

- [ ] Verified behavior manually in the browser
- [ ] Added or updated tests where appropriate
- [ ] Confirmed no regressions introduced

### Documentation

- [ ] Updated relevant docs (`README.md`, `DEVELOPMENT.md`, or `CONTRIBUTING.md`)
- [ ] Added inline code comments where useful

---

## 🧠 Additional Context (Optional)

Include screenshots, console logs, or notes that will help reviewers understand your change:

```
Example output:
> Ship-It Fund allocation displayed correctly
> All environment variables validated
```

---

**Maintainers:**  
Verify this PR passes CI checks and follows the internal contributor standards outlined in [`CONTRIBUTING_INTERNAL.md`](../docs/handbook/CONTRIBUTING_INTERNAL.md).

_Maintained by RootSignal / DevOpsCoin Engineering_
