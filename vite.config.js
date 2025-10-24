import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import { resolve } from "path";

export default defineConfig({
  plugins: [tailwindcss()],
  base: "/SAE301-Corentin-Delvaque",
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        plus: resolve(__dirname, "pages/boutique.html"),
        // ajoutez d'autres pages si nécessaire
      },
    },
  },
});

//npm install

//extension prettier + format

//extension Tailwind CSS IntelliSense dans VSCode

//npm run dev
