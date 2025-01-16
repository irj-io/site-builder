import layoutData from '@/content/example-components.yaml'
import { parseLayout } from '@/utils/parse-layout'

export default async function Examples() {
	const layoutComponents = await parseLayout(layoutData)
	return <>{layoutComponents}</>
}
