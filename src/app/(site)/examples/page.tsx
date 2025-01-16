import layoutData from '@/content/examples.yaml'
import { parseLayout } from '@/utils/parse-layout'

export default async function Examples() {
	const layoutComponents = await parseLayout(layoutData)
	return <>{layoutComponents}</>
}
