import axios, { AxiosInstance } from 'axios';

export class AuthClient {
  private client: AxiosInstance;

  constructor() {
    this.client = axios.create({ baseURL: process.env.AUTH_SERVICE_URL });
  }

  async assignRole(
    userId: string,
    roleName: string,
    roleId: string,
  ): Promise<void> {
    return await this.client.post(`/users/${userId}/roles`, {
      roleName,
      roleId,
    });
  }
}
