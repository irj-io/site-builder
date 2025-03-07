import { promises as fs } from 'node:fs'
import { dirname, relative, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

export const pathAliasPlugin = {
	name: 'path-alias-plugin',
	setup(build) {
		build.onLoad({ filter: /\.tsx?$/ }, async (args) => {
			const source = await fs.readFile(args.path, 'utf8')
			// In the file itself, replace any `import "@/..."` with relative paths.
			// This naive approach just does string replacement; a real parser is safer.

			const importerDir = dirname(args.path)
			let transformed = source.replace(/from\s+(["'])@\/([^"']+)(["'])/g, (_m, g1, g2, g3) => {
				// Construct a relative path from `args.path` back to ../src/<g1>
				const absoluteTarget = resolve(__dirname, '../src', g2)
				const rel = relative(importerDir, absoluteTarget)
				// Must start with "./" or "../"
				return `from ${g1}${rel.startsWith('.') ? rel : './' + rel}${g3}`
			})

			const isTsx = args.path.endsWith('.tsx')
			return { contents: transformed, loader: isTsx ? 'tsx' : 'ts' }
		})
	},
}
