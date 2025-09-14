// Centralized image URLs for hero and mobile sections.
// You can override these via environment variables that point to Instagram image URLs
// or any other hosted images.

export const heroImageUrl: string =
  (import.meta as any).env?.VITE_HERO_IMAGE_URL ||
  new URL('../assets/hero-barbershop.jpg', import.meta.url).href;

export const mobileImageUrl: string =
  (import.meta as any).env?.VITE_MOBILE_IMAGE_URL ||
  'https://static.wixstatic.com/media/c31dbd_e52405e685a54c739b6ee6496e29f1bb~mv2.jpg/v1/fill/w_610,h_268,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/103339608_2383247221971155_5084900471404.jpg';


