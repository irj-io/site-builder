import fs from 'node:fs'
import { join } from 'node:path'
import esbuild from 'esbuild'

import pkg from '../package.json' with { type: 'json' }
import { pathAliasPlugin } from '../tools/path-alias-plugin.mjs'

const dir = 'dist'

/** @type {import('esbuild').Buildtptions} */
const commonOptions = {
	format: 'esm',
	outdir: dir,
	target: 'es2020',
	tsconfig: 'tsconfig.dist.json',
	//sourcemap: true,
	//minify: true,
	plugins: [pathAliasPlugin],
}

/** @type {import('esbuild').Buildtptions} */
const clientOptions = {
	...commonOptions,
	entryPoints: ['src/components/**/*.ts*', 'src/blocks/**/*.ts*'],
	bundle: true,
	platform: 'browser',
	external: ['react', 'react-dom', 'tailwindcss', 'node:path', 'node:fs', 'node:crypto'],
	loader: {
		'.png': 'file',
		'.svg': 'file',
		'.css': 'css',
	},
}

/** @type {import('esbuild').Buildtptions} */
const serverOptions = {
	...commonOptions,
	entryPoints: ['src/database/**/*.ts*', 'src/lib/**/*.ts*', 'src/utils/**/*.ts*'],
	platform: 'node',
}

// Check if "watch=true" flag is passed
if (process.argv[2]) {
	const [key, value] = process.argv[2].split('=')
	if (key === 'watch' && value === 'true') {
		const clientCtx = await esbuild.context(clientOptions)
		const serverCtx = await esbuild.context(serverOptions)

		await clientCtx.watch()
		await serverCtx.watch()

		console.log('Watching...')
	}
}

await Promise.all([esbuild.build(clientOptions), esbuild.build(serverOptions)])
//esbuild.build(options).catch(() => process.exit(1))

// Create a package.json file in the dist/esm directory with "type": "module" field
if (!fs.existsSync(dir)) {
	fs.mkdirSync(dir, { recursive: true })
}
fs.writeFileSync(
	join(dir, 'package.json'),
	JSON.stringify({ type: 'module', sideEffects: pkg.sideEffects }, null, 2) + '\n',
	'utf-8'
)
