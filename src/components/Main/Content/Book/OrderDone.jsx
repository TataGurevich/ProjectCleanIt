import React, {useEffect} from 'react';
import style from "./orderDone.module.css";
import {clientData} from '../../../Header/Registration/ClientsList'
const OrderDone = (props) => {
    return (
        <div className={style.pos}>
            <form className={style.form}>
                <button id={style.btn_close} onClick={() => props.close(false)}></button>
                <p>Your order</p>
                <label>Address: {clientData[0].address1}</label>
                <label>Date: {props.day + "," + props.time}</label>
                <label>{props.cleaning}</label>
                <label>Phone: {clientData[0].phone1}</label>
                <label>Email: {clientData[0].email1}</label>

            </form>
        </div>
    );
};

export default OrderDone;