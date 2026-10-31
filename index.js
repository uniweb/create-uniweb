#!/usr/bin/env node
import { execSync } from 'child_process'

const given = process.argv.slice(2)

// npm keeps a flag it does not know for itself unless the flag follows `--`. It leaves
// `--template docs` as the word `docs` with npm_config_template set to `true`, and
// `--template=docs` as npm_config_template alone. Put it back, so that
// `npm create uniweb my-site --template docs` does not quietly use the default template.
const kept = process.env.npm_config_template
if (kept && !given.some((arg) => arg === '--template' || arg.startsWith('--template='))) {
  if (kept !== 'true') {
    given.push('--template', kept)
  } else {
    const word = given.findLastIndex((arg) => !arg.startsWith('-'))
    if (word !== -1) given.push('--template', ...given.splice(word, 1))
  }
}

// Forward all arguments to uniweb create
const args = given.map((arg) => (arg.includes(' ') ? `"${arg}"` : arg)).join(' ')

try {
  execSync(`npx uniweb@latest create ${args}`, { stdio: 'inherit' })
} catch (e) {
  process.exit(e.status || 1)
}
