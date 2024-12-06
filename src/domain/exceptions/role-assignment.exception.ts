export class RoleAssignmentException extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'RoleAssignmentException';
  }
}
