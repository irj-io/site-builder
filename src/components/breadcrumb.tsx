import * as changeCase from 'change-case'
import Link from 'next/link'
import { JSX } from 'react'

const getHref = (slug: string[], position: number) => {
	return `/${slug.slice(0, position + 1).join('/')}`
}

export function Breadcrumb({ slug }: { slug: string[] }) {
	return (
		<ol className="flex gap-1 items-center">
			{slug.reduce((acc, id, index) => {
				if (acc.length > 0) {
					acc.push(
						<li
							aria-hidden="true"
							className="material-symbols-rounded text-3xl"
							key={`separator-${index}`}
						>
							chevron_right
						</li>
					)
				}
				acc.push(
					<li key={`crumb-${index}`}>
						<Link className="text-lg hover:underline" href={getHref(slug, index)}>
							{changeCase.sentenceCase(id)}
						</Link>
					</li>
				)
				return acc
			}, [] as JSX.Element[])}
		</ol>
	)
}
