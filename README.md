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

### Custom Images (from Instagram or elsewhere)

You can replace built-in hero/mobile images by setting environment variables with direct image URLs (e.g., from Instagram CDN or any host):

Create a `.env.local` in project root:

```env
VITE_HERO_IMAGE_URL=https://example.com/path/to/hero.jpg
VITE_MOBILE_IMAGE_URL=https://example.com/path/to/mobile.jpg
```

Restart the dev server after changing `.env.local`.
