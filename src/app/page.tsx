import { Footer } from '@/components/footers/footer'
import { Header } from '@/components/headers/header'
import globalData from '@/content/global.yaml'
import layoutData from '@/content/home.yaml'
import { parseLayout } from '@/utils/parse-layout'

export default async function Home() {
	const layoutComponents = await parseLayout(layoutData)

	const headerData = globalData.header || {}
	const footerData = globalData.footer || {}

	return (
		<div className="grid grid-rows-[0fr_1fr_0fr] min-h-screen font-[family-name:var(--font-geist-sans)]">
			<Header {...headerData} />
			<main className="row-start-2 items-center sm:items-start">{layoutComponents}</main>
			<Footer {...footerData} />
		</div>
	)
}
