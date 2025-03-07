'use client'

import { createContext, useContext, type ReactNode } from 'react'

import { defaultCurrency, type Currency } from './currency'

interface PricingProviderAcitons {
	getCurrency: () => Promise<Currency>
	setCurrency: (currency: Currency) => Promise<void>
}

interface PricingContextType {
	getCurrency: () => Promise<Currency>
	setCurrency: (currency: Currency) => Promise<void>
}

export const PricingContext = createContext<PricingContextType>({
	getCurrency: async () => defaultCurrency,
	setCurrency: async () => {},
} satisfies PricingContextType)

export const usePricingContext = () => useContext(PricingContext)

export function PricingProvider({
	children,
	actions,
}: {
	children: ReactNode
	actions: PricingProviderAcitons
}) {
	return <PricingContext.Provider value={actions}>{children}</PricingContext.Provider>
}
