/**
 * What `uniweb create` receives from `npm create uniweb`, however the template was named.
 * npm keeps a flag it does not know for itself unless it follows `--`, so the wrapper reads
 * what npm left behind. The shapes below are what npm 10 hands over, measured 2026-10-30.
 */

import { test } from 'node:test'
import assert from 'node:assert/strict'
import { spawnSync } from 'node:child_process'
import { mkdtempSync, rmSync, writeFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const WRAPPER = join(dirname(fileURLToPath(import.meta.url)), 'index.js')

/** The command line the wrapper runs, with `npx` replaced by one that only says it. */
function forwarded(args, template) {
  const bin = mkdtempSync(join(tmpdir(), 'create-uniweb-'))
  writeFileSync(join(bin, 'npx'), '#!/bin/sh\necho "$*"\n', { mode: 0o755 })
  const env = { ...process.env, PATH: `${bin}:${process.env.PATH}` }
  delete env.npm_config_template
  if (template) env.npm_config_template = template
  const r = spawnSync(process.execPath, [WRAPPER, ...args], { encoding: 'utf8', env })
  rmSync(bin, { recursive: true, force: true })
  assert.equal(r.status, 0, r.stderr)
  return r.stdout.trim()
}

const CREATE = 'uniweb@latest create'

test('a flag npm passed on goes through as it is', () => {
  assert.equal(forwarded(['my-site']), `${CREATE} my-site`)
  assert.equal(forwarded(['my-site', '--template', 'docs']), `${CREATE} my-site --template docs`)
  assert.equal(forwarded(['my-site', '--template=docs']), `${CREATE} my-site --template=docs`)
})

test('npm kept `--template docs`: its value is the last word', () => {
  assert.equal(forwarded(['my-site', 'docs'], 'true'), `${CREATE} my-site --template docs`)
  assert.equal(forwarded(['.', 'docs'], 'true'), `${CREATE} . --template docs`)
  assert.equal(forwarded(['docs'], 'true'), `${CREATE} --template docs`)
})

test('npm kept `--template=docs`: its value is in the environment', () => {
  assert.equal(forwarded(['my-site'], 'docs'), `${CREATE} my-site --template docs`)
})

test('CONTROL — two words with no flag kept are passed on, for `uniweb create` to refuse', () => {
  assert.equal(forwarded(['my-site', 'docs']), `${CREATE} my-site docs`)
})
