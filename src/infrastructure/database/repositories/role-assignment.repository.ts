import { IRoleAssignmentRepository } from 'src/application/interfaces/role-assignment-repository.interface';
import { RoleAssignmentModel } from '../entities/role-assignment.schema';

export class RoleAssignmentRepository implements IRoleAssignmentRepository {
  async save(userId: string, role: string): Promise<void> {
    await RoleAssignmentModel.create({ userId, role });
  }

  async findRolesByUserId(userId: string): Promise<string[]> {
    const roles = await RoleAssignmentModel.find({ userId }).select('role');
    return roles.map((r) => r.role);
  }
}
