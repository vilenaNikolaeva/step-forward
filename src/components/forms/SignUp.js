import React, { useState } from "react";
import { useAuth } from './../../contexts/AuthCtx';
import { useNavigate } from 'react-router-dom';
import { useUser } from './../../contexts/UserCtx';

function SignUp (){
    const { signup } = useAuth();
    const { updateUserContext }= useUser();
    const [username,setUsername]= useState();
    const [email,setEmail]= useState();
    const [password,setPassword]= useState();
    const [repeatedPassword,setRepeatedPassword]= useState();
    const navigate = useNavigate();


    const onRegisterSubmit = async (event) => {
        event.preventDefault();

        if (password!== repeatedPassword) {
            return console.log({ error: 'Password should match!'});
          }

        let requestError = false;
        try {
            const userDetails = await signup({'username': username, 'email': email, 'password': password});

            if (typeof userDetails === 'string') {
                requestError = true;
                throw new Error(userDetails);
            }
            localStorage.setItem('userData', JSON.stringify(userDetails));
            updateUserContext(userDetails);
            navigate('/');
        } catch (err) {
            console.log(err.message);
        }
    };

    return(
        <form onSubmit={onRegisterSubmit} className="Register">
        <div className="register-container">
          <label as="h3" className="register-title">Register</label>
            <input  type="text" placeholder="Username..." name="username" id="username" required onChange={(e)=>setUsername(e.target.value)} />
            <input  type="email" placeholder="Email..." name="email" id="email" required onChange={(e)=>setEmail(e.target.value)} />
          <p className="mandatory-combination">***Mandatory password combinations :
            <p>Contain upper and lowercase, have digits, Punctuation characters!</p></p>
            <input type="password" placeholder="Password at least 8 symbols..." name="password" id="psw" required autoComplete="on" onChange={(e)=>setPassword(e.target.value)}/>
            <input type="password" placeholder="Repeat Password..." name="repeatedPassword" autoComplete="on" id="psw-repeat" required onChange={(e)=>setRepeatedPassword(e.target.value)} />
            <button type="btn btn-sumbit" value="Register" ><b>Register</b> </button>
        </div>
      </form>
    )
}
export default SignUp;