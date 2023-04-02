import React, {useState} from 'react';
import style from "../SignIn/SignIn.module.css";


const RegistrationForm = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [emailError, setEmailError] = useState('')
    const [passError, setPassError] = useState('')

    function isValidEmail(email) {
        return /\S+@\S+\.\S+/.test(email);
    }
    function isValidPassword(pass){
        return /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/.test(pass);
    }

    const handleChangeEmail = event => {
        if (!isValidEmail(event.target.value)) {
            setEmailError('Email is invalid');
        } else {
            setEmailError(null);
        }

        setEmail(event.target.value);
    };

    const handleChangePassword = event => {
        if (!isValidPassword(event.target.value)) {
            setPassError('Minimum 6 symbols, at least one letter and one number');
        } else {
            setPassError(null);
        }

        setPass(event.target.value);
    };

    return (
        <div className={style.pos}>
            <div className={style.form}>
                <button id={style.btn_close} onClick={() => props.close()}></button>
                <p className={style.formTitle}>Sign up</p>
                <div className={style.inputContainer}>
                    <input
                        placeholder="First name"
                        type="text"/>
                </div>
                <div className={style.inputContainer}>
                    <input
                        placeholder="Last name"
                        type="text"/>
                </div>
                <div className={style.inputContainer}>
                    <input
                        placeholder="Address"
                        type="text"
                        value={address}
                        onChange={(e)=> setAddress(e.target.value)}
                    />
                </div>
                <div className={style.inputContainer}>
                    <input
                        placeholder="Phone number"
                        type="number"
                        value={phone}
                        onChange={(e)=> setPhone(e.target.value)}
                    />
                </div>
                <div className={style.inputContainer}>
                    <input
                        placeholder="Enter email"
                        type="email"
                        value={email}
                        onChange={handleChangeEmail}
                    />
                    {emailError && <h2 style={{color: 'red'}}>{emailError}</h2>}
                    <span>
                        <svg stroke="currentColor" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                                stroke-width="2" stroke-linejoin="round" stroke-linecap="round"></path>
                        </svg>
                    </span>
                </div>

                <div className={style.inputContainer}>
                    <input
                        placeholder="Enter password"
                        type="password"
                        value={pass}
                        onChange={handleChangePassword}
                    />
                    {passError && <h2 style={{color: 'red'}}>{passError}</h2>}
                    <span>
                        <svg stroke="currentColor" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" stroke-width="2" stroke-linejoin="round"
                                stroke-linecap="round"></path>
                            <path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                stroke-width="2" stroke-linejoin="round" stroke-linecap="round"></path>
                        </svg>
                    </span>
                </div>
                <button
                    className={style.submit}
                    onClick={() => props.handleClick(email, pass)}>
                    Sign up
                </button>
            </div>
        </div>
    );
};

export default RegistrationForm;