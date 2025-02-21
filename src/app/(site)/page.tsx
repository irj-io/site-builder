import PageLayout from '@/components/page-layout'
import layoutData from '@/content/home/index.yaml'
import { parseLayout } from '@/utils/parse-layout'

export default async function Home() {
	const layoutComponents = await parseLayout(layoutData)
	return <PageLayout>{layoutComponents}</PageLayout>
}
