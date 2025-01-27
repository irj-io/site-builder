import { AnnouncementBar } from '@/components/announcement-bar/announcement-bar'
import { AnnouncementBarSchema } from '@/components/announcement-bar/announcement-bar-schema'
import type { AnnouncementBar as AnnouncementBarProps } from '@/components/announcement-bar/announcement-bar-schema'
import { Footer } from '@/components/footers/footer'
import { FooterSchema } from '@/components/footers/footer-schema'
import { Header } from '@/components/headers/header'
import { HeaderSchema } from '@/components/headers/header-schema'
import type { Header as HeaderType } from '@/components/headers/header-schema'
import globalData from '@/content/global.yaml'

interface HeaderProps {
	theme: HeaderType['theme']
}

export default function PageLayout({
	announcementProps = {},
	headerProps = {},
	children,
}: Readonly<{
	announcementProps?: Partial<AnnouncementBarProps>
	headerProps?: Partial<HeaderProps>
	children: React.ReactNode
}>) {
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
