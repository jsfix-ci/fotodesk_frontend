import React, {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import Form from '../Form/Form';
import {formFields} from '../Form/form-utilities';

export default function Register({isAdmin}: any) {
  const registerFields = ['firstName', 'lastName', 'displayName', 'email', 'password', 'repeatPassword'];
  const registerFormFields = formFields.filter((formField) => registerFields.includes(formField.name));
  const initialState = registerFormFields.reduce((a, b) => ({...a, [b.name]: {...b, value: '', onChange: handleChange}}), {});
  const [enteredFormFIelds, setEnteredFormField] = useState<any>(initialState);
  const [isDisabled, setIsDisabled] = useState(true);
  const navigate = useNavigate();
  function changeDisable(enteredFormFIelds: any) {
    let isDisabled = !Object.values(enteredFormFIelds)
      .filter((field: any) => field.required)
      .every((field: any) => !!field.value.length);
    isDisabled = isDisabled || enteredFormFIelds.password.value !== enteredFormFIelds.repeatPassword.value;
    setIsDisabled(isDisabled);
  }

  useEffect(() => {
    changeDisable(enteredFormFIelds);
  }, [enteredFormFIelds]);

  function handleChange(event: any) {
    const {name, value} = event.target;
    setEnteredFormField((prevState: any) => ({...prevState, [name]: {...prevState[name], value: value.trim()}}));
  }

  function handleSubmit(event: any) {
    event.preventDefault();

    setEnteredFormField(initialState);
    navigate('/');
  }

  return <Form formFields={enteredFormFIelds} handleChange={handleChange} handleSubmit={handleSubmit} isDisabled={isDisabled} />;
}
