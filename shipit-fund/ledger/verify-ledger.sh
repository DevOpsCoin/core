#!/usr/bin/env bash
#
# verify-ledger.sh
#
# Verify integrity and completeness of all Ship-It Fund ledger files.
# - Computes SHA256 hashes for each YAML file
# - Checks for duplicate or missing transaction hashes
# - Validates declared signature_hash values
# - Confirms valid token entries and Solana network format
#
# Usage:
#   ./verify-ledger.sh            # Normal mode (skips examples)
#   ./verify-ledger.sh --show-all # Include example/template ledgers
#

set -euo pipefail

LEDGER_DIR="$(cd "$(dirname "$0")" && pwd)"
SHOW_ALL=false

if [[ "${1:-}" == "--show-all" ]]; then
  SHOW_ALL=true
  echo "Running in full mode — including example/template ledgers."
else
  echo "Verifying Ship-It Fund ledgers (excluding examples)..."
fi
echo

failures=0

should_skip() {
  local file="$1"
  if [[ "$SHOW_ALL" == false ]]; then
    [[ "$file" == *"example"* || "$file" == *"template"* ]] && return 0
  fi
  return 1
}

for file in "$LEDGER_DIR"/*.yml; do
  [ -f "$file" ] || continue
  if should_skip "$file"; then
    echo "Skipping $(basename "$file") (example/template)"
    continue
  fi

  echo "Checking $(basename "$file")"

  HASH=$(shasum -a 256 "$file" | awk '{print $1}')
  DECLARED=$(grep -E 'signature_hash:' "$file" | awk '{print $2}' | tr -d '"')

  echo "  Computed SHA256: $HASH"
  if [ -n "$DECLARED" ]; then
    echo "  Declared Hash:   $DECLARED"
    if [ "$HASH" != "$DECLARED" ]; then
      echo "  [ERROR] Hash mismatch!"
      ((failures++))
    else
      echo "  [OK] Hash verified."
    fi
  else
    echo "  [WARN] No signature_hash declared — add this after sign-off."
  fi

  TX_HASHES=$(grep -E 'tx_hash:' "$file" | awk '{print $2}' | tr -d '"')
  DUPES=$(echo "$TX_HASHES" | sort | uniq -d)
  MISSING=$(grep -c 'tx_hash: null' "$file" || true)

  if [ -n "$DUPES" ]; then
    echo "  [ERROR] Duplicate tx_hash values found:"
    echo "$DUPES" | sed 's/^/     - /'
    ((failures++))
  fi

  if [ "$MISSING" -gt 0 ]; then
    echo "  [WARN] $MISSING entries missing tx_hash (likely pending)."
  fi

  # Validate token types
  INVALID_TOKENS=$(grep -E 'token:' "$file" | awk '{print $2}' | tr -d '"' | grep -vE '^(DEVOPS|SOL)$' || true)
  if [ -n "$INVALID_TOKENS" ]; then
    echo "  [ERROR] Invalid token types found:"
    echo "$INVALID_TOKENS" | sed 's/^/     - /'
    ((failures++))
  fi

  # Validate network value
  NETWORK=$(grep -E 'network:' "$file" | awk '{print $2}' | tr -d '"')
  if [[ "$NETWORK" != "Solana" && "$NETWORK" != "SolanaMainnet" && "$NETWORK" != "SolanaDevnet" && "$NETWORK" != "Solana-Mainnet" && "$NETWORK" != "Solana-Devnet" ]]; then
    echo "  [WARN] Unexpected network value: $NETWORK"
  fi

  echo
done

if [ "$failures" -gt 0 ]; then
  echo "Ledger verification completed with $failures issue(s)."
  exit 1
else
  echo "All ledger files verified successfully."
fi
