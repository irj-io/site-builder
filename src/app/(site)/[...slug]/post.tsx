import Image from 'next/image'
import { ReactNode } from 'react'

import { Breadcrumb } from '@/components/breadcrumb'
import { PostData } from '@/utils/post-schema'

interface PostProps {
	data: PostData
	Markdown: ReactNode
}

export function Post({ data, Markdown }: PostProps) {
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
				{data.author}
				{data.date}
			</div>
			{data.banner && /^\/assets\//.test(data.banner) ? (
				<Image
					src={data.banner}
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
