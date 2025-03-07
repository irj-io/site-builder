'use client'

import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '../../components/ui/select'
import { currencies, defaultCurrency, type Currency } from './currency'
import { usePricingContext } from './pricing-context'

export function CurrencySelector({
	selectedCurrency = defaultCurrency,
}: {
	selectedCurrency?: Currency
}) {
	const { setCurrency } = usePricingContext()
	const handleCurrencyChange = async (newCurrency: Currency) => {
		await setCurrency(newCurrency)
	}

	return (
		<Select defaultValue={selectedCurrency} onValueChange={handleCurrencyChange}>
			<SelectTrigger className="w-[180px]">
				<SelectValue placeholder={selectedCurrency.toUpperCase()} />
			</SelectTrigger>
			<SelectContent>
				{currencies.map((currency) => (
					<SelectItem key={currency} value={currency}>
						{currency.toUpperCase()}
					</SelectItem>
				))}
			</SelectContent>
		</Select>
	)
}
