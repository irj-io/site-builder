import layoutData from '@/content/features.yaml'
import { parseLayout } from '@/utils/parse-layout'

export default async function Features() {
	const layoutComponents = await parseLayout(layoutData)
	return <>{layoutComponents}</>
}
