import React, {useEffect, useState} from 'react';
import style from './order.module.css'
import {clientData} from '../../../Header/Registration/ClientsList'
import {format} from 'date-fns'

const Order = (props) => {
    const [address, setAddress] = useState('')
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState(' ');
    const cleanings = ['Deep Cleaning', 'Office Cleaning', 'Windows Cleaning', 'Regularly Cleaning'];

    const buttonSubmit = () => {
        if (props.forCalendar.style.color !== "blue") {
            if (address && phone && email) {

                props.forCalendar.style.color = "blue";//"#6882EF";
                props.openDobe(true)
                props.error(false)
                props.add(email, props.day, props.time)
                props.order({E: email, P: phone, A: address})
                props.close();
            }
            else {
                props.error(true)
                props.close();


            }
        } else {
            alert("You chose unavailable date.")
            props.close();
        }

    }
    const help = () => {
        clientData.map((item, index) => {
            setAddress(item.address1)
            setPhone(item.phone1)
            setEmail(item.email1)
        })
    }
    useEffect(() => {
        help()
    }, [])

    return (
        <div className={style.pos}>
            <form className={style.form}>
                <button id={style.btn_close} onClick={() => props.close()}></button>
                <p>Your order</p>
                <div className={style.inputs_area}>
                    <div>
                        <label>Cleaner</label>
                        <input placeholder="Name" type="text" value={props.name}/>
                        <label>Address</label>
                        <input placeholder="Address" type="text" value={address}
                               onChange={(event) => setAddress(event.target.value)}/>
                        <label>Time</label>
                        <input type={"time"} value={props.time}/>
                    </div>
                    <div>
                        <label>Date</label>
                        <input type={"text"} value={format(props.day, 'PP')}/>
                        <label>Phone number</label>
                        <input placeholder={"Phone"} type={"text"} value={phone}
                               onChange={(event) => setPhone(event.target.value)}/>
                        <label>Email</label>
                        <input placeholder="Enter email" type="email" value={email}
                               onChange={(event) => setEmail(event.target.value)}/>
                    </div>
                </div>
                <label>Cleaning type</label>
                <select>
                    {
                        cleanings.map((item, index) => {
                            return item == props.cleaning ? <option selected>{item}</option> : <option>{item}</option>
                        })
                    }
                </select>
                <button type={"button"} onClick={() => buttonSubmit()}>Book</button>
            </form>
        </div>
    );
};

export default Order;