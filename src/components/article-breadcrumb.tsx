import * as changeCase from 'change-case'
import type { JSX } from 'react'

import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from './ui/breadcrumb'

const getHref = (slug: string[], position: number) => {
	return `/${slug.slice(0, position + 1).join('/')}`
}

export function ArticleBreadcrumb({ slug }: { slug: string[] }) {
	return (
		<Breadcrumb>
			<BreadcrumbList>
				{slug.reduce((acc, id, index) => {
					const isLast = index === slug.length - 1

					if (acc.length > 0) {
						acc.push(<BreadcrumbSeparator key={`separator-${index}`} />)
					}

					acc.push(
						<BreadcrumbItem key={`crumb-${index}`}>
							{isLast ? (
								<BreadcrumbPage>{changeCase.sentenceCase(id)}</BreadcrumbPage>
							) : (
								<BreadcrumbLink href={getHref(slug, index)}>
									{changeCase.sentenceCase(id)}
								</BreadcrumbLink>
							)}
						</BreadcrumbItem>
					)
					return acc
				}, [] as JSX.Element[])}
			</BreadcrumbList>
		</Breadcrumb>
	)
}
