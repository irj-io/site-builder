import { ArticlesMenu } from '@/components/articles-menu'

export default function PostLayout({
	children,
	params,
}: Readonly<{
	children: React.ReactNode
	params: { slug: string[] }
}>) {
	const { slug } = params

	return (
		<div className="container mx-auto px-6 py-8">
			<div className="grid grid-cols-12 gap-6">
				<div className="col-span-8 px-16">{children}</div>
				<div className="col-span-4">
					<ArticlesMenu slug={slug} />
				</div>
			</div>
		</div>
	)
}
