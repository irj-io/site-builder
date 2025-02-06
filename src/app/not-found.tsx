import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import imageSrc from '@/assets/owl-be-back-no-text.png'
import PageLayout from '@/components/page-layout'
import { TypographyH1, TypographyLead } from '@/components/typography/typography'

export const metadata: Metadata = {
	title: 'Page not found',
}

export default function NotFound() {
	return (
		<PageLayout>
			<div className={'container mx-auto max-w-5xl py-16'}>
				<div className={'flex flex-col align-center justify-center gap-4 m-6 p-16'}>
					<Image src={imageSrc} alt={'Not Found'} className={'w-full'} />
					<div className={'text-center'}>
						<TypographyH1 className="mb-4">Page not found</TypographyH1>
						<TypographyLead className="mb-8">Sorry, no can do, Kimosabe.</TypographyLead>

						<Link href="/" className="hover:underline">
							Return Home
						</Link>
					</div>
				</div>
			</div>
		</PageLayout>
	)
}
