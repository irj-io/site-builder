import tailwindM3Tokens from 'm3-tokens/tailwind'
import type { Config } from 'tailwindcss'

export default {
	content: [
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/blocks/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/content/**/*.yaml',
	],
	plugins: [tailwindM3Tokens({ source: '#df2a59' })],
} satisfies Config
