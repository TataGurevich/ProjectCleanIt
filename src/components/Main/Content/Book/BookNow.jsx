import React, {useState} from 'react';
import style from './BookNow.module.css';
import Cleaners from "./Cleaners";
import Calendar from '../../../AreaCalendar/Calendar'
import Order from "./Order";
import {cleaners} from "../../../../Constants/constants";
import Cleaner from "./Cleaner";
// import '../../../AreaCalendar/Calendar.css'

const BookNow = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [cleaning, setClean] = useState('Regularly Cleaning')
    const [formOpen, setFormOpen] = useState(false)
    const [orderName, setName] = useState('')
    const [orderTime, setTime] = useState('00:00')
    const openOrder = () => {
        setFormOpen(!formOpen)
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
                        // <div className={style.cleanSection}  >
                        <div className={style.cleanSectionList}>
                            <button onClick={() => chouseClean('Deep Cleaning')}>Deep Cleaning</button>
                            <button onClick={() => chouseClean('Office Cleaning')}>Office Cleaning</button>
                            <button onClick={() => chouseClean('Windows Cleaning')}>Windows Cleaning</button>
                            <button onClick={() => chouseClean('Regularly Cleaning')}>Regulary Cleaning</button>

                        </div>)}
                    {/*<div style={{display: !isOpen ? 'block' : 'none'}}>*/}
                    <div className={style.calendar2}>
                        <p>Choose available dates:</p>

                        <div className={style.calendar}>
                            {/*#bookNow > div.BookNow_cleanSection__CNaMo > div > div > div > div > div.react-calendar__viewContainer > div > div > div > div.react-calendar__month-view__days > button:nth-child(1)*/}
                            {/*class="react-calendar__tile react-calendar__month-view__days__day react-calendar__month-view__days__day--neighboringMonth"*/}
                            <Calendar />
                        </div>
                    </div>
                </div>
                <div className={style.peopleSection}>
                    <p>Choose available expert and time:</p>
                    <div className={style.peoples}>
                        {/*<Cleaners openForm={openOrder}/>*/}
                        <div>
                            {cleaners.map((item, index) => {
                                return <Cleaner openForm={openOrder} name={setName} time={setTime} cleaners={item}
                                                key={index}/>
                            })}
                        </div>
                        {/*    тут надо сделать массив с карточками людей*/}
                        {/*я начала делать для этого css .card{}*/}
                    </div>

                </div>

            </div>
            {
                formOpen && <Order close={openOrder} name={orderName} time={orderTime}/>
            }
        </div>

    );
}

export default BookNow;