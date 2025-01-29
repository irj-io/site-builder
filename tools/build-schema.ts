import { promises as fs } from 'node:fs'
import path from 'node:path'
//import { inspect } from 'node:util'
import { zodToJsonSchema } from 'zod-to-json-schema'

import { YamlSchema } from '@/utils/yaml-schema'

const jsonSchema = zodToJsonSchema(YamlSchema, 'mySchema')

//console.debug(inspect(jsonSchema, { depth: null, colors: true }))

async function main() {
	await fs.writeFile(
		path.join(process.cwd(), 'site-builder-page-schema.json'),
		JSON.stringify(jsonSchema),
		'utf-8'
	)
}

main()
