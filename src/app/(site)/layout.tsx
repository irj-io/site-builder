import { Footer } from '@/components/footers/footer'
import { FooterSchema } from '@/components/footers/footer-schema'
import { Header } from '@/components/headers/header'
import { HeaderSchema } from '@/components/headers/header-schema'
import globalData from '@/content/global.yaml'

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	const headerData = HeaderSchema.parse(globalData.header || {})
	const footerData = FooterSchema.parse(globalData.footer || {})

	return (
		<div className="grid grid-rows-[0fr_1fr_0fr] min-h-screen">
			<Header {...headerData} />
			<main className="row-start-2 items-center sm:items-start">{children}</main>
			<Footer {...footerData} />
		</div>
	)
}
