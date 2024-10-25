const baseUrl = 'http:localhost/8080'

export const usersEnv = {
    loginUrl: `${baseUrl}/sigin`,
    regsiterUrl: `${baseUrl}/signup`,
    refreshTokenUrl: `${baseUrl}/refresh-token`,
    revokeTokenUrl: `${baseUrl}/revoke-refresh-token`
}