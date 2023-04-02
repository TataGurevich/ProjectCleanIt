import React, {useState} from 'react';
import style from './Join.module.css'
import profil from '../../../img/profil.png'
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {setCleaners} from "../../../store/slices/cleanersSlice";

const Join = (props) => {
    const [name, setName] = useState('')
    const [lastName, setlastName] = useState('')
    const [address, setAddress] = useState('')
    const [email, setEmail] = useState('')
    const [cleanindType, setCleanindType] = useState('Regulary cleaning expert')
    const [emailError, setEmailError] = useState('')

    const dispatch = useDispatch();
    const cleaners = useSelector(state => state.cleaners)
    const push = useNavigate();

    const handlerJoin = () => {
        const index =  cleaners.length + 1;
        const human = {
            id: index,
            Image: profil,
            Name: name,
            Role: cleanindType,
            Rating: '0.0',
            Salary: '50$ per service',
            Time: ['09:00', '12:00', '15:00', '17:00']
        };
        let temp = [...cleaners]
        temp.push(human)
        dispatch(setCleaners(temp))

        props.close()
    }
    
     function isValidEmail(email) {
        return /\S+@\S+\.\S+/.test(email);
    }
     const handleChangeEmail = event => {
        if (!isValidEmail(event.target.value)) {
            setEmailError('Email is invalid');
        } else {
            setEmailError(null);
        }

        setEmail(event.target.value);
    };
    // const handleClick = event => {
    //     // 👇️ toggle isActive state on click
    //     setIsActive(current => !current);
    // };
    
    return (
        <div className={style.pos}>
            <form className={style.form}>
                <button id={style.btn_close} onClick={() => props.close()}></button>
                <p>Join our team</p>
                <div className={style.inputs_area}>
                    <input placeholder="Name" type="text" onChange={(e) => setName(e.target.value)}/>
                    <input placeholder="Last name" type="text" onChange={(e) => setlastName(e.target.value)}/>
                    <input placeholder="Address" type="text" onChange={(e) => setAddress(e.target.value)}/>
                    <input placeholder="Enter email" type="email" onChange={(e) => {handleChangeEmail()}}/>
                     {emailError && <h2 style={{color: 'red'}}>{emailError}</h2>}
                    <label>Choose cleaning type</label>
                    <div className={style.cleaningList}>
                        <select name="select" onChange={(e) => setCleanindType(e.target.value)}>
                            <option selected value="Deep cleaning expert">Deep cleaning expert</option>
                            <option value="Office cleaning expert">Office cleaning expert</option>
                            <option value="Windows cleaning expert">Windows cleaning expert</option>
                            <option value="Regulary cleaning expert">Regulary cleaning expert</option>
                        </select>
                    </div>
                    <button type="button" onClick={() => handlerJoin()}>
                        join
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Join;