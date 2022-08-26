export interface ILink {
  label: string;
  path: string;
}

export const userLinks: ILink[] = [
  {
    label: 'Images',
    path: '/user/images',
  },
  {
    label: 'Profile',
    path: '/user/profile',
  },
  {
    label: 'Upload',
    path: '/user/upload',
  },
];
export const adminLinks: ILink[] = [
  {
    label: 'Profile',
    path: 'admin-page/profile',
  },
  {
    label: 'Users',
    path: 'admin-page/users',
  },
  {
    label: 'Pending users',
    path: 'admin-page/pending-users',
  },
  {
    label: 'Images',
    path: 'admin-page/images',
  },
  {
    label: 'Pending images',
    path: 'admin-page/pending-images',
  },
  {
    label: 'Upload images',
    path: 'admin-page/upload-images',
  },
  {
    label: 'Watermarks',
    path: 'admin-page/watermarks',
  },
];
