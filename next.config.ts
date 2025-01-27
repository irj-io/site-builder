import CopyPlugin from 'copy-webpack-plugin'
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
	reactStrictMode: true,
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'secure.gravatar.com',
				pathname: '/avatar/**',
			},
		],
	},

	// TODO: figure out how to remove this because it only makes sense in dev environment
	async rewrites() {
		return [
			{
				source: '/assets/images/:path*',
				destination: '/_next/static/assets/images/:path*',
			},
		]
	},

	webpack: (config) => {
		config.module.rules.push({
			test: /\.ya?ml$/,
			use: 'yaml-loader',
		})

		config.plugins.push(
			new CopyPlugin({
				patterns: [
					{
						// Grab images from "content/**/images"
						context: 'src/content/',
						from: '**/images/*',
						to: ({ context, absoluteFilename }) => {
							const path = absoluteFilename?.replace(context, '').replace('images/', '') || ''
							return `static/assets/images/${path}`
						},
						// Now they'll end up in the `.next/assets`
						// or a hashed path, depending on Next/webpack config
					},
				],
			})
		)

		return config
	},
}

export default nextConfig
