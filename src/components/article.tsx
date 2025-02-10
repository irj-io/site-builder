import { format, parseISO } from 'date-fns'
import { enGB } from 'date-fns/locale/en-GB'
import Image from 'next/image'
import { ReactNode } from 'react'

import { ArticleBreadcrumb } from '@/components/article-breadcrumb'
import { ArticleData } from '@/utils/post-schema'
import { Media } from './media/media'
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
			<div className="grid md:grid-cols-[72px_1fr] lg:grid-cols-[80px_1fr] gap-6">
				<div className="min-w-0">
					<Image
						src={data.authorAvatarUrl}
						alt={data.author}
						className="rounded-full md:h-18 md:w-18 lg:h-20 lg:w-20 object-cover"
						height={80}
						width={80}
					/>
				</div>
				<div className="min-w-0">
					<div className="pb-8">
						<TypographyH1>{data.title}</TypographyH1>
						<p className="text-lg font-bold mb-4">
							{data.author}, {format(parseISO(data.date), 'PP', { locale: enGB })}
						</p>
						{data.description ? <TypographyLead>{data.description}</TypographyLead> : null}
					</div>
					{data.media ? (
						<Media media={data.media} imageClassName="max-w-full" height={960} width={960} />
					) : data.banner ? ( // Deprecated, use media
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
