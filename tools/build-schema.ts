import { promises as fs } from 'fs'
import path from 'path'
//import { inspect } from 'util'
import { zodToJsonSchema } from 'zod-to-json-schema'

import { YamlGlobalSchema, YamlPageSchema } from '@/utils/yaml-schema'

const jsonGlobalSchema = zodToJsonSchema(YamlGlobalSchema, 'yamlGlobalSchema')
const jsonPageSchema = zodToJsonSchema(YamlPageSchema, 'yamlPageSchema')

//console.debug(inspect(jsonSchema, { depth: null, colors: true }))

async function main() {
	await fs.writeFile(
		path.join(process.cwd(), 'site-builder-global-schema.json'),
		JSON.stringify(jsonGlobalSchema),
		'utf-8'
	)
	await fs.writeFile(
		path.join(process.cwd(), 'site-builder-page-schema.json'),
		JSON.stringify(jsonPageSchema),
		'utf-8'
	)
}

main()
