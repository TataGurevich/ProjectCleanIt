import React from 'react';
import style from './order.module.css'
const Order = (props) => {
    return (
        <div className={style.pos}>
            <form className={style.form}>
                <button id={style.btn_close} onClick={()=>props.close()}></button>
                    <p>Your order</p>
                <div className={style.inputs_area}>
                    <label>Cleaner</label>
                    <input placeholder="Name" type="text" value={props.name}/>
                   <label>Address</label>
                    <input placeholder="Address" type="text" value={'Shovei Tsion 1'}/>
                    <label>Time</label>
                    <input type={"time"} value={props.time}/>
                    <label>Phone number</label>
                    <input placeholder={"Phone"} type={"text"}/>
                    <label>Email</label>
                    <input placeholder="Enter email" type="email"/>
                </div>
            </form>
        </div>
    );
};

export default Order;