import { promises as fs } from 'node:fs'

import { parseLayout } from '@/utils/parse-layout'

//export async function generateStaticParams() {
//	//const data = (await import(`@/content/${slug.join('/')}.yaml`)).default
//	const files = await fs.readFile(`${process.cwd()}/src/content/features.yaml`, 'utf8')
//
//	console.log('rest', files)
//
//	return [{ slug: ['testing'] }]
//}

export default async function Page({ params }) {
	const { slug } = await params

	const yaml = (await import(`@/content/${slug.join('/')}.yaml`)).default
	const layoutComponents = await parseLayout(yaml)

	console.log(layoutComponents)
	console.log(slug)

	return <>{layoutComponents}</>
	//return <div />
}
