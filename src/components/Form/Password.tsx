import React, {useState} from 'react'
import ShowPassword from '../Form/show.png'
import HidePassword from '../Form/hide.png'


export default function Password({className, handleChange,type,...rest}:any){
    const [showPassword, setShowPassword] = useState(false);

    const passwordToggle =(toggle:boolean)=>{
        setShowPassword(toggle)
    }
    
    

    return (
        <>
        <input type={showPassword ? 'text' : 'password'} className={`${'form-control '.concat(className)}`} onChange={handleChange} {...rest} />
        <img className='hide-pass' src={HidePassword} onClick={()=>passwordToggle(false)}/>
        <img className='show-pass' src={ShowPassword} onClick={()=>passwordToggle(true)}/>
        </>
    )
}