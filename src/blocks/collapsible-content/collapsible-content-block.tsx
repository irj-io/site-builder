import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/24/outline'
import React from 'react'
import { omit } from 'remeda'

import { Section } from '@/components/section'
import { cn } from '@/utils/cn'

export function CollapsibleContentBlock(props) {
	const { data } = props
	const { title, items = [], sectionProps: _sectionProps } = data

	const sectionProps = _sectionProps ? omit(_sectionProps, ['className']) : {}

	return (
		<Section className={cn('flex flex-col px-8 py-6', _sectionProps?.className)} {...sectionProps}>
			{title ? <div className="text-2xl">{title}</div> : null}
			{items.map((item, index) => (
				<Disclosure
					key={`item-${index}`}
					as="div"
					className="p-2"
					defaultOpen={index === 0 ? true : false}
				>
					<DisclosureButton className="group flex w-full items-center justify-between">
						<span className="text-sm/6 font-medium">{item.title}</span>
						<ChevronDownIcon className="size-5 group-data-[open]:rotate-180" />
					</DisclosureButton>
					<DisclosurePanel className="mt-2 text-sm/5">{item.content}</DisclosurePanel>
				</Disclosure>
			))}
		</Section>
	)
}
