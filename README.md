# Portfolio

Personal portfolio site for [Will Morcombe](https://github.com/willmorcombe), built as a fast, modern single-page application and deployed to GitHub Pages.

**Live site:** [willmorcombe.github.io/portfolio](https://willmorcombe.github.io/portfolio)

## Overview

This repository contains the source for my developer portfolio — a React application focused on clear presentation, responsive layout, and maintainable UI components. The site is statically built and served from GitHub Pages.

## Tech Stack

| Layer | Technology |
| --- | --- |
| Framework | [React 19](https://react.dev/) |
| Language | [TypeScript](https://www.typescriptlang.org/) |
| Build tool | [Vite](https://vite.dev/) |
| Styling | [Tailwind CSS v4](https://tailwindcss.com/) |
| Components | [shadcn/ui](https://ui.shadcn.com/) (Radix Lyra preset) |
| Icons | [Phosphor Icons](https://phosphoricons.com/) |
| Linting | [ESLint](https://eslint.org/) |

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) 20+
- npm (included with Node.js)

### Installation

```bash
git clone https://github.com/willmorcombe/portfolio.git
cd portfolio
npm install
```

### Development

Start the local dev server with hot module replacement:

```bash
npm run dev
```

The app will be available at `http://localhost:5173` (or the next available port).

### Production Build

```bash
npm run build
```

Output is written to `dist/`. Preview the production build locally:

```bash
npm run preview
```

### Linting

```bash
npm run lint
```

## Project Structure

```
portfolio/
├── public/              # Static assets served as-is
├── src/
│   ├── assets/          # Images and media imported by components
│   ├── components/
│   │   └── ui/          # shadcn/ui components
│   ├── lib/             # Shared utilities (e.g. cn helper)
│   ├── App.tsx          # Root application component
│   ├── main.tsx         # Application entry point
│   └── index.css        # Global styles and Tailwind imports
├── components.json      # shadcn/ui configuration
├── vite.config.ts       # Vite configuration
└── package.json
```

## Deployment (GitHub Pages)

This project is configured for deployment as a GitHub Pages **project site** at `/portfolio/`.

### Vite base path

Ensure `vite.config.ts` includes the repository base path:

```ts
export default defineConfig({
  base: '/portfolio/',
  // ...
})
```

### GitHub Pages settings

1. Push the repository to GitHub.
2. Go to **Settings → Pages**.
3. Under **Build and deployment**, set **Source** to **GitHub Actions** (recommended) or deploy the `dist/` folder from a CI workflow.

A typical GitHub Actions workflow builds with `npm run build` and publishes the `dist/` artifact to GitHub Pages on every push to `main`.

## Adding UI Components

This project uses the shadcn/ui CLI. To add a component:

```bash
npx shadcn@latest add <component-name>
```

Components are added to `src/components/ui/` and can be imported via the `@/` alias:

```tsx
import { Button } from "@/components/ui/button"
```

## License

This project is open source and available for reference. If you reuse substantial portions, attribution is appreciated.
