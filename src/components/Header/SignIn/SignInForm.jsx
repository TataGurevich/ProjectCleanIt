import React, {useState} from 'react';
import style from './SignIn.module.css'
import {Link, Route, Routes} from "react-router-dom";
import PageSignUp from "../Registration/PageSignUp";


const SignInForm = (handleClick) => {

    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const [singIn, setSingIn] = useState(true)

    return (

        <div className={style.pos}>

            {singIn &&
            <form className={style.form}>

                <p className={style.formTitle}>Sign in to your account</p>
                <div className={style.inputContainer}>

                    <input
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        placeholder="Enter email"
                        type="email"/>
                    <span>

            <svg stroke="currentColor" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                  d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                  strokeWidth="2" strokeLinejoin="round" strokeLinecap="round"></path>
            </svg>
          </span>
                </div>
                <div className={style.inputContainer}>

                    <input
                        value={pass}
                        onChange={e => setPass(e.target.value)}
                        placeholder="Enter password"
                        type="password"/>
                    <span>

            <svg stroke="currentColor" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" strokeWidth="2" strokeLinejoin="round"
                    strokeLinecap="round"></path>
              <path
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  strokeWidth="2" strokeLinejoin="round" strokeLinecap="round"></path>
            </svg>
          </span>
                </div>

                <button
                    className={style.submit}
                    type="submit"
                    onClick={() => handleClick(email, pass)}>
                    Sign in
                </button>

                <p className={style.signupLink}>
                    No account?{" "}
                    <Link to={`/${<PageSignUp/>}`} onClick={()=>setSingIn(false)}>
                        Sign up
                    </Link>
                </p>

            </form>}

            {/*                 {isOpenSing && <SignInForm/>}*/}
            {!singIn&&<PageSignUp/>}

            {/*<Routes>*/}
            {/*    <Route path={registration} element={<RegistrationForm/>}/>*/}
            {/*</Routes>*/}

        </div>
    );
}
    ;

    export default SignInForm;