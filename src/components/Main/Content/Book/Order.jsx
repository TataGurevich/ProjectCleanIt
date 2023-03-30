import React from 'react';
import style from './order.module.css'
const Order = (props) => {
    return (
        <div className={style.pos}>
            <form className={style.form}>
                <p>Ващ заказ ебать</p>
                <button onClick={()=>props.close()}>X</button>
                <div className={style.inputs_area}>
                    <label>Cleaner</label>
                    <input placeholder="Name" type="text" value={props.name}/>
                   <label>Address</label>
                    <input placeholder="Address" type="text"/>
                    <label>Time</label>
                    <input type={"time"}/>
                    <label>Phone number</label>
                    <input placeholder={"Phone"} type={"number"}/>
                    <label>Email</label>
                    <input placeholder="Enter email" type="email"/>
                </div>
            </form>
        </div>
    );
};

export default Order;