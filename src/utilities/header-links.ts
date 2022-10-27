export interface ILinksHeader {
  label: string;
  path: string;
  key?: string;
}

export const loggedOut: ILinksHeader[] = [
  {
    label: 'Register',
    path: '/register',
  },
];

export const loggedIn: ILinksHeader[] = [
  {
    label: 'Profile',
    path: '/profile',
  },
  {
    label: 'Upload',
    path: '/images/upload/step-1',
  },
  {
    label: 'Logout',
    path: '/logout',
  },
];
