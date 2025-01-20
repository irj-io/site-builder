export default function PostLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<div className="container mx-auto px-6 py-8">
			<div className="grid grid-cols-12 gap-6">
				<div className="col-span-8">{children}</div>
				<div className="col-span-4">Article menu will go here</div>
			</div>
		</div>
	)
}
