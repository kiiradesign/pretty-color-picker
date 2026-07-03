import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

export default defineConfig({
  plugins: [
    dts({
      insertTypesEntry: true,
      rollupTypes: true,
    }),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'PrettyColorPicker',
      formats: ['es', 'umd'],
      fileName: (format) =>
        format === 'es' ? 'pretty-color-picker.js' : 'pretty-color-picker.umd.cjs',
    },
    rollupOptions: {
      external: [],
    },
  },
})
