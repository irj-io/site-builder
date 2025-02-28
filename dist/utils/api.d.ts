export declare const api: {
    getRequest: (url: string) => Promise<any>;
    postRequest: (url: string, data: object) => Promise<any>;
    getSignupTokenData: (token: string) => Promise<any>;
    confirmAccountDeletion: (data: object) => Promise<any>;
    requestAccountDeletion: (data: object) => Promise<any>;
    signUp: (data: object) => Promise<any>;
    subscribeToMailList: (email: string) => Promise<any>;
    switchTeam: (token: string, action: unknown) => Promise<any>;
};
