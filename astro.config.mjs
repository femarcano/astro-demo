import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  // Justification: 'server' output mode is required for Vercel serverless deployment.
  output: 'server',
  adapter: vercel()
});