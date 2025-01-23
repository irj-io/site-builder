import type { Metadata } from 'next'

import './globals.css'
import './globalicons.css'

import { ThemeProvider } from '@/components/theme-provider'

type RootLayoutProps = Readonly<{ children: React.ReactNode }>

export const metadata: Metadata = {
	title: 'Tyto',
	description: 'Generated by create next app',
}

export default function RootLayout({ children }: RootLayoutProps) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body>
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange
				>
					{children}
				</ThemeProvider>
			</body>
		</html>
	)
}
