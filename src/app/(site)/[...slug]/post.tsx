import path from 'node:path'
import Image from 'next/image'
import { ReactNode } from 'react'

import { AuthorHeader } from '@/components/author-header'
import { Breadcrumb } from '@/components/breadcrumb'
import { PostData } from '@/utils/post-schema'

interface PostProps {
	data: PostData
	Markdown: ReactNode
}

export async function Post({ data, Markdown }: PostProps) {
	console.log('data', data)
	const bannerSrc = data.banner
	if (data.banner && data.banner.startsWith('./images/')) {
		//bannerSrc = `@/content/${path.join(...data.slug, data.banner)}`
		//const { default: src } = await import(`@/content/${path.join(...data.slug, data.banner)}`)
		//bannerSrc = src
		data.banner = ''
		console.log('bannerSrc', bannerSrc)
	}

	return (
		<>
			<nav className="mb-4">
				<Breadcrumb slug={data.slug} />
			</nav>
			<div className="pb-8">
				<h1 className="text-5xl font-extrabold mb-4">{data.title}</h1>
				{data.description ? (
					<p className="text-2xl font-medium text-on-surface/50 mb-4">{data.description}</p>
				) : null}
				<AuthorHeader
					author={{
						avatarUrl: data.authorAvatarUrl,
						name: data.author,
					}}
					date={data.date}
				/>
			</div>
			{data.banner ? (
				<Image
					src={bannerSrc}
					alt={data.bannerAlt}
					className="max-w-full"
					height={960}
					width={960}
				/>
			) : null}
			<div className="py-8">{Markdown}</div>
		</>
	)
}
