import crypto from 'crypto'

const GRAVATAR_URL = 'https://secure.gravatar.com/avatar/'
const emailToHash = (email: string) => crypto.createHash('sha256').update(email).digest('hex')

export const getAvatarImageUrl = (input?: string) => {
	if (!input) return ''

	const query = ['r=pg', 'd=404']
	const hash = emailToHash(input)

	return `${GRAVATAR_URL}${hash}?${query.join('&')}`
}
