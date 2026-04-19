#!/bin/bash
# Build script for Cloudflare Pages
# This ensures we only build the frontend, not the server

set -e

echo "🔨 Building Elara Tecnologia..."
pnpm install --frozen-lockfile
pnpm run build
echo "✅ Build completed successfully!"
