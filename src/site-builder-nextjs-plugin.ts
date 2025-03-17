import CopyPlugin from 'copy-webpack-plugin'
import { type NextConfig } from 'next'

import { env } from './utils/env.js'

type NextConfigFn = (config: NextConfig) => NextConfig

export const withSiteBuilder = ({ context }: { context: string }): NextConfigFn =>
	function (userNextConfig: NextConfig = {}): NextConfig {
		return {
			transpilePackages: [...(userNextConfig.transpilePackages || []), 'site-builder'],

			reactStrictMode: true,
			images: {
				dangerouslyAllowSVG: true,
				contentDispositionType: 'attachment', // recommended to be used alongside dangerouslyAllowSVG
				contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;", // recommended to be used alongside dangerouslyAllowSVG
				...userNextConfig.images,

				remotePatterns: [
					...(userNextConfig.images?.remotePatterns || []),
					{
						protocol: 'https',
						hostname: 'placehold.co',
					},
				],
			},

			...userNextConfig,

			async rewrites() {
				// Get user rewrites (could be a function or a plain object)
				const userRewrites =
					typeof userNextConfig.rewrites === 'function'
						? await userNextConfig.rewrites()
						: userNextConfig.rewrites || {}

				const rewrite = {
					source: '/assets/images/:path*',
					destination: '/_next/static/assets/images/:path*',
				}

				return Array.isArray(userRewrites)
					? [...userRewrites, rewrite]
					: {
							beforeFiles: [...(userRewrites.beforeFiles || [])],
							afterFiles: [...(userRewrites.afterFiles || []), rewrite],
							fallback: [...(userRewrites.fallback || [])],
						}
			},

			webpack(config, options) {
				const dbPath = env('DB_PATH')
				if (!dbPath) {
					throw new Error(`Environment variable not defined: DB_PATH`)
				}
				config.plugins?.push(
					new CopyPlugin({
						patterns: [
							{
								// Grab images from "content/**/images"
								context: context ?? dbPath,
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

				// Let user's existing webpack config still apply
				if (typeof userNextConfig.webpack === 'function') {
					return userNextConfig.webpack(config, options)
				}

				return config
			},
		}
	}
