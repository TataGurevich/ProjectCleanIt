import React from 'react';
import Calendar from "./Calendar";
import style from './Area.module.css'


const Area = () => {
    return (
        <div className={style.body}>
            <h1 className={style.bookNow}>Book now</h1>
            <Calendar/>
        </div>
    );
};

export default Area;