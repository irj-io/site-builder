import Image from 'next/image'

import logo from '@/assets/tyto-logo.png'
import { Action } from '../actions/action'
import type { Header } from './header-schema'

export function Header(props: Header) {
	const { navLinks = [] } = props

	return (
		<header className="container mx-auto grid grid-cols-[auto_1fr_auto] items-center h-20 px-6 py-4">
			<a className="flex items-center" href="/">
				<Image className="inline-block mr-4" src={logo} alt="product logo" height={48} width={48} />
				<span className="text-2xl font-medium">tyto</span>
			</a>
			<nav className="text-end">
				<ul className="flex justify-end gap-4 font-semibold text-base">
					{navLinks.map((action, index) => (
						<li key={`navLink-${index}`}>
							<Action {...action} />
						</li>
					))}
				</ul>
			</nav>
			<div className="text-end"></div>
		</header>
	)
}
