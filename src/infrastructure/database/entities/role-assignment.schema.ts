import { Schema, model, Document } from 'mongoose';

export interface RoleAssignment extends Document {
  userId: string;
  role: string;
  assignedAt: Date;
}

const RoleAssignmentSchema = new Schema<RoleAssignment>({
  userId: { type: String, required: true },
  role: {
    type: String,
    enum: ['PESSOA_FISICA', 'INVESTIDOR', 'MEDICO', 'RH', 'HEXA64'],
    required: true,
  },
  assignedAt: { type: Date, default: Date.now },
});

export const RoleAssignmentModel = model<RoleAssignment>(
  'RoleAssignment',
  RoleAssignmentSchema,
);
