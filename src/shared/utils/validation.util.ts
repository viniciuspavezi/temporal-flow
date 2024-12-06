export function isValidUserId(userId: string): boolean {
  return /^[a-zA-Z0-9-]+$/.test(userId);
}
