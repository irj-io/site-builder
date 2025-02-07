'use client'

import { setCurrency } from '@/app/(actions)/currency'
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select'
import { currencies, Currency, defaultCurrency } from '@/utils/currency'

export function CurrencySelector({
	selectedCurrency = defaultCurrency,
}: {
	selectedCurrency?: Currency
}) {
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
