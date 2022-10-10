import React from 'react';
import Input, {IFromItem} from './Input';
import Password from './Password';
import Select from './Select';

export const renderFormTypes = (formField: IFromItem, isAdmin: boolean) => {
  if (formField.adminOnly && !isAdmin) return null;

  switch (formField.type) {
    case 'password':
      return <Password key={formField.name} {...formField} />;
    case 'email':
    case 'text':
    case 'number':
    case 'range':
      return <Input key={formField.name} {...formField} />;

    case 'select':
      return <Select key={formField.name} {...formField} />;

    default:
      return null;
  }
};

export const formFields: IFromItem[] = [
  {
    name: 'firstName',
    type: 'text',
    className: 'text-primary',
    placeholder: 'First Name',
    pattern: '[A-z]{4,}',
    required: true,
  },
  {
    name: 'lastName',
    type: 'text',
    className: 'text-danger',
    placeholder: 'Last Name',
    // pattern: '[A-z]{4,}',
    required: true,
    min: 5,
    max: 10,
  },
  {
    name: 'displayName',
    type: 'text',
    className: 'text-secondary',
    placeholder: 'Display Name',
    pattern: '[A-z0-9]{4,}',
    required: true,
  },
  {
    name: 'email',
    type: 'email',
    className: '',
    placeholder: 'Email',

    required: true,
  },
  {
    name: 'password',
    type: 'password',
    className: '',
    placeholder: 'Password',
    pattern: '[A-z0-9W]{8,}',
    required: true,
  },
  {
    name: 'repeatPassword',
    type: 'password',
    className: '',
    placeholder: 'Repeat Password',
    pattern: '[A-z0-9W]{8,}',
    required: true,
  },
  {
    name: 'role',
    type: 'select',
    className: '',
    pattern: '',
    required: false,
    placeholder: 'role',
    options: [
      {
        label: 'User',
        value: 'user',
      },
      {
        label: 'Admin',
        value: 'admin',
      },
    ],
    adminOnly: true,
  },
];
