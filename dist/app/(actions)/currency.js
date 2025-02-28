'use server';
import { cookies } from 'next/headers';
import { defaultCurrency } from '@/utils/currency';
export async function getCurrency() {
    var _a;
    const cookieStore = await cookies();
    return ((_a = cookieStore.get('currency')) === null || _a === void 0 ? void 0 : _a.value) || defaultCurrency;
}
export async function setCurrency(currency) {
    const cookieStore = await cookies();
    cookieStore.set('currency', currency, {
        httpOnly: true,
        path: '/pricing',
        secure: process.env.NODE_ENV === 'production',
    });
}
//# sourceMappingURL=currency.js.map