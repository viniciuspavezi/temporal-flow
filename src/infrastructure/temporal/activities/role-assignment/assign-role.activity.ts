import axios from 'axios';

export const createAssignRoleActivity = (authUrl: string) => ({
  async assignRole(
    userKeycloakId: string,
    roleId: string,
    roleName: string,
  ): Promise<void> {
    await axios.post(`${authUrl}/api/users/${userKeycloakId}/roles`, {
      userKeycloakId,
      roleId,
      roleName,
    });
    console.log(`Assigned role ${roleId} to user ${userKeycloakId}`);
  },
});
