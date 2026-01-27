# create-uniweb

Scaffold Uniweb projects using the standard `npm create` syntax.

## Usage

```bash
# npm
npm create uniweb@latest my-site

# pnpm
pnpm create uniweb my-site

# yarn
yarn create uniweb my-site

# bun
bun create uniweb my-site
```

### With a template

```bash
npm create uniweb@latest my-site -- --template marketing
pnpm create uniweb my-site --template marketing
```

### Available templates

| Template    | Description                        |
| ----------- | ---------------------------------- |
| `single`    | Single-page site (default, built-in) |
| `multi`     | Multi-page site (built-in)         |
| `marketing` | Marketing site with blog           |
| `academic`  | Academic/research site             |
| `docs`      | Documentation site                 |

## What this does

This package is a thin wrapper that delegates to `npx uniweb@latest create`. It exists to support the familiar `npm create` convention used by Vite, Next.js, and other modern tools.

For the full CLI documentation, see [uniweb](https://github.com/uniweb/cli).

## License

MIT
