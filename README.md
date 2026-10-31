# create-uniweb

Scaffold [Uniweb](https://github.com/uniweb/cli) projects—Vite + React sites with file-based routing, localization, and clean content/code separation.

## Usage

```bash
# pnpm (recommended)
pnpm create uniweb my-site

# npm
npm create uniweb@latest my-site

# yarn
yarn create uniweb my-site

# bun
bun create uniweb my-site
```

### With a template

```bash
pnpm create uniweb my-site --template marketing

# npm wants -- before a flag for the command it runs
npm create uniweb@latest my-site -- --template marketing
```

The default template is `starter`. `npx uniweb@latest template list` shows the others.

### With an AI agent

Ask it to run `npx uniweb@latest start` first, or `npx uniweb@latest start --template docs`
to start from a template. It prints a guide written for the agent.

## Next steps

After scaffolding, run:

```bash
cd my-site
pnpm install
pnpm dev
```

`AGENTS.md`, in your new project, is its manual, for you and for AI agents. See the
[documentation](https://uniweb.io/docs) for everything else, including:
- [Content structure](https://uniweb.io/docs/reference/content-structure) — how markdown becomes component props
- [Component metadata](https://uniweb.io/docs/reference/component-metadata) — defining component interfaces
- [Site configuration](https://uniweb.io/docs/reference/site-configuration) — site.yml reference

## What this package does

This is a thin wrapper that delegates to `uniweb create` (via `npx uniweb@latest`). It exists to support the familiar `npm create` convention used by Vite, Next.js, and other modern tools.

## License

Apache 2.0
