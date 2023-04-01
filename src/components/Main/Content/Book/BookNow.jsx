import React, {useState} from 'react';
import style from './BookNow.module.css';
import Cleaners from "./Cleaners";
import Calendar from '../../../AreaCalendar/Calendar'

import Order from "./Order";
import {cleaners} from "../../../../Constants/constants";
import Cleaner from "./Cleaner";

const BookNow = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [cleaning, setClean] = useState('Regularly Cleaning')
    const [formOpen, setFormOpen] = useState(false)
    const [orderName, setName] = useState('')
    const [orderTime, setTime] = useState('00:00')
    const [day, setDay]=useState(" ")
    const[dayButton, setDayButton]=useState('')
    const chekCalendar=(day)=>{
    //         const chekCalendar=(day,event.target)=>{
    //     if(day == event.target.value){
    //             event.target.value.style.color="blue";

    }
    const openOrder = () => {
        setFormOpen(!formOpen)
    }
    const Day=(value, event)=>{
        // alert(""+event.target.tagName)
        setDayButton(event.target)
        setDay(value)
    }
    const open = () => {
        setIsOpen(!isOpen)
    }
    const chouseClean = type => {
        setClean(type);
        setIsOpen(!isOpen)
    }
    return (
        <div>
            <div id={'bookNow'} className={style.bookNow}>
                <div className={style.cleanSection}>
                    <h1>Book now</h1>
                    <button onClick={() => open()}>{cleaning}</button>
                    {isOpen && (
                        <div className={style.cleanSectionList}>
                            <button onClick={() => chouseClean('Deep Cleaning')}>Deep Cleaning</button>
                            <button onClick={() => chouseClean('Office Cleaning')}>Office Cleaning</button>
                            <button onClick={() => chouseClean('Windows Cleaning')}>Windows Cleaning</button>
                            <button onClick={() => chouseClean('Regularly Cleaning')}>Regulary Cleaning</button>
                        </div>)}
                    <div className={style.calendar2}>
                        <p>Choose available dates:</p>
                        <div className={style.calendar}>
                           <Calendar SetDay={Day}/>
                        </div>
                    </div>
                </div>
                <div className={style.peopleSection}>
                    <p>Choose available expert and time:</p>
                    <div className={style.peoples}>
                        <div>
                            {cleaners.map((item, index) => {
                                return <Cleaner openForm={openOrder} name={setName} time={setTime} cleaners={item}
                                                key={index} day={day} />
                            })}
                        </div>
                    </div>
                </div>
            </div>
            {
                formOpen && <Order close={openOrder} name={orderName} time={orderTime} day={day} forCalendar={dayButton}/>
            }
        </div>
    );
}

export default BookNow;