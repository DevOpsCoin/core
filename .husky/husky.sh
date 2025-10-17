#!/usr/bin/env sh
# Husky v10 bootstrap
# Loads environment for pre-commit hooks

if [ -f "$(dirname "$0")/../node_modules/.bin/pnpm" ]; then
  export PATH="$(dirname "$0")/../node_modules/.bin:$PATH"
fi

