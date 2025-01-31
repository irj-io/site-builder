'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { Loader2 } from 'lucide-react'
import Link from 'next/link'
import { useRouter, useSearchParams } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Checkbox } from '@/components/ui/checkbox'
import { Form, FormControl, FormField, FormItem, FormLabel } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { cn } from '@/lib/utils'
import { api } from '@/utils/api'
import { useAsync } from '@/utils/use-async'

interface SignUpError {
	type: 'EMAIL_TAKEN'
	message: 'string'
}

const SignUpFormBaseSchema = z.object({
	fullName: z.string(),
	email: z.string(),
	wantsNewsletter: z.boolean(),
})
const SignUpFormWithTeamDataSchema = SignUpFormBaseSchema.extend({
	teamName: z.string(),
	teamSize: z.coerce.number(),
})
const SignUpFormWithTokenSchema = SignUpFormBaseSchema.extend({
	token: z.string(),
})
type SignUpForm = z.infer<typeof SignUpFormSchema>
const SignUpFormSchema = z.union([SignUpFormWithTeamDataSchema, SignUpFormWithTokenSchema])

export function SignUpForm({ className, ...props }: React.ComponentPropsWithoutRef<'div'>) {
	const router = useRouter()
	const searchParams = useSearchParams()
	const { error, run, status } = useAsync<SignUpForm, SignUpError>({ throwErrors: true })
	const form = useForm<SignUpForm>({
		resolver: zodResolver(SignUpFormSchema),
		defaultValues: {
			fullName: '',
			email: '',
			teamName: '',
			teamSize: 0,
			wantsNewsletter: false,
		},
	})

	const plan = 'Plan goes here from previous page if any'
	const inviteToken = searchParams.get('s')

	const onSubmit = (formData: SignUpForm) => {
		if (status === 'pending') return

		const signUpData = inviteToken
			? {
					source: 'website',
					fullName: formData.fullName,
					email: formData.email,
					token: inviteToken,
				}
			: { source: 'website', ...formData }

		run(api.signUp(signUpData)).then(() => {
			// Trigger google tag manager event
			// @ts-expect-error Property 'dataLayer' does not exist on type 'Window & typeof globalThis'
			if (window.dataLayer) {
				// @ts-expect-error Property 'dataLayer' does not exist on type 'Window & typeof globalThis'
				window.dataLayer.push({ event: 'signup form completed' })
			}

			router.push('/signup/completed')
		})
	}

	return (
		<div className={cn('flex flex-col gap-6', className)} {...props}>
			<Card>
				<CardHeader className="text-center">
					{status === 'rejected' && error.type !== 'EMAIL_TAKEN' ? (
						<p className="text-lg text-center text-red-500 mb-4">
							{error.message
								? error.message
								: 'Sorry, something went wrong. We have alerted our engineers. Please try again in 30 minutes.'}
						</p>
					) : null}
					{plan ? <CardTitle className="text-xl">{plan}</CardTitle> : null}
				</CardHeader>
				<CardContent>
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
									<Button
										type="submit"
										className="w-full"
										size="lg"
										disabled={status === 'pending'}
									>
										{status === 'pending' ? <Loader2 className="animate-spin" /> : null}
										Sign Up
									</Button>
								</div>
							</div>
						</form>
					</Form>
				</CardContent>
			</Card>
			<div className="text-balance text-center text-xs text-muted-foreground [&_a]:underline [&_a]:underline-offset-4 [&_a:hover]:text-primary">
				By clicking continue, you agree to our <Link href="/legal/terms">Terms of Service</Link> and{' '}
				<Link href="/legal/privacy">Privacy Policy</Link>.
			</div>
		</div>
	)
}
