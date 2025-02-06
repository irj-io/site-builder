import { format, parseISO } from 'date-fns'
import { enGB } from 'date-fns/locale/en-GB'
import Image from 'next/image'
import { ReactNode } from 'react'

import { ArticleBreadcrumb } from '@/components/article-breadcrumb'
import { ArticleData } from '@/utils/post-schema'
import { TypographyH1, TypographyLead } from './typography/typography'

interface ArticleProps {
	data: ArticleData
	Markdown: ReactNode
}

export async function Article({ data, Markdown }: ArticleProps) {
	return (
		<>
			<nav className="mb-8">
				<ArticleBreadcrumb slug={data.slug} />
			</nav>
			<div className="grid grid-cols-[80px_1fr] gap-6">
				<div>
					<Image
						src={data.authorAvatarUrl}
						alt={data.author}
						className="rounded-full h-20 w-20 object-cover"
						height={80}
						width={80}
					/>
				</div>
				<div>
					<div className="pb-8">
						<TypographyH1>{data.title}</TypographyH1>
						<p className="text-lg font-bold mb-4">
							{data.author}, {format(parseISO(data.date), 'PP', { locale: enGB })}
						</p>
						{data.description ? <TypographyLead>{data.description}</TypographyLead> : null}
					</div>
					{data.banner ? (
						<Image
							src={data.banner}
							alt={data.bannerAlt || ''}
							className="max-w-full"
							height={960}
							width={960}
						/>
					) : null}
					<div className="py-8">{Markdown}</div>
				</div>
			</div>
		</>
	)
}
