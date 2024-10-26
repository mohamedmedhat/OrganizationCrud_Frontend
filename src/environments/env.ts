const baseUrl = 'http://localhost:8080'

export const usersEnv = {
    loginUrl: `${baseUrl}/signin`,
    regsiterUrl: `${baseUrl}/signup`,
    refreshTokenUrl: `${baseUrl}/refresh-token`,
    revokeTokenUrl: `${baseUrl}/revoke-refresh-token`
}

export const organizationEnv = {
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