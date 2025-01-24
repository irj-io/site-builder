import CopyPlugin from 'copy-webpack-plugin'
import type { NextConfig } from 'next'

class YamlWatchPlugin {
	async apply(compiler) {
		//const dirName = path.resolve(__dirname, 'src/content')
		//const files = await fs.readdir(dirName)

		compiler.hooks.run.tap('YamlWatchPlugin', (compilation) => {
			console.log('The webpack build process is starting!')
		})
		compiler.hooks.compilation.tap('YamlWatchPlugin', (compilation) => {
			console.log('compilation')
			//console.log('compilation', compilation)
			//compilation.contextDependencies.add(dirName)

			//files.forEach((file) => compilation.fileDependencies.add(file))
		})
	}
}

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

	//experimental: {
	//	turbo: {
	//		rules: {
	//			'*.svg': {
	//				loaders: ['raw-loader'],
	//			},
	//			'/\.ya?ml$/': {
	//				loaders: ['file-loader', 'yaml-loader'],
	//			},
	//			'*.yaml': {
	//				loaders: ['file-loader', 'yaml-loader'],
	//			},
	//		},
	//		resolveExtensions: ['.mdx', '.tsx', '.ts', '.jsx', '.js', '.mjs', '.json', '.yaml'],
	//	},
	//},
	webpack: (config, { dev }) => {
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

		if (dev) {
			//config.plugins.push(new YamlWatchPlugin())
		}

		return config
	},
}

export default nextConfig
