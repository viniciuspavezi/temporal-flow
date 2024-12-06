import { RoleAssignmentService } from 'src/domain/services/user-role-assign.service';
import { AssignRoleDto } from '../dtos/assign-role.dto';

export class AssignRoleUseCase {
  constructor(private readonly roleAssignmentService: RoleAssignmentService) {}

  execute(dto: AssignRoleDto): boolean {
    const { userId, roleName, roleId } = dto;
    const roleAssignment = this.roleAssignmentService.assignRole(
      userId,
      roleName,
      roleId,
    );
    return !!roleAssignment;
  }
}
