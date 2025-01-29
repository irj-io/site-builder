import Image from 'next/image'
import Link from 'next/link'

import PageLayout from '@/components/page-layout'
import { Section } from '@/components/section/section'
import { getAllArticles } from '@/utils/articles'
import { cn } from '@/utils/cn'

export default async function Help() {
	const articles = await getAllArticles('help')

	return (
		<PageLayout>
			<Section>
				<div className="container mx-auto px-6 py-16">
					<h1 className="text-5xl font-bold mb-8">Help</h1>
					<div className="grid grid-cols-12 gap-4">
						{articles.map((item, index) => (
							<div
								key={`grid-item-${index}`}
								className={cn('aspect-square', {
									'col-span-8 row-span-2': index === 0,
									'col-span-4 row-span-1': index !== 0,
								})}
							>
								<Link
									className="flex flex-col h-full bg-surface rounded-lg shadow overflow-hidden"
									href={item.href}
								>
									<div className="flex-auto min-h-0">
										{item.data.banner && /^\/assets\//.test(item.data.banner) ? (
											<Image
												src={item.data.banner}
												alt={item.data.bannerAlt}
												className={'w-full h-full object-cover object-center'}
												width="800"
												height="800"
											/>
										) : null}
									</div>
									<div className="shrink-0 basis-[120px] h-[120px] px-4 py-4">
										{item.data.title ? <h3 className="text-2xl mb-2">{item.data.title}</h3> : null}
										{item.data.description ? (
											<p className="text-lg text-on-surface/60">{item.data.description}</p>
										) : null}
									</div>
								</Link>
							</div>
						))}
					</div>
				</div>
			</Section>
		</PageLayout>
	)
}
