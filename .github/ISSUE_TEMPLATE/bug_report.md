---
name: '🐞 Bug Report'
about: Report a reproducible issue or regression in the DevOpsCoin website or ecosystem
labels: ['bug']
---

## 🐞 Summary

Briefly describe the bug:

> Example: Clicking “Connect Wallet” doesn’t open the Solana wallet modal.

---

## 🔁 Steps to Reproduce

1. Navigate to `/fund` or `/wallet`
2. Click “Connect Wallet”
3. Attempt to view Ship-It Fund balance
4. Nothing happens or an error appears

---

## 💡 Expected Behavior

What should have happened?

> The Solana wallet adapter should prompt for connection and display balances correctly.

---

## 🧠 Actual Behavior

What actually happened?

> The wallet modal didn’t open, and the console shows a connection error.

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
Paste relevant logs, stack traces, or Solana RPC errors here
```

---

## 🔄 Possible Solution (optional)

If you have ideas for fixing it, describe them here.

> Example: The Solana adapter might be missing the `ConnectionProvider` context in `_app.tsx`.

---

## ✅ Checklist

- [ ] I’ve searched existing issues to avoid duplicates
- [ ] I can reproduce this issue consistently
- [ ] I included all relevant logs, screenshots, and environment info

---

**Maintainer Note:**  
If the bug affects **Ship-It Fund transactions**, **founder vesting**, or **Solana wallet interaction**, label it `priority:critical`.
