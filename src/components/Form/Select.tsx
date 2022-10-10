import React from 'react';
import {IFromItem} from './Input';

export interface IOption {
  label: string;
  value: string;
}

export default function Select({className, handleChange, options, ...rest}: IFromItem) {
  return (
    <label className="d-block">
      <select className={className ?? 'form-select'} aria-label="Default select example" onChange={handleChange} {...rest}>
        <option>Select Role</option>
        {options?.map((option) => (
          <option key={option?.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </label>
  );
}
