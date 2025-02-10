import { Suspense } from 'react'

import SwitchTeamPage from './switch-team-page'

export default function Page() {
	// TODO: use a better fallback component
	return (
		<Suspense
			fallback={<div className="h-full w-full flex align-center justify-center">Loading...</div>}
		>
			<SwitchTeamPage />
		</Suspense>
	)
}
