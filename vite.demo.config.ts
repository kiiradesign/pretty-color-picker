import { resolve } from 'node:path'
import { defineConfig } from 'vite'

/** Builds the static demo site (not the npm library). */
export default defineConfig({
  root: resolve(__dirname, 'demo'),
  build: {
    outDir: resolve(__dirname, 'demo-dist'),
    emptyOutDir: true,
  },
})
