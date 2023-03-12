import React from 'react';
import style from './SignUp.module.css'
import {Link, Route, Routes} from "react-router-dom";
import {registration} from "../../../Constants/constants";
import Registration from "../Registration/Registration";


const SignUp = () => {
    return (
       <div className={style.pos}>
           <form className={style.form}>
               <p className={style.formTitle}>Sign in to your account</p>
               <div className={style.inputContainer}>
                   <input placeholder="Enter email" type="email"/>
          <span>
            <svg stroke="currentColor" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                  d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                  stroke-width="2" stroke-linejoin="round" stroke-linecap="round"></path>
            </svg>
          </span>
               </div>
               <div className={style.inputContainer}>
                   <input placeholder="Enter password" type="password"/>

          <span>
            <svg stroke="currentColor" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" stroke-width="2" stroke-linejoin="round"
                    stroke-linecap="round"></path>
              <path
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  stroke-width="2" stroke-linejoin="round" stroke-linecap="round"></path>
            </svg>
          </span>
               </div>
               <button className={style.submit} type="submit">
                   Sign in
               </button>

               <p className={style.signupLink}>
                   No account?
                   <Link to={`/${registration}`}>
                       Sign up
                   </Link>
               </p>
           </form>
           <Routes>
               <Route path={registration} element={<Registration/>}/>
           </Routes>
       </div>
    );
};

export default SignUp;