// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    site: 'https://vishnuvgn.github.io',
    // Only use the subpath when building for production
    base: process.env.NODE_ENV === 'production' ? '/wishlist' : '/',
});