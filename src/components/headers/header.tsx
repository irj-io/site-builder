import Link from 'next/link'

import { cn } from '../../utils/cn'
import { Action } from '../actions/action'
import { Media } from '../media/media'
import { ThemeModeToggle } from '../theme-mode-toggle'
import { Button, Sheet, SheetContent, SheetTrigger } from '../ui'
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
			<Link className="flex items-center" href="/" prefetch={false}>
				<Media
					className="inline-block mr-4"
					imageClassName="object-contain h-10 md:h-12 w-10 md:w-12"
					media={logo}
					width="48"
					height="48"
				/>
				<span className="text-xl md:text-2xl font-medium">tyto</span>
			</Link>
			<nav className="hidden lg:flex!">
				<ul className="flex grow justify-end text-end gap-4 font-semibold text-base">
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

			<Sheet>
				<SheetTrigger asChild>
					<Button variant="outline" size="icon" className="md:hidden">
						<span className="icon-symbols text-[1.5rem]">menu</span>
						<span className="sr-only">Toggle navigation menu</span>
					</Button>
				</SheetTrigger>
				<SheetContent side="left" className="p-6">
					<Link className="flex items-center" href="/" prefetch={false}>
						<Media
							className="inline-block mr-4"
							imageClassName="object-contain h-10 w-10"
							media={logo}
							width="48"
							height="48"
						/>
						<span className="text-xl md:text-2xl font-medium">tyto</span>
					</Link>

					<nav className="grid gap-2 py-6">
						{navLinks.map((action, index) => {
							return <Action key={`navLink-${index}`} {...action} />
						})}
					</nav>
				</SheetContent>
			</Sheet>
		</header>
	)
}
