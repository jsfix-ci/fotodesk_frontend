import React, {useState} from 'react';
import HidePassword from '../Form/hide.png';
import ShowPassword from '../Form/show.png';

export default function Password({className, handleChange, type, ...rest}: any) {
  const [showPassword, setShowPassword] = useState(false);

  const passwordToggle = (toggle: boolean) => {
    setShowPassword(toggle);
  };

  return (
    <>
      <input
        type={showPassword ? 'text' : 'password'}
        className={`${'form-control '.concat(className)}`}
        onChange={handleChange}
        {...rest}
      />
      <img className="hide-pass" src={HidePassword} onClick={() => passwordToggle(false)} alt="hide password" />
      <img className="show-pass" src={ShowPassword} onClick={() => passwordToggle(true)} alt="show password" />
    </>
  );
}
