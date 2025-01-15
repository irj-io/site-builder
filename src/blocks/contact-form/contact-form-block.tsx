import { Description, Field, Input, Label, Textarea } from '@headlessui/react'
import { omit } from 'remeda'

import { Section } from '@/components/section'
import { cn } from '@/utils/cn'

export function ContactFormBlock(props) {
	const { data } = props
	const { title, sectionProps: _sectionProps } = data

	const sectionProps = _sectionProps ? omit(_sectionProps, ['className']) : {}

	return (
		<Section className={cn('flex flex-col px-8 py-6', _sectionProps?.className)} {...sectionProps}>
			{title ? <div className="text-4xl text-center mb-16">{title}</div> : null}
			<div className="container mx-auto flex flex-col gap-8">
				<div className="flex gap-8">
					<div className="grow">
						<Field>
							<Label className="text-sm/6 font-medium">Your Name</Label>
							<Input
								className={cn(
									'border mt-3 block w-full rounded-lg py-1.5 px-3 text-sm/6',
									'data-[focus]:outline-2 data-[focus]:-outline-offset-2'
								)}
							/>
						</Field>
					</div>
					<div className="grow">
						<Field>
							<Label className="text-sm/6 font-medium">Your Email</Label>
							<Input
								className={cn(
									'border mt-3 block w-full rounded-lg py-1.5 px-3 text-sm/6',
									'data-[focus]:outline-2 data-[focus]:-outline-offset-2'
								)}
							/>
						</Field>
					</div>
				</div>
				<div className="">
					<Field>
						<Label className="text-sm/6 font-medium">Your Message</Label>
						<Textarea
							className={cn(
								'border mt-3 block w-full rounded-lg py-1.5 px-3 text-sm/6',
								'data-[focus]:outline-2 data-[focus]:-outline-offset-2'
							)}
							rows={3}
						/>
					</Field>
				</div>
			</div>
		</Section>
	)
}
