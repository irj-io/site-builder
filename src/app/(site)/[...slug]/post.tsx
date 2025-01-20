import Image from 'next/image'
import { JSX } from 'react'

import { PostData } from '@/utils/post-schema'

interface PostProps {
	data: PostData
}

function Breadcrumb({ slug }: { slug: string[] }) {
	// TODO: Use sentence case for slug ids
	// TODO: Add and handle links
	return (
		<ol className="flex gap-1 items-center">
			{slug.reduce((acc, id) => {
				if (acc.length > 0) {
					acc.push(
						<li aria-hidden="true" className="material-symbols-rounded">
							chevron_right
						</li>
					)
				}
				acc.push(<li>{id}</li>)
				return acc
			}, [] as JSX.Element[])}
		</ol>
	)
}

export function Post({ data }: PostProps) {
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
			{data.banner ? (
				<Image
					src={data.banner}
					alt={data.bannerAlt}
					className="max-w-full"
					height={960}
					width={960}
				/>
			) : null}
			<div dangerouslySetInnerHTML={{ __html: data.contentHtml }} />
		</>
	)
}
