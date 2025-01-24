import Image from 'next/image'
import Link from 'next/link'

import { cn } from '@/utils/cn'
import { Action } from '../actions/action'
import type { Footer, FooterColumn } from './footer-schema'

export function FooterColumn(props: FooterColumn) {
	const { title, content } = props

	return (
		<div>
			{title ? (
				<div className="text-sm font-bold mb-2 text-muted-foreground/50">{title}</div>
			) : null}
			{content ? (
				<ul className="flex flex-col gap-2 text-sm">
					{content.map((action, index) => (
						<li key={`footer-action-${index}`}>
							<Action {...action} />
						</li>
					))}
				</ul>
			) : null}
		</div>
	)
}

export function Footer(props: Footer) {
	const { columns = [], bottomSection, logo, topSection } = props

	const columnCount = Math.min(logo ? columns.length : columns.length - 1, 4)
	const columnClasses = [
		'grid-cols-[1.5fr_1fr]',
		'grid-cols-[1.5fr_1fr]',
		'grid-cols-[1.5fr_1fr_1fr]',
		'grid-cols-[1.5fr_1fr_1fr_1fr]',
		'grid-cols-[1.5fr_1fr_1fr_1fr_1fr]',
	]

	return (
		<footer className="pt-16 pb-6 bg-muted text-muted-foreground">
			<div className="px-14">
				<div className="container mx-auto px-16">
					{topSection ? (
						<div className="text-sm text-center mb-12">{topSection.content}</div>
					) : null}

					<div
						className={cn(
							'grid grid-rows-[auto] gap-x-8 gap-y-4 grid-auto-columns-[1fr]',
							columnClasses[columnCount]
						)}
					>
						{logo ? (
							<div className="w-16 h-16 transition duration-300 grayscale opacity-80 invert-[.2] hover:grayscale-[.2] hover:opacity-90 hover:invert-0">
								<Link href="/">
									<Image src={logo.src} alt="" width="64" height="64" />
								</Link>
							</div>
						) : (
							<div />
						)}
						{columns.map((column, index) => (
							<FooterColumn key={`column-${index}`} {...column} />
						))}
					</div>
					{bottomSection ? (
						<div className="text-sm text-center mt-12">{bottomSection.content}</div>
					) : null}
				</div>
			</div>
		</footer>
	)
}
