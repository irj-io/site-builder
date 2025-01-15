import { promises as fs } from 'node:fs'
import path from 'node:path'
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

		if (dev) {
			//config.plugins.push(new YamlWatchPlugin())
		}

		return config
	},
}

export default nextConfig
