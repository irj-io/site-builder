import { Suspense } from 'react'

import { SignUpForm } from '@/components/signup/signup-form'

export default async function SignUpPage() {
	return (
		<Suspense
			fallback={<div className="h-full w-full flex align-center justify-center">Loading...</div>}
		>
			<SignUpForm />
		</Suspense>
	)
}
