import Image from 'next/image'
import Link from 'next/link'

import logo from '@/assets/tyto-logo.png'
import { Action } from '../actions/action'
import { ThemeModeToggle } from '../theme-mode-toggle'
import type { Header } from './header-schema'

export function Header(props: Header) {
	const { navLinks = [] } = props

	return (
		<header className="container mx-auto grid grid-cols-[auto_1fr_auto] items-center h-20 px-6 py-4 z-10 gap-4">
			<Link className="flex items-center" href="/">
				<Image className="inline-block mr-4" src={logo} alt="product logo" height={48} width={48} />
				<span className="text-2xl font-medium">tyto</span>
			</Link>
			<nav className="text-end">
				<ul className="flex justify-end gap-4 font-semibold text-base">
					{navLinks.map((action, index) => (
						<li key={`navLink-${index}`}>
							<Action {...action} size={action.type === 'button' ? action.size || 'lg' : 'lg'} />
						</li>
					))}
				</ul>
			</nav>
			<div className="text-end">
				<ThemeModeToggle />
			</div>
		</header>
	)
}
