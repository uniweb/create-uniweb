#!/usr/bin/env node
import { execSync } from 'child_process'

// Forward all arguments to uniweb create
const args = process.argv
  .slice(2)
  .map((arg) => (arg.includes(' ') ? `"${arg}"` : arg))
  .join(' ')

try {
  execSync(`npx uniweb@latest create ${args}`, { stdio: 'inherit' })
} catch (e) {
  process.exit(e.status || 1)
}
