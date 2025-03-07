import Link from 'next/link'

import { cn } from '../../utils/cn'
import { Action } from '../actions/action'
import { Media } from '../media/media'
import { ThemeModeToggle } from '../theme-mode-toggle'
import type { Header } from './header-schema'

export function Header(props: Header) {
	const { logo, navLinks = [], theme } = props

	return (
		<header
			className={cn(
				'container mx-auto grid grid-cols-[auto_1fr_auto] items-center h-20 px-6 py-4 z-10 gap-4 text-foreground',
				{ dark: theme === 'dark' }
			)}
		>
			<Link className="flex items-center" href="/">
				<Media className="inline-block mr-4" media={logo} width="48" height="48" />
				<span className="text-2xl font-medium">tyto</span>
			</Link>
			<nav className="text-end">
				<ul className="flex justify-end gap-4 font-semibold text-base">
					{navLinks.map((action, index) => {
						// Button sizes on this header should be large by default
						const props = action.type === 'button' ? { size: action.size || 'lg' } : {}
						return (
							<li key={`navLink-${index}`}>
								<Action {...action} {...props} />
							</li>
						)
					})}
				</ul>
			</nav>
			<div className="text-end">
				<ThemeModeToggle />
			</div>
		</header>
	)
}
