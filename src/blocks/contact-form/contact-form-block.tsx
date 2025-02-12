import { Field, Input, Label, Textarea } from '@headlessui/react'

import { getSectionProps, Section } from '@/components/section/section'
import { SectionHeader } from '@/components/section/section-header'
import { cn } from '@/utils/cn'
import { BlockProps } from '../block-types'
import { ContactFormProps } from './config'

export function ContactFormBlock(props: BlockProps<ContactFormProps>) {
	const { title, section } = props

	return (
		<Section {...getSectionProps(section, { className: 'px-8 py-24' })}>
			<div className="container mx-auto max-w-4xl flex flex-col gap-8">
				<SectionHeader titleClassName="mb-16" title={title} />

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
