import { RoleAssignment } from '../entities/role-assignment.entity';

export class RoleAssignmentService {
  assignRole(userId: string, roleName: string, roleId: string): RoleAssignment {
    const roleAssignment = new RoleAssignment(userId, roleName, roleId);
    roleAssignment.validateRole();
    return roleAssignment;
  }
}
