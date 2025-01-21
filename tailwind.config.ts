import tailwindM3Tokens from 'm3-tokens/tailwind'
import type { Config } from 'tailwindcss'

export default {
	content: [
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/blocks/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/content/**/*.{yaml,md}',
	],
	plugins: [tailwindM3Tokens({ source: '#df2a59' })],
	theme: {
		extend: {
			keyframes: {
				marquee: {
					'0%': { transform: 'translateX(0%)' },
					'100%': { transform: 'translateX(-100%)' },
				},
				wiggle: {
					'0%, 100%': { transform: 'rotate(-3deg)' },
					'50%': { transform: 'rotate(3deg)' },
				},
			},
			animation: {
				marquee: 'marquee 60s linear infinite',
				wiggle: 'wiggle 1s ease-in-out infinite',
			},
		},
	},
} satisfies Config
