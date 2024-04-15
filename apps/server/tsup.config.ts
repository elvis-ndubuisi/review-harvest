import {defineConfig} from 'tsup'

export default defineConfig({
  entry: ['src/main.ts'],
  clean: true,
  minify: true,
  format: ['esm', 'cjs'],
  onSuccess: 'node dist/main.js',
})
