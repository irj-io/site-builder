'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { Loader2 } from 'lucide-react'
import { useCallback, useState } from 'react'
import { FieldErrors, Form, useForm, useFormContext } from 'react-hook-form'
import { z } from 'zod'

import PageLayout from '@/components/page-layout'
import { TypographyH4 } from '@/components/typography/typography'
import { Button } from '@/components/ui/button'
import { FormControl, FormField, FormItem, FormLabel } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { api } from '@/utils/api'

type AccountDeletionForm = z.infer<typeof AccountDeletionFormSchema>
const AccountDeletionFormSchema = z.object({
	email: z.string().trim().email('Must be a valid email address'),
	code: z.string().trim(),
})

const EmailCaptureForm = ({ isPending }: { isPending: boolean }) => {
	const form = useFormContext()

	return (
		<div className="flex flex-col gap-6">
			<p>Sorry to see you go.</p>
			<p>
				If there&apos;s anything we can do to change your mind, please reach out to us at
				help@tyto.me.
			</p>
			<p className="text-sm">
				To initiate the deletion of your account, please provide the email address you use on Tyto
				below.
			</p>

			<FormField
				control={form.control}
				name="email"
				render={({ field }) => (
					<FormItem>
						<FormLabel>Email</FormLabel>
						<FormControl>
							<Input {...field} />
						</FormControl>
					</FormItem>
				)}
			/>

			<p>
				If it is a valid email account within our system, we will send you a verification code by
				email — to make sure it&apos;s actually you.
			</p>
			<p>
				Then, once you have typed in the confirmation code into this form, we will start the account
				deletion process.
			</p>

			<Button type={'submit'} disabled={isPending} variant={'outline'}>
				{isPending ? <Loader2 className="animate-spin" /> : null}
				Delete my account
			</Button>
		</div>
	)
}

const ConfirmationCodeForm = ({ isPending }: { isPending: boolean }) => {
	const form = useFormContext()

	return (
		<>
			<p className="text-bold">Enter the confirmation code we just sent to your email.</p>
			<FormField
				control={form.control}
				name="code"
				render={({ field }) => (
					<FormItem>
						<FormLabel>Confirmation Code</FormLabel>
						<FormControl>
							<Input {...field} />
						</FormControl>
					</FormItem>
				)}
			/>
			<Button type={'submit'} disabled={isPending} variant={'outline'}>
				{isPending ? <Loader2 className="animate-spin" /> : null}
				Send confirmation email
			</Button>
		</>
	)
}

export default function SwitchTeamPage() {
	const [status, setStatus] = useState('idle')
	const [error, setError] = useState('')
	const [isPending, setIsPending] = useState(false)
	const form = useForm<AccountDeletionForm>({ resolver: zodResolver(AccountDeletionFormSchema) })

	const onSubmit = useCallback((data: AccountDeletionForm) => {
		if (data.code) {
			setIsPending(true)
			api
				.confirmAccountDeletion(data)
				.then(() => {
					setStatus('success')
				})
				.catch((err) => {
					console.error(err)
					setStatus('failed')
					setError('Sending account deletion request failed')
				})
				.finally(() => {
					setIsPending(false)
				})
		} else if (data.email) {
			setStatus('pending')
			api
				.requestAccountDeletion({ email: data.email })
				.then(() => {
					setStatus('awaitingCode')
				})
				.catch((err) => {
					console.error(err)
					setStatus('failed')
					setError('Validating confirmation code failed')
				})
				.finally(() => {
					setIsPending(false)
				})
		}
	}, [])

	const onErrors = useCallback((errors: FieldErrors<AccountDeletionForm>) => {
		console.error(errors)
	}, [])

	return (
		<PageLayout>
			<div className="container mx-auto flex items-center justify-center h-full py-16">
				<Form {...form}>
					<form onSubmit={form.handleSubmit(onSubmit, onErrors)}>
						<div className="flex flex-col gap-6">
							<TypographyH4>Account Deletion</TypographyH4>

							{status === 'success' ? (
								<p className="text-bold">
									The account deletion process has begun. We will be in contact to finish off the
									process.
								</p>
							) : status === 'failed' ? (
								<p className="text-center">{error}</p>
							) : status === 'awaitingCode' ? (
								<ConfirmationCodeForm isPending={isPending} />
							) : (
								<EmailCaptureForm isPending={isPending} />
							)}
						</div>
					</form>
				</Form>
			</div>
		</PageLayout>
	)
}
