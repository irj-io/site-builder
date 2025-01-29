'use server'

import { cookies } from 'next/headers'

import { Currency, defaultCurrency } from '@/utils/currency'

export async function getCurrency(): Promise<Currency> {
	const cookieStore = await cookies()
	return (cookieStore.get('currency')?.value as Currency) || defaultCurrency
}

export async function setCurrency(currency: Currency) {
	const cookieStore = await cookies()
	cookieStore.set('currency', currency, {
		httpOnly: true,
		path: '/pricing',
		secure: process.env.NODE_ENV === 'production',
	})
}
