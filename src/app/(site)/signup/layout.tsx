import PageLayout from '@/components/page-layout'
import { Section } from '@/components/section/section'
import { TypographyH1 } from '@/components/typography/typography'

export default async function SignUpLayout({ children }: { children: React.ReactNode }) {
	return (
		<PageLayout>
			<Section>
				<div className="container mx-auto px-6 py-16 flex flex-col items-center justify-center gap-6">
					<TypographyH1 className="text-center mb-8">Join the flock!</TypographyH1>
					<div className="flex w-full max-w-sm flex-col gap-6">{children}</div>
				</div>
			</Section>
		</PageLayout>
	)
}
