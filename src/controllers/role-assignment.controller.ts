import { Controller, Post, Body } from '@nestjs/common';
import { WorkflowClient } from '@temporalio/client';
import { RoleAssignmentWorkflow } from '../infrastructure/temporal/workflows/role-assignment.workflow';

@Controller('role-assignment')
export class RoleAssignmentController {
  constructor(private readonly workflowClient: WorkflowClient) {}

  @Post()
  async assignRole(
    @Body()
    userData: {
      userKeycloakId: string;
      userMongoId: string;
      roleName: string;
      roleId: string;
    },
  ) {
    const uniqueId = `${userData.userMongoId}-${Date.now()}`;
    console.log('User userData:', userData);
    try {
      const workflow = await this.workflowClient.start(RoleAssignmentWorkflow, {
        taskQueue: 'role-assignment',
        workflowId: `role-assignment-${uniqueId}`,
        args: [userData.userKeycloakId, userData.roleId, userData.roleName],
      });
      return {
        workflowId: workflow.workflowId,
        status: 'Workflow RoleAssignmentWorkflow started',
      };
    } catch (err) {
      if (err.name === 'WorkflowExecutionAlreadyStartedError') {
        console.log('Workflow already started, skipping creation.');
        // Optionally return the existing workflow's data
      } else {
        throw err; // Handle other errors
      }
    }
  }
}
