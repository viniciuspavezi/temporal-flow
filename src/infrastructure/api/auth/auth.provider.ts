import { AuthClient } from './auth.client';

export class AuthProvider {
  constructor(private readonly authClient: AuthClient) {}

  async assignRoleIfRoleExists(userId: string, role: string): Promise<void> {
    // const role = await this.authClient.getRole(role);
    // if (!role) {
    //   throw new Error('Role does not exist');
    // }
    // await this.authClient.assignRole(userId, role.name, role.id);
  }
}
