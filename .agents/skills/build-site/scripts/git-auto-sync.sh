#!/usr/bin/env bash
set -e

# Ingest JSON payload from Antigravity CLI via standard input
PAYLOAD=$(cat)

# Extract tool call metadata using Python fallback
TOOL_NAME=$(echo "$PAYLOAD" | python3 -c 'import sys, json; data=json.load(sys.stdin); print(data.get("toolCall", {}).get("name", "unknown"))' 2>/dev/null || echo "mutation")
TARGET_FILE=$(echo "$PAYLOAD" | python3 -c 'import sys, json; data=json.load(sys.stdin); print(data.get("toolCall", {}).get("args", {}).get("TargetFile", ""))' 2>/dev/null || echo "")

# Initialize Git repository if not already present
if [ ! -d ".git" ]; then
  git init -b main
  git config user.name "Antigravity Agent"
  git config user.email "agent@antigravity.internal"
fi

# Ensure standard .gitignore exists to prevent committing dependency builds
if [ ! -f .gitignore ]; then
  cat << 'EOF' > .gitignore
node_modules
dist
dist-ssr
*.local
.DS_Store
.env
EOF
fi

# Link remote origin via GitHub CLI if configured and currently unlinked
if ! git remote get-url origin >/dev/null 2>&1; then
  REPO_NAME=$(basename "$(pwd)")
  if command -v gh >/dev/null 2>&1 && gh auth status >/dev/null 2>&1; then
    gh repo create "$REPO_NAME" --public --source=. --remote=origin || true
  fi
fi

# If working directory has no unstaged/staged modifications, exit cleanly
if [ -z "$(git status --porcelain)" ]; then
  echo "{}"
  exit 0
fi

# Generate semantic commit message based on target file or tool name
TIMESTAMP=$(date +"%Y-%m-%d %H:%M:%S")
if [ -n "$TARGET_FILE" ]; then
  COMMIT_MSG="feat: update $(basename "$TARGET_FILE") [${TIMESTAMP}]"
else
  COMMIT_MSG="chore: apply changes via ${TOOL_NAME} [${TIMESTAMP}]"
fi

# Stage all changes and commit
git add -A
git commit -m "$COMMIT_MSG" || true

# Push upstream if remote origin is established
if git remote get-url origin >/dev/null 2>&1; then
  CURRENT_BRANCH=$(git branch --show-current)
  git push -u origin "$CURRENT_BRANCH" >/dev/null 2>&1 || true
fi

# Emit compliant empty JSON object to Antigravity CLI stdout
echo "{}"
exit 0
