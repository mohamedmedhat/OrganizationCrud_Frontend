const baseUrl = 'https://organizationcrudbackend-production.up.railway.app'

export const usersProductionEnv = {
    loginUrl: `${baseUrl}/signin`,
    regsiterUrl: `${baseUrl}/signup`,
    refreshTokenUrl: `${baseUrl}/refresh-token`,
    revokeTokenUrl: `${baseUrl}/revoke-refresh-token`
}

export const organizationProductionEnv = {
    getAllUrl: (page: number, size: number) => `${baseUrl}/organization?page=${page}?size=${size}`,
    getAllInvitations: (page: number, size: number) => `${baseUrl}/organization/invitations?page=${page}?size=${size}`,
    createUrl: `${baseUrl}/organization/`,
    updateUrl:(id: string) => `${baseUrl}/organization/${id}`,
    deleteUrl:(id: string) => `${baseUrl}/organization/${id}`,
    getOneUrl:(id: string) => `${baseUrl}/organization/${id}`,
    inviteUrl:(id: string) => `${baseUrl}/organization/${id}/invite`,
    acceptInvitationUrl:(invitationId: string) => `${baseUrl}/organization/accept?${invitationId}`,
    cancelInvitationUrl:(invitationId: string) => `${baseUrl}/organization/cancel?${invitationId}`,
}