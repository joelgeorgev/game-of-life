import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(() => {
  return {
    base: '/game-of-life/',
    build: {
      outDir: 'build'
    },
    test: {
      setupFiles: ['./vitest-setup.ts'],
      globals: true,
      environment: 'jsdom',
      clearMocks: true,
      mockReset: true,
      restoreMocks: true,
      coverage: {
        include: ['src/**/*.{ts,tsx}'],
        exclude: ['src/index.tsx', 'src/reportWebVitals.ts']
      }
    },
    plugins: [react()]
  }
})
