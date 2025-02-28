'use client';
import { Loader2 } from 'lucide-react';
import { useSearchParams } from 'next/navigation';
import { useEffect } from 'react';
import PageLayout from '../../../../components/page-layout';
import { api } from '../../../../utils/api';
import { useAsync } from '../../../../utils/use-async';
export default function SwitchTeamPage() {
    const searchParams = useSearchParams();
    const { run, status } = useAsync();
    const action = searchParams.get('action');
    const token = searchParams.get('token');
    useEffect(() => {
        if (token && action) {
            run(api.switchTeam(token, action));
        }
    }, [action, run, token]);
    const message = action === 'accept'
        ? 'Your team was switched successfully.'
        : 'Invite declined. You will stay with your current team.';
    return (<PageLayout>
			<div className="container mx-auto flex items-center justify-center h-full py-16">
				<p className="text-2xl text-center">
					{status === 'pending' || status === 'idle' ? (<p className="flex flex-col gap-8 items-center">
							Switching teams
							<Loader2 className="animate-spin h-10 w-10"/>
						</p>) : status === 'rejected' ? ('Error switching teams') : (message)}
				</p>
			</div>
		</PageLayout>);
}
//# sourceMappingURL=switch-team-page.jsx.map