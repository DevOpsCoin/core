---
name: "🐞 Bug Report"
about: Report a reproducible issue or regression
labels: ["bug"]
---

## 🐞 Summary

Briefly describe the bug:

> Example: Clicking “Mint NFT” does nothing on Safari.

---

## 🔁 Steps to Reproduce

1. Go to `/mint`
2. Click “Connect Wallet”
3. Click “Mint NFT”
4. Nothing happens

---

## 💡 Expected Behavior

What should have happened?

> The transaction modal should open and show the mint confirmation.

---

## 🧠 Actual Behavior

What actually happened?

> The button appears disabled and no console output is shown.

---

## 🧰 Environment

| Detail          | Value                     |
| --------------- | ------------------------- |
| OS              | macOS / Windows / Linux   |
| Browser         | Chrome / Safari / Firefox |
| Node Version    | 22.x                      |
| Package Manager | pnpm 10.x                 |
| Commit SHA      | _(if applicable)_         |

---

## 📜 Logs / Console Output

```
Paste relevant logs or error stack traces here
```

---

## 🔄 Possible Solution (optional)

If you have ideas for fixing it, describe them here.

> Example: The button event listener may be missing `use client` directive in Next.js App Router.

---

## ✅ Checklist

- [ ] I’ve searched existing issues to avoid duplicates
- [ ] I can reproduce this issue consistently
- [ ] I included all relevant logs, screenshots, and environment info

---

**Maintainer Note:**  
If this bug affects contract interaction or wallet flow, label it `priority:critical`.
