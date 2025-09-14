// Centralized image URLs for hero and mobile sections.
// You can override these via environment variables that point to Instagram image URLs
// or any other hosted images.

export const heroImageUrl: string =
  (import.meta as any).env?.VITE_HERO_IMAGE_URL ||
  new URL('../assets/hero-barbershop.jpg', import.meta.url).href;

export const mobileImageUrl: string =
  (import.meta as any).env?.VITE_MOBILE_IMAGE_URL ||
  new URL('../assets/mobile-barbershop.jpg', import.meta.url).href;


