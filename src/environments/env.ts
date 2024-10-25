const baseUrl = 'https://organizationcrudbackend-production.up.railway.app'

export const usersEnv = {
    loginUrl: `${baseUrl}/signin`,
    regsiterUrl: `${baseUrl}/signup`,
    refreshTokenUrl: `${baseUrl}/refresh-token`,
    revokeTokenUrl: `${baseUrl}/revoke-refresh-token`
}