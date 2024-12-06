export class UserRole {
  private constructor(private readonly role: string) {}

  static create(role: string): UserRole {
    const validRoles = [
      'PESSOA_FISICA',
      'INVESTIDOR',
      'MEDICO',
      'RH',
      'HEXA64',
    ];
    if (!validRoles.includes(role)) {
      throw new Error(`Invalid role: ${role}`);
    }
    return new UserRole(role);
  }

  get value(): string {
    return this.role;
  }
}
