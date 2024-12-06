export class RoleAssignment {
  constructor(
    public readonly userId: string,
    public readonly roleName: string,
    public readonly roleId: string,
  ) {}

  validateRole(): boolean {
    const validRoles = [
      'PESSOA_FISICA',
      'INVESTIDOR',
      'MEDICO',
      'RH',
      'HEXA64',
    ];
    if (!validRoles.includes(this.roleName)) {
      throw new Error(`Invalid role: ${this.roleName}`);
    }
    return true;
  }
}
