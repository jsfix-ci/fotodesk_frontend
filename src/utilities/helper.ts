export function isAdmin(role: string): boolean {
  return role === 'admin';
}

export const emailPattern = /.+/;
export const passwordPattern = /((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/;

export const userProfileFields: {[key: string]: string} = {
  firstName: 'First name',
  lastName: 'Last name',
  displayName: 'Display name',
  email: 'Email',
};
