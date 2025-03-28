import Image from 'next/image'
import type { ReactNode } from 'react'

import type { MarkdownData } from '../utils/post-schema'
import { ArticleBreadcrumb } from './article-breadcrumb'
import { AuthorHeader } from './author-header'
import { Media } from './media/media'

interface MarkdownContentProps {
	data: MarkdownData
	Markdown: ReactNode
}

export async function MarkdownContent({ data, Markdown }: MarkdownContentProps) {
	return (
		<>
			<nav className="mb-4">
				<ArticleBreadcrumb slug={data.slug} />
			</nav>

			{data.title || data.description || data.author ? (
				<div className="pb-8">
					{data.title ? <h1 className="text-5xl font-extrabold mb-4">{data.title}</h1> : null}
					{data.description ? (
						<p className="text-2xl font-medium text-on-surface/50 mb-4">{data.description}</p>
					) : null}
					{data.author && data.authorAvatarUrl && data.date ? (
						<AuthorHeader
							author={{
								avatarUrl: data.authorAvatarUrl,
								name: data.author,
							}}
							date={data.date}
						/>
					) : null}
				</div>
			) : null}

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

			<div className="py-8 text-xl font-light">{Markdown}</div>
		</>
	)
}
