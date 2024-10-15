import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './vitest.setup.ts',
    exclude: ['node_modules', 'dist', 'tests'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'text-summary'],
      all: true,
      include: ['src/**/*.{ts,tsx}'],
      exclude: [
        'src/**/*.d.ts',
        'src/**/types.ts',
        'src/types/*',
        'src/**/globals.d.ts',
        'src/**/ionicons.d.ts',
        'node_modules/**',
        'dist/**',
        'tests/**',
        '**/*.test.{ts,tsx}'
      ],
      thresholds: {
        global: {
          statements: 80,
          branches: 70,
          functions: 80,
          lines: 80
        }
      }
    }
  }
});
