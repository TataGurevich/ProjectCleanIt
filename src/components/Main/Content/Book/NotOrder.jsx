import React from 'react';
import style from './order.module.css'

const NotOrder = (props) => {
    return (
        <div className={style.pos}>
            <form className={style.form}>
                <button id={style.btn_close} onClick={() => props.close(false)}></button>
                <p>Your order was canseld </p>
                <p>Please fill phone, address, email</p>
            </form>
        </div>
    );
};

export default NotOrder;