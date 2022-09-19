export interface IUserResponse {
  firstName: 'string';
  lastName: 'string';
  email: 'string';
  displayName: 'string';
  id: 'number';
  isApproved: 'boolean';
  role: 'string';
}

export interface ILoginResponse {
  token: string;
}
