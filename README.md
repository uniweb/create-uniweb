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

# npm requires -- to pass arguments
npm create uniweb@latest my-site -- --template marketing
```

### Available templates

| Template    | Description                          |
| ----------- | ------------------------------------ |
| `single`    | Single-page site (default, built-in) |
| `multi`     | Multi-page site (built-in)           |
| `marketing` | Marketing site with blog             |
| `academic`  | Academic/research site               |
| `docs`      | Documentation site                   |

## Next steps

After scaffolding, run:

```bash
cd my-site
pnpm install
pnpm dev
```

See the [developer guide](https://github.com/uniweb/cli/tree/main/docs) for:
- [Content structure](https://github.com/uniweb/cli/blob/main/docs/content-structure.md) — how markdown becomes component props
- [Component metadata](https://github.com/uniweb/cli/blob/main/docs/component-metadata.md) — defining component interfaces
- [Site configuration](https://github.com/uniweb/cli/blob/main/docs/site-configuration.md) — site.yml reference

## What this package does

This is a thin wrapper that delegates to `npx uniweb@latest create`. It exists to support the familiar `npm create` convention used by Vite, Next.js, and other modern tools.

## License

Apache 2.0
