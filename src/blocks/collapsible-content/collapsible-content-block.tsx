import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/24/outline'
import React from 'react'
import { omit } from 'remeda'

import { Section } from '@/components/section'
import { cn } from '@/utils/cn'
import { CollapsibleContent } from '@/utils/page-schema'
import { BlockProps } from '../block-types'

export function CollapsibleContentBlock(props: BlockProps<CollapsibleContent>) {
	const { title, items = [], section: _sectionProps } = props

	const sectionProps = _sectionProps ? omit(_sectionProps, ['className']) : null
	const sectionClassName = _sectionProps?.className

	return (
		<Section className={cn('flex flex-col px-8 py-16', sectionClassName)} {...sectionProps}>
			{title ? <div className="text-4xl text-center mb-12">{title}</div> : null}
			<div className="container mx-auto">
				{items.map((item, index) => (
					<Disclosure
						key={`item-${index}`}
						as="div"
						className="p-2"
						defaultOpen={index === 0 ? true : false}
					>
						<DisclosureButton className="group flex w-full items-center justify-between">
							<span className="text-lg/6 font-medium">{item.title}</span>
							<ChevronDownIcon className="size-5 group-data-[open]:rotate-180" />
						</DisclosureButton>
						<DisclosurePanel className="mt-2 text-base/5">{item.content}</DisclosurePanel>
					</Disclosure>
				))}
			</div>
		</Section>
	)
}
