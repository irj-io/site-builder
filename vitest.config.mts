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
		workspace: [
			// Use jsdom for component tests
			{
				extends: true,
				test: {
					environment: 'jsdom',
					include: ['**/*.{test,spec}.{tsx,jsx}'],
				},
			},
			// Use node for server-side/utility tests
			{
				extends: true,
				test: {
					environment: 'node',
					include: ['**/*.{test,spec}.{ts,js}'],
				},
			},
		],
		setupFiles: ['./tests/setup.ts'],
	},
})
