import { Card, CardContent } from '@/components/ui/card'

export default function SignUpCompletedPage() {
	return (
		<Card>
			<CardContent>
				<div className="flex items-center justify-center h-full py-20">
					<div className="flex flex-col items-center justify-center">
						<span className="material-symbols-rounded text-foreground/80 text-8xl h-20 w-20 mb-6">
							owl
						</span>
						<p className="text-2xl text-center">
							Thanks for signing up. We&apos;ll be in touch as soon as we&apos;re ready for you.
						</p>
					</div>
				</div>
			</CardContent>
		</Card>
	)
}
