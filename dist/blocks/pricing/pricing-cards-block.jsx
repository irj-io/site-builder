import { getCurrency } from '@/app/(actions)/currency';
import { Action } from '@/components/actions/action';
import { getSectionProps, Section } from '@/components/section/section';
import { SectionHeader } from '@/components/section/section-header';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, } from '@/components/ui/card';
import { CurrencySelector } from './currency-selector';
export async function PricingCardsBlock(props) {
    const currency = await getCurrency();
    const { title, subtitle, plans, section } = props;
    return (<Section {...getSectionProps(section, { className: 'py-20 lg:py-24' })}>
			<div className="container mx-auto">
				<div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
					<SectionHeader title={title} subtitle={subtitle}/>
				</div>

				<div className="flex justify-center items-center">
					<CurrencySelector selectedCurrency={currency}/>
				</div>

				<div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
					{plans.map((plan) => {
            const actionProps = plan.action.type === 'button' ? { size: plan.action.size || 'lg' } : {};
            return (<Card key={plan.type} className="flex flex-col">
								<CardHeader className="text-center pb-2">
									<CardTitle className="mb-7">{plan.type}</CardTitle>
									<span className="font-bold text-5xl">{plan.price[currency]}</span>
								</CardHeader>
								{plan.descr ? (<CardDescription className="text-center whitespace-pre-wrap">
										{plan.descr}
									</CardDescription>) : null}
								<CardContent className="text-center py-8">
									<Action {...plan.action} {...actionProps}/>
								</CardContent>
								{plan.features.length > 0 ? (<CardFooter className="">
										<ul className="space-y-2.5 text-sm  w-full">
											{plan.features.map((feature, index) => (<li key={`plan-${plan.type}-feature-${index}`} className="flex space-x-2 justify-center">
													<span className="text-muted-foreground">{feature.label}</span>
												</li>))}
										</ul>
									</CardFooter>) : null}
							</Card>);
        })}
				</div>
			</div>
		</Section>);
}
//# sourceMappingURL=pricing-cards-block.jsx.map