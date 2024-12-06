export interface IRoleAssignmentRepository {
  save(userId: string, roleName: string, roleId: string): Promise<void>;
  findRolesByUserId(userId: string): Promise<string[]>;
}
