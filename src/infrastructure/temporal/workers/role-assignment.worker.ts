import { Worker } from '@temporalio/worker';
import { createAssignRoleActivity } from '../activities';

async function runWorker() {
  const authUrl = 'http://localhost:3003';
  const assignRoleActivity = createAssignRoleActivity(authUrl);

  const worker = await Worker.create({
    workflowsPath: require.resolve('../workflows/role-assignment.workflow'),
    activities: {
      createAssignRoleActivity: assignRoleActivity,
    },
    taskQueue: 'role-assignment',
  });

  await worker.run();
}

runWorker().catch((err) => {
  console.error(err);
  process.exit(1);
});
