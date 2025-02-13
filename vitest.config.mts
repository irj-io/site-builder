import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
import { defineConfig } from 'vitest/config'

export default defineConfig({
	plugins: [tsconfigPaths(), react()],
	test: {
		coverage: {
			provider: 'v8',
			reporter: ['text', 'lcov'],
			thresholds: {
				statements: 80,
				branches: 80,
				functions: 80,
				lines: 80,
			},
		},
		environment: 'jsdom',
		setupFiles: ['./tests/setup.ts'],
	},
})
