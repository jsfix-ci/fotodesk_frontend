import React from 'react';
import {IOption} from './Select';

export interface IFromItem {
  id?: string;
  name: string;
  type: string;
  className: string;
  placeholder: string;
  pattern?: string;
  adminOnly?: boolean;
  options?: IOption[];
  handleChange?: (val: any) => void;
  value?: any;
  required?: boolean;
  min?: number;
  max?: number;
}
export default function Input({className, handleChange, ...rest}: IFromItem) {
  return <input className={`${'form-control '.concat(className)}`} onChange={handleChange} {...rest} />;
}
