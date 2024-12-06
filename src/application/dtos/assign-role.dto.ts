export class AssignRoleDto {
  constructor(
    public readonly userId: string,
    public readonly roleName: string,
    public readonly roleId: string,
  ) {}
}
