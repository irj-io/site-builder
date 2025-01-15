export default function PageLayout({ children }: Readonly<{ children: React.ReactNode }>) {
	return (
		<>
			<header></header>
			{children}
			<footer></footer>
		</>
	)
}
