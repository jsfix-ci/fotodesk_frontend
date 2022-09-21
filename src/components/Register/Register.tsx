import React, {useState, useEffect} from 'react';
import {useDispatch} from 'react-redux';
// import {useDispatch} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import {authApi} from '../../api';
import {authSlice} from '../../store/slices/auth.slice';
import Form from '../Form/Form';
import {formFields} from '../Form/form-utilities';
// import {authApi} from '../../api';
// import {authSlice} from '../../store/slices/auth.slice';
// import {emailPattern,} from '../../utilities/helper';
export default function Register({isAdmin}: any) {
  const registerFields = ['firstName', 'lastName', 'displayName', 'email', 'password', 'repeatPassword'];
  const registerFormFields = formFields.filter((formField) => registerFields.includes(formField.name));
  const initialState = registerFormFields.reduce((a, b) => ({...a, [b.name]: {...b, value: '', onChange: handleChange}}), {});
  const [enteredFormFIelds, setEnteredFormField] = useState<any>(initialState);
  const [isDisabled, setIsDisabled] = useState(true);
  const [registerData, setRegisterData] = useState(
    {
      firstName: '',
      lastName: '',
      email: '',
      displayName: '',
      password: 'string',
    }
  )
  const navigate = useNavigate();
  const dispatch = useDispatch();
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

  async function handleSubmit(event: any) {
    try {
      event.preventDefault();
      const {
        data
      } = await authApi.register(registerData);
      
      setRegisterData({firstName: '', lastName: '', email:'', displayName:'', password:''});
      dispatch(
        authSlice.actions.setUsers({
          
          ...data
        })
      );
      localStorage.setItem('token', data.token);
      navigate('/profile');
    } catch (error) {
      console.log(error);
    }
    
  
  }
    
  

  return ( <Form formFields={enteredFormFIelds} handleChange={handleChange} handleSubmit={handleSubmit} isDisabled={isDisabled} />)
}


