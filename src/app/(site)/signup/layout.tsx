import PageLayout from '@/components/page-layout'
import { Section } from '@/components/section/section'

export default async function SignUpLayout({ children }: { children: React.ReactNode }) {
	return (
		<PageLayout>
			<Section>
				<div className="container mx-auto px-6 py-16 flex flex-col items-center justify-center gap-6">
					{children}
				</div>
			</Section>
		</PageLayout>
	)
}
