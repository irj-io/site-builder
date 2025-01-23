import Link from 'next/link'

import { getAllArticles } from '@/utils/articles'
import { cn } from '@/utils/cn'

export async function ArticlesMenu({ slug }: { slug: string[] }) {
	const articles = await getAllArticles('help')

	return (
		<div className="flex flex-col gap-2 mb-4">
			<p className="font-bold">Other articles</p>
			<ul className="flex flex-col gap-2">
				{articles.map((article, index) => (
					<li
						key={`article-menu-${index}`}
						className={cn('pl-4', {
							['border-l-2 border-blue-600 -ml-[2px]']: article.slug.at(-1) === slug.at(-1),
						})}
					>
						<Link className="text-lg hover:text-blue-600" href={article.href}>
							{article.data.title}
						</Link>
					</li>
				))}
			</ul>
		</div>
	)
}
