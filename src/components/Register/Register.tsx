import React, {useEffect, useState} from 'react';
import {IRegisterData} from '../../api/auth.api';
import Form from '../Form/Form';
import {formFields} from '../Form/form-utilities';

export default function Register({isAdmin, registerFields, handleSubmit, initialValues, legend}: any) {
  const registerFormFields = formFields.filter((formField) => registerFields?.includes(formField.name));
  const initialState = registerFormFields.reduce(
    (a, b) => ({
      ...a,
      [b.name]: {
        ...b,
        required: b.type === 'password' && Object.values(!!initialValues) ? false : true,
        value: initialValues ? initialValues[b.name] : '',
        onChange: handleChange,
      },
    }),
    {}
  );
  const [enteredFormFIelds, setEnteredFormField] = useState<any>(initialState);
  const [isDisabled, setIsDisabled] = useState(true);

  function changeDisable(enteredFormFIelds: any) {
    let isDisabled = !Object.values(enteredFormFIelds)
      .filter((field: any) => field?.required)
      .every((field: any) => !!field?.value?.length);
    if (enteredFormFIelds?.repeatPassword) {
      isDisabled = isDisabled || enteredFormFIelds?.password?.value !== enteredFormFIelds?.repeatPassword?.value;
    }
    setIsDisabled(isDisabled);
  }
  const onSubmit = (e: any) => {
    e.preventDefault();
    const payload = Object.keys(enteredFormFIelds).reduce(
      (acc, curr) => ({...acc, [curr]: enteredFormFIelds[curr]?.['value']}),
      {}
    ) as IRegisterData;
    handleSubmit({...payload, id: initialValues.id});
  };
  useEffect(() => {
    changeDisable(enteredFormFIelds);
  }, [enteredFormFIelds]);

  function handleChange(event: any) {
    const {name, value} = event.target;
    setEnteredFormField((prevState: any) => ({...prevState, [name]: {...prevState[name], value: value.trim()}}));
  }

  return (
    <Form formFields={enteredFormFIelds} handleChange={handleChange} handleSubmit={onSubmit} isDisabled={isDisabled} legend={legend} />
  );
}
