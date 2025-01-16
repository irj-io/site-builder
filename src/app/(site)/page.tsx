import layoutData from '@/content/home.yaml'
import { parseLayout } from '@/utils/parse-layout'

export default async function Home() {
	const layoutComponents = await parseLayout(layoutData)
	return <>{layoutComponents}</>
}
