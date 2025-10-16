# Security Policy

### Reporting a Vulnerability

If you discover a vulnerability related to the DevOpsCoin website or smart contracts:
- **Do not open a public issue.**
- Please email **security@devopscoin.ai** or open a **responsible disclosure ticket** at [https://devopscoin.ai/security](https://devopscoin.ai/security).

### What Not to Report

- Missing environment variables (`NEXT_PUBLIC_*` values)
- UI or content errors
- Contract verification already listed on BscScan

### Security Practices

- No private keys or secrets are committed to this repo
- All blockchain interactions are client-side and read-only unless the user explicitly signs
- Smart contracts are verified and published on BscScan for transparency
