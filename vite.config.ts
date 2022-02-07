import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import markdown from 'vite-plugin-md'
import pages from 'vite-plugin-pages'
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      include: [/\.vue$/, /\.md$/],
    }),
    markdown(),
    pages({
      dirs: [
        { dir: resolve(__dirname, './src/pages'), baseRoute: '' },
      ],
      extensions: ['vue', 'md'],
    })
  ],
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src")
    },
  },
})