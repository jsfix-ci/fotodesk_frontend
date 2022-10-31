export interface ILink {
  label: string;
  path: string;
  key?: string;
}

export const userLinks: ILink[] = [
  {
    label: 'Images',
    path: '/profile/images',
  },
  {
    label: 'Profile',
    path: '/profile',
  },
  {
    label: 'Upload',
    path: '/images/upload/step-1',
  },
];
export const adminLinks: ILink[] = [
  {
    label: 'Profile',
    path: '/profile',
  },
  {
    label: 'Users',
    path: '/admin-page/users',
  },
  {
    label: 'Pending users',
    path: '/admin-page/pending-users',
    key: 'pendingUsers',
  },
  {
    label: 'Images',
    path: '/admin-page/images',
  },
  {
    label: 'Pending images',
    path: '/admin-page/pending-images',
    key: 'pendingImages',
  },
  {
    label: 'Upload images',
    path: '/images/upload/step-1',
  },
  {
    label: 'Watermarks',
    path: '/admin-page/watermarks',
  },
  {
    label: 'Upload watermark',
    path: '/admin-page/upload-watermarks/step-1',
  },
];
