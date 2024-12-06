import { Module } from '@nestjs/common';
import { TemporalModule } from 'nestjs-temporal';
import * as activities from './infrastructure/temporal/activities';
import { RoleAssignmentController } from './controllers/role-assignment.controller';
import { Connection, WorkflowClient } from '@temporalio/client';
const authUrl = 'http://localhost:3003';
const assignRoleActivity = activities.createAssignRoleActivity(authUrl);

@Module({
  imports: [
    TemporalModule,
    TemporalModule.registerWorker({
      workerOptions: {
        taskQueue: 'role-assignment',
        workflowsPath: require.resolve('./infrastructure/temporal/workflows'),
        activities: {
          createAssignRoleActivity: assignRoleActivity,
        },
      },
    }),
    TemporalModule.registerClient({
      connection: {
        address: process.env.TEMPORAL_ADDRESS || 'localhost:7233',
      },
    }),
  ],
  controllers: [RoleAssignmentController],
  providers: [
    {
      provide: WorkflowClient,
      useFactory: async () => {
        const connection = await Connection.connect({
          address: 'localhost:7233', // Temporal server address
        });
        return new WorkflowClient({ connection });
      },
    },
  ],
  exports: [WorkflowClient],
})
export class AppModule {}
