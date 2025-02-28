'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import { Loader2 } from 'lucide-react';
import { useCallback, useState } from 'react';
import { FormProvider, useForm, useFormContext } from 'react-hook-form';
import { z } from 'zod';
import PageLayout from '../../../../components/page-layout';
import { TypographyH4 } from '../../../../components/typography/typography';
import { Button } from '../../../../components/ui/button';
import { FormControl, FormField, FormItem, FormLabel } from '../../../../components/ui/form';
import { Input } from '../../../../components/ui/input';
import { api } from '../../../../utils/api';
const AccountDeletionFormSchema = z.object({
    email: z.string().trim().email('Must be a valid email address'),
    code: z.string().trim(),
});
const EmailCaptureForm = ({ isLoading }) => {
    const form = useFormContext();
    return (<div className="flex flex-col gap-6">
			<p>Sorry to see you go.</p>
			<p>
				If there&apos;s anything we can do to change your mind, please reach out to us at
				help@tyto.me.
			</p>
			<p className="text-sm">
				To initiate the deletion of your account, please provide the email address you use on Tyto
				below.
			</p>

			<FormField control={form.control} name="email" render={({ field }) => (<FormItem>
						<FormLabel>Email</FormLabel>
						<FormControl>
							<Input {...field}/>
						</FormControl>
					</FormItem>)}/>

			<p>
				If it is a valid email account within our system, we will send you a verification code by
				email — to make sure it&apos;s actually you.
			</p>
			<p>
				Then, once you have typed in the confirmation code into this form, we will start the account
				deletion process.
			</p>

			<Button type={'submit'} disabled={isLoading} variant={'outline'}>
				{isLoading ? <Loader2 className="animate-spin"/> : null}
				Delete my account
			</Button>
		</div>);
};
const ConfirmationCodeForm = ({ isLoading }) => {
    const form = useFormContext();
    return (<>
			<p className="text-bold">Enter the confirmation code we just sent to your email.</p>
			<FormField control={form.control} name="code" render={({ field }) => (<FormItem>
						<FormLabel>Confirmation Code</FormLabel>
						<FormControl>
							<Input {...field}/>
						</FormControl>
					</FormItem>)}/>
			<Button type={'submit'} disabled={isLoading} variant={'outline'}>
				{isLoading ? <Loader2 className="animate-spin"/> : null}
				Send confirmation email
			</Button>
		</>);
};
export default function AccountDeletionPage() {
    const [step, setStep] = useState('email');
    const [status, setStatus] = useState('idle');
    const [error, setError] = useState('');
    const form = useForm({ resolver: zodResolver(AccountDeletionFormSchema) });
    const onSubmit = useCallback(async (data) => {
        setStatus('loading');
        try {
            await api.confirmAccountDeletion(data);
            if (step === 'email') {
                await api.requestAccountDeletion({ email: data.email });
                setStep('code');
            }
            else if (step === 'code') {
                await api.confirmAccountDeletion(data);
                setStatus('success');
            }
        }
        catch (err) {
            console.error(err);
            setStatus('failed');
            setError(step === 'email' ? 'Validating email failed' : 'Sending account deletion request failed');
        }
    }, [step]);
    const onErrors = useCallback((errors) => {
        console.error(errors);
    }, []);
    return (<PageLayout>
			<div className="container mx-auto flex items-center justify-center h-full py-16">
				<FormProvider {...form}>
					<form onSubmit={form.handleSubmit(onSubmit, onErrors)}>
						<div className="flex flex-col gap-6">
							<TypographyH4>Account Deletion</TypographyH4>

							{status === 'success' ? (<p className="text-bold">
									The account deletion process has begun. We will be in contact to finish off the
									process.
								</p>) : status === 'failed' ? (<p className="text-center">{error}</p>) : step === 'code' ? (<ConfirmationCodeForm isLoading={status === 'loading'}/>) : (<EmailCaptureForm isLoading={status === 'loading'}/>)}
						</div>
					</form>
				</FormProvider>
			</div>
		</PageLayout>);
}
//# sourceMappingURL=page.jsx.map