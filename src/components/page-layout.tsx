import { notFound } from 'next/navigation'

import { loadGlobalData } from '../database/db-adapter'
import { captureError } from '../utils/error'
import { AnnouncementBar } from './announcement-bar/announcement-bar'
import { AnnouncementBarSchema } from './announcement-bar/announcement-bar-schema'
import type { AnnouncementBar as AnnouncementBarProps } from './announcement-bar/announcement-bar-schema'
import { Footer } from './footers/footer'
import { FooterSchema } from './footers/footer-schema'
import { Header } from './headers/header'
import { HeaderSchema } from './headers/header-schema'
import type { Header as HeaderType } from './headers/header-schema'

interface HeaderProps {
	theme: HeaderType['theme']
}

export default async function PageLayout({
	announcementProps = {},
	headerProps = {},
	children,
}: Readonly<{
	announcementProps?: Partial<AnnouncementBarProps>
	headerProps?: Partial<HeaderProps>
	children: React.ReactNode
}>) {
	const [globalData, error] = await loadGlobalData()
	if (error) {
		captureError(error)
		return notFound()
	}

	const announcementData = AnnouncementBarSchema.parse({
		...(globalData.announcementBar || {}),
		...announcementProps,
	})
	const headerData = HeaderSchema.parse({ ...(globalData.header || {}), ...headerProps })
	const footerData = FooterSchema.parse(globalData.footer || {})

	return (
		<>
			<AnnouncementBar {...announcementData} />
			<div className="grid grid-rows-[0fr_1fr_0fr] min-h-screen">
				<Header {...headerData} />
				<main className="items-center sm:items-start">{children}</main>
				<Footer {...footerData} />
			</div>
		</>
	)
}
