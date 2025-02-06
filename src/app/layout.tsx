import type { Metadata } from 'next'

import './globals.css'
import './globalicons.css'

import { ThemeProvider } from '@/components/theme-provider'

type RootLayoutProps = Readonly<{ children: React.ReactNode }>

export const metadata: Metadata = {
	title: 'Tyto | Remote Work Done Fun',
	description:
		'Tyto is the all-in-one place to hang out with your team, combining chat, tasks, projects and video.',
}

export default function RootLayout({ children }: RootLayoutProps) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body>
				<ThemeProvider attribute="class" defaultTheme="system" enableSystem>
					{children}
				</ThemeProvider>
			</body>
		</html>
	)
}
