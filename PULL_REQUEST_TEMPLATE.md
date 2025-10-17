# Pull Request Template

Thank you for contributing to **DevOpsCoin** 🛠️  
Please review the checklist below before submitting your PR.

---

## 🧩 Summary

> Briefly describe the change:

- What does this PR add, fix, or improve?
- Why is it needed?

Example:

> Adds a new Ship-It NFT minting UI page and refactors the existing token card to use wagmi v2 hooks.

---

## ✅ PR Checklist

### Code & Lint

- [ ] My code compiles and runs locally
- [ ] I ran `pnpm run lint` and fixed all warnings/errors
- [ ] I ran `pnpm run format` (Prettier)
- [ ] My code passes `pnpm run verify` (lint + build)

### Commit & Branch Hygiene

- [ ] Commit messages follow **Conventional Commits** (`feat:`, `fix:`, `chore:`, `docs:`)
- [ ] Branch name follows repo convention (e.g., `feature/...`, `fix/...`, `chore/...`)
- [ ] Each commit is focused (prefer squash merges)

### Tests / Behavior

- [ ] I manually verified the feature in the browser or console
- [ ] I added or updated unit tests if applicable
- [ ] No regressions were introduced

### Documentation

- [ ] Updated `README.md` / `DEVELOPMENT.md` / `CONTRIBUTING.md` if relevant
- [ ] Added inline code comments where useful

---

## 🧠 Additional Context (Optional)

Add screenshots, console output, or notes that will help reviewers understand your change:

```
Example output:
> Ship-It NFT minted successfully
> Transaction hash: 0x48D5C591BEcB594D334b167e89853Fd8b8ddc56e
```

---

**Maintainers:**  
Please verify this PR passes CI checks and aligns with internal contributor standards from [`CONTRIBUTING_INTERNAL.md`](./CONTRIBUTING_INTERNAL.md).
