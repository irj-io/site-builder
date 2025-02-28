//import Image from 'next/image'
import { Suspense } from 'react';
import { SignUpForm } from '@/components/signup/signup-form';
import { TypographyH2 } from '@/components/typography/typography';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
export default async function SignUpPage() {
    return (<Suspense fallback={<div className="h-full w-full flex align-center justify-center">Loading...</div>}>
			<Card className="overflow-hidden w-full max-w-6xl">
				<div className="flex">
					<div className="flex-1 bg-primary">{/* <Image src="" width={400} height={400} /> */}</div>

					<div className="flex-1">
						<CardHeader className="px-10 my-8">
							<TypographyH2 className="text-center">Join the flock!</TypographyH2>
						</CardHeader>
						<CardContent className="px-10">
							<SignUpForm className="flex-1"/>
						</CardContent>
					</div>
				</div>
			</Card>
		</Suspense>);
}
//# sourceMappingURL=page.jsx.map