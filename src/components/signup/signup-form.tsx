'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import * as changeCase from 'change-case'
import { Loader2 } from 'lucide-react'
import Link from 'next/link'
import type { ComponentProps } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { type AsyncState } from '../../hooks/use-async'
import { Button } from '../ui/button'
import { CardTitle } from '../ui/card'
import { Checkbox } from '../ui/checkbox'
import { Form, FormControl, FormField, FormItem, FormLabel } from '../ui/form'
import { Input } from '../ui/input'

export interface SignUpError {
	type: 'EMAIL_TAKEN'
	message: 'string'
}

type SignUpFormProps = Omit<ComponentProps<'div'>, 'onSubmit'> & {
	inviteToken: string
	onSubmit: (formData: SignUpFormFields) => void
	plan: string
} & AsyncState<null, SignUpError>

const SignUpFormBaseSchema = z.object({
	fullName: z.string().min(1).trim(),
	email: z.string().email().min(1).trim(),
	wantsNewsletter: z.boolean(),
})
const SignUpFormWithTeamDataSchema = SignUpFormBaseSchema.extend({
	teamName: z.string().min(1).trim(),
	teamSize: z.coerce.number(),
})
const SignUpFormWithTokenSchema = SignUpFormBaseSchema.extend({
	token: z.string(),
})
export type SignUpFormFields = z.infer<typeof SignUpFormFieldsSchema>
const SignUpFormFieldsSchema = z.union([SignUpFormWithTeamDataSchema, SignUpFormWithTokenSchema])

const mapErrorMessage = (message: string = '') => {
	if (/failed to fetch/i.test(message)) {
		return 'Unable to reach the login server. Please try again later. Or contact us at help@tyto.me.'
	}

	return 'Sorry, something went wrong. We have alerted our engineers. Please try again in 30 minutes.'
}

export function SignUpForm({
	className,
	error,
	onSubmit,
	inviteToken,
	plan,
	status,
	...props
}: SignUpFormProps) {
	const form = useForm<SignUpFormFields>({
		resolver: zodResolver(SignUpFormFieldsSchema),
		defaultValues: {
			fullName: '',
			email: '',
			teamName: '',
			teamSize: 0,
			wantsNewsletter: false,
		},
	})

	const { formState } = form
	const errorMessage =
		Object.keys(formState.errors).length > 0
			? 'Please correct the fields marked in red below'
			: status === 'rejected' && error.type !== 'EMAIL_TAKEN'
				? mapErrorMessage(error.message)
				: ''

	return (
		<div className={className} {...props}>
			{errorMessage || plan ? (
				<div className="flex flex-col space-y-1.5 px-8 text-center">
					{plan ? (
						<CardTitle className="text-xl">{changeCase.sentenceCase(plan)} Plan</CardTitle>
					) : null}
					{errorMessage ? (
						<p className="text-lg text-center text-red-500 mb-4">{errorMessage}</p>
					) : null}
				</div>
			) : null}
			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
					<div className="grid gap-6">
						<div className="grid gap-4">
							<div className="grid gap-2">
								<FormField
									control={form.control}
									name="fullName"
									render={({ field }) => (
										<FormItem>
											<FormLabel>Your Full Name</FormLabel>
											<FormControl>
												<Input placeholder="Your Full Name" {...field} />
											</FormControl>
										</FormItem>
									)}
								/>
							</div>
							<div className="grid gap-2">
								<FormField
									control={form.control}
									name="email"
									render={({ field }) => (
										<FormItem>
											<FormLabel>Email Address</FormLabel>
											<FormControl>
												<Input placeholder="Email Address" {...field} />
											</FormControl>
										</FormItem>
									)}
								/>
								{status === 'rejected' && error.type === 'EMAIL_TAKEN' ? (
									<div className="flex gap-2 p-2">
										<span>Your email already exists!</span>
										<Link href={'https://tyto.me/login?forgot=1'}>Reset password</Link>
										<Link href={'https://tyto.me/login'}>Login</Link>
									</div>
								) : null}
							</div>

							{!inviteToken ? (
								<>
									<div className="grid gap-2">
										<FormField
											control={form.control}
											name="teamName"
											render={({ field }) => (
												<FormItem>
													<FormLabel>Team Name</FormLabel>
													<FormControl>
														<Input placeholder="Team Name" {...field} />
													</FormControl>
												</FormItem>
											)}
										/>
									</div>
									<div className="grid gap-2">
										<FormField
											control={form.control}
											name="teamSize"
											render={({ field }) => (
												<FormItem>
													<FormLabel>Team Size</FormLabel>
													<FormControl>
														<Input type="number" placeholder="Team Size" {...field} />
													</FormControl>
												</FormItem>
											)}
										/>
									</div>
									<div className="grid gap-2">
										<FormField
											control={form.control}
											name="wantsNewsletter"
											render={({ field }) => (
												<FormItem className="flex flex-row items-start space-x-3 space-y-0 py-4">
													<FormControl>
														<Checkbox checked={field.value} onCheckedChange={field.onChange} />
													</FormControl>
													<FormLabel>Keep me updated</FormLabel>
												</FormItem>
											)}
										/>
									</div>
								</>
							) : null}
							<Button type="submit" className="w-full" size="lg" disabled={status === 'pending'}>
								{status === 'pending' ? <Loader2 className="animate-spin" /> : null}
								Sign Up
							</Button>
						</div>
					</div>
				</form>
			</Form>
			<div className="text-balance text-center text-xs text-muted-foreground [&_a]:underline [&_a]:underline-offset-4 [&_a:hover]:text-primary mt-6">
				<p className="mb-2">100% privacy - we will never spam you!</p>
				<p>
					By clicking continue, you agree to our <Link href="/legal/terms">Terms of Service</Link>{' '}
					and <Link href="/legal/privacy">Privacy Policy</Link>.
				</p>
			</div>
		</div>
	)
}
