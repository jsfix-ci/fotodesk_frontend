export function isAdmin(role: string): boolean {
  return role === 'admin';
}

export const emailPattern = /.+/;
export const passwordPattern = /((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/;
