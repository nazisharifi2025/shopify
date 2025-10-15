import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    tailwindcss(),
    react()],
  optimizeDeps: {
    include: ["react-slick", "slick-carousel/slick/slick.css", "slick-carousel/slick/slick-theme.css"],
  },
});

