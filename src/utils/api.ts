import config from '../config'

console.log('config', config)

const getPostData = (data: object) => ({
	headers: {
		'Content-Type': 'application/json',
		'X-Tyto-Source': 'www',
	},
	method: 'POST',
	body: JSON.stringify(data),
})

const handleResponse = async (res: Response) => {
	const stream = res.json()
	if (res.ok) {
		return stream
	}
	throw await stream
}

const getRequest = (url: string) => fetch(`${config.API_URL}${url}`).then(handleResponse)

const postRequest = (url: string, data: object) =>
	fetch(`${config.API_URL}${url}`, getPostData(data)).then(handleResponse)

export const api = {
	getRequest,
	postRequest,
	getSignupTokenData: (token: string) => getRequest(`/v1/tokens/data?token=${token}`),
	confirmAccountDeletion: (data: object) =>
		postRequest('/v1/actions/confirm-account-deletion', data),
	requestAccountDeletion: (data: object) =>
		postRequest('/v1/actions/request-account-deletion', data),
	signUp: (data: object) => postRequest(`/v1/auth/sign-up`, data),
	subscribeToMailList: (email: string) => postRequest(`/v1/mail-list/subscribe`, { email }),
	switchTeam: (token: string, action: unknown) =>
		postRequest(`/v1/emails/switchTeam`, getPostData({ token, action })),
}
