import React, {useEffect} from 'react';
import style from "./orderDone.module.css";
import {clientData} from '../../../Header/Registration/ClientsList'
import {format} from 'date-fns'

const OrderDone = (props) => {

    return (
        <div className={style.pos}>
            <form className={style.form}>
                <button id={style.btn_close} onClick={() => props.close(false)}></button>
                <p>Your order</p>
                <label>Address: {props.order.A}</label>
                <label>Date: {format(props.day, 'PP') + "," + props.time}</label>
                <label>Phone: {props.order.P}</label>
                <label>{props.cleaning}</label>
                <label>Email: {props.order.E}</label>

            </form>
        </div>
    );
};

export default OrderDone;