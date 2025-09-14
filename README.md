# ABACH Artistry

A Vite + React + TypeScript project using Tailwind CSS and shadcn-ui.

## Development

Requirements: Node.js and npm. We recommend installing Node via nvm: `https://github.com/nvm-sh/nvm#installing-and-updating`.

```sh
# 1) Install dependencies
npm install

# 2) Start the dev server
npm run dev

# 3) Build for production
npm run build

# 4) Preview the production build
npm run preview
```

## Tech Stack

- Vite
- React 18
- TypeScript
- Tailwind CSS
- shadcn-ui components
- TanStack Query

## Project Structure

- `src/components/` UI components
- `src/pages/` route-level pages
- `src/contexts/` app contexts (e.g., language)
- `src/hooks/` reusable hooks
- `src/lib/` utilities

## Notes

- Booking modal embeds Altegio via an iframe. Height adapts to viewport.
- No Lovable-specific tooling is used; all Lovable references and the `lovable-tagger` dev plugin have been removed.
