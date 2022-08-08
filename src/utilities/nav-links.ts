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
    path: 'admin/profile',
  },
  {
    label: 'Users',
    path: 'admin/users',
  },
  {
    label: 'Pending users',
    path: 'admin/pending-users',
  },
  {
    label: 'Images',
    path: 'admin/images',
  },
  {
    label: 'Pending images',
    path: 'admin/pending-images',
  },
  {
    label: 'Upload images',
    path: 'admin/upload-images',
  },
  {
    label: 'Watermarks',
    path: 'admin/watermarks',
  },
];
