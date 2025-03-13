'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { getSectionProps, Section } from '../../components/section/section'
import { SectionHeader } from '../../components/section/section-header'
import {
	Button,
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
	Input,
	Textarea,
} from '../../components/ui'
import { cn } from '../../utils/cn'
import type { BlockProps } from '../block-types'
import type { ContactFormProps } from './config'

const formSchema = z.object({
	name: z
		.string()
		.min(2, { message: 'Name must be at least 2 characters.' })
		.max(50, { message: 'Name cannot be longer than 50 characters.' }),
	email: z.string().email(),
	message: z.string(),
})

export function ContactFormBlock(props: BlockProps<ContactFormProps>) {
	const { title, section } = props

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			name: '',
			email: '',
			message: '',
		},
	})

	const onSubmit = (values: z.infer<typeof formSchema>) => {
		// Do something with the form values.
		console.log('TODO: send form result somewhere', values)
	}

	return (
		<Section {...getSectionProps(section, { className: 'px-8 py-24' })}>
			<div className="container mx-auto max-w-4xl flex flex-col gap-8">
				<SectionHeader titleClassName="mb-16" title={title} />

				<Form {...form}>
					<form onSubmit={form.handleSubmit(onSubmit)}>
						<div className="flex gap-8">
							<div className="grow">
								<FormField
									control={form.control}
									name="name"
									render={({ field }) => (
										<FormItem>
											<FormLabel className="text-sm/6 font-medium">Your Name</FormLabel>
											<FormControl>
												<Input
													className={cn(
														'border mt-3 block w-full rounded-lg py-1.5 px-3 text-sm/6',
														'data-[focus]:outline-2 data-[focus]:-outline-offset-2'
													)}
													{...field}
												/>
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
							</div>
							<div className="grow">
								<FormField
									control={form.control}
									name="email"
									render={({ field }) => (
										<FormItem>
											<FormLabel className="text-sm/6 font-medium">Your Email</FormLabel>
											<FormControl>
												<Input
													className={cn(
														'border mt-3 block w-full rounded-lg py-1.5 px-3 text-sm/6',
														'data-[focus]:outline-2 data-[focus]:-outline-offset-2'
													)}
													{...field}
												/>
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
							</div>
						</div>
						<div className="">
							<FormField
								control={form.control}
								name="message"
								render={({ field }) => (
									<FormItem>
										<FormLabel className="text-sm/6 font-medium">Your Message</FormLabel>
										<Textarea
											className={cn(
												'border mt-3 block w-full rounded-lg py-1.5 px-3 text-sm/6',
												'data-[focus]:outline-2 data-[focus]:-outline-offset-2'
											)}
											rows={3}
											{...field}
										/>
										<FormMessage />
									</FormItem>
								)}
							/>
						</div>
						<div>
							<Button type="submit">Submit</Button>
						</div>
					</form>
				</Form>
			</div>
		</Section>
	)
}
