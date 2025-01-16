import layoutData from '@/content/pricing.yaml'
import { parseLayout } from '@/utils/parse-layout'

export default async function Pricing() {
	const layoutComponents = await parseLayout(layoutData)
	return <>{layoutComponents}</>
}
