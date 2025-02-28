import config from '../config';
const getPostData = (data) => ({
    headers: {
        'Content-Type': 'application/json',
        'X-Tyto-Source': 'www',
    },
    method: 'POST',
    body: JSON.stringify(data),
});
const handleResponse = async (res) => {
    const stream = res.json();
    if (res.ok) {
        return stream;
    }
    throw await stream;
};
const getRequest = (url) => fetch(`${config.API_URL}${url}`).then(handleResponse);
const postRequest = (url, data) => fetch(`${config.API_URL}${url}`, getPostData(data)).then(handleResponse);
export const api = {
    getRequest,
    postRequest,
    getSignupTokenData: (token) => getRequest(`/v1/tokens/data?token=${token}`),
    confirmAccountDeletion: (data) => postRequest('/v1/actions/confirm-account-deletion', data),
    requestAccountDeletion: (data) => postRequest('/v1/actions/request-account-deletion', data),
    signUp: (data) => postRequest(`/v1/auth/sign-up`, data),
    subscribeToMailList: (email) => postRequest(`/v1/mail-list/subscribe`, { email }),
    switchTeam: (token, action) => postRequest(`/v1/emails/switchTeam`, getPostData({ token, action })),
};
//# sourceMappingURL=api.js.map