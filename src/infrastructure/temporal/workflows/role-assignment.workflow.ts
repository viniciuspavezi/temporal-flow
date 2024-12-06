import { proxyActivities } from '@temporalio/workflow';
import { createAssignRoleActivity } from '../activities';

const { assignRole } = proxyActivities<
  ReturnType<typeof createAssignRoleActivity>
>({
  taskQueue: 'role-assignment',
  startToCloseTimeout: '1 minute',
});

export async function RoleAssignmentWorkflow(
  userKeycloakId: string,
  roleId: string,
  roleName: string,
): Promise<void> {
  await assignRole(userKeycloakId, roleId, roleName);
}
