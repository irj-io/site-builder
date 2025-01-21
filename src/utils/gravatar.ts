import crypto from 'node:crypto'

const GRAVATAR_URL = 'https://secure.gravatar.com/avatar/'
const emailToHash = (email: string) => crypto.hash('sha256', email)

export const getAvatarImageUrl = (input?: string) => {
	if (!input) return ''

	const query = ['r=pg', 'd=404']
	const hash = emailToHash(input)

	return `${GRAVATAR_URL}${hash}?${query.join('&')}`
}
