import Link from 'next/link'

import { getArticleData } from '@/utils/articles'

export async function TableOfContents({ slug }: { slug: string[] }) {
	const { toc } = await getArticleData(slug)

	if (toc.length === 0) {
		return null
	}

	return (
		<div className="flex flex-col gap-2 mb-6">
			<p className="font-bold">On this page</p>
			<ul className="flex flex-col gap-2">
				{toc.map((item, index) => (
					<li key={`toc-${index}`}>
						<Link className="hover:text-blue-600" href={item.href}>
							{item.value}
						</Link>
					</li>
				))}
			</ul>
		</div>
	)
}
