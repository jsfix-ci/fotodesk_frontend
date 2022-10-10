import React from 'react';
import {renderFormTypes} from './form-utilities';

// import {IFromItem} from './Input';

export default function Form({formFields, handleChange, handleSubmit, isDisabled}: any) {
  return (
    <>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>Register:</legend>
          <div className="row">
            {Object.values(formFields).map((formField: any) => (
              <div key={formField.name} className="col-md-6 col-12 mb-1 position-relative">
                {renderFormTypes({...formField, handleChange, value: formField.value ?? ''}, true)}
              </div>
            ))}
          </div>
          <div className="w-100 d-flex justify-content-end">
            <button className="btn btn-secondary mt-2 " type="submit" disabled={isDisabled}>
              Register
            </button>
          </div>
        </fieldset>
      </form>
    </>
  );
}
