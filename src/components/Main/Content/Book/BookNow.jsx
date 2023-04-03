import React, {useEffect, useState} from 'react';
import style from './BookNow.module.css';
import Calendar from '../../../AreaCalendar/Calendar'

import Order from "./Order";
import Cleaner from "./Cleaner";
import {useSelector} from "react-redux";
import OrderDone from "./OrderDone";
import NotOrder from "./NotOrder";

const BookNow = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [cleaning, setClean] = useState('Regularly Cleaning')
    const [formOpen, setFormOpen] = useState(false)
    const [formOrderDone, setformOrderDone] = useState(false)
    const [orderName, setName] = useState('')
    const [orderTime, setTime] = useState('00:00')
    const [day, setDay] = useState(" ")
    const [dayButton, setDayButton] = useState('')
    const [ordersArr, setOrdersArr] = useState([]);
    const [order, setOrder] = useState({})
    const cleaners = useSelector(state => state.cleaners)
    const[error, setError]=useState(false)
    const openOrder = () => {
        setFormOpen(!formOpen)
    }
    const Day = (value, event) => {
        setDayButton(event.target)
        setDay(value)
    }
    const addOrger = (email, day, time) => {
        let temp = [...ordersArr];
        let order = {
            day: day,
            email: email,
            time: time
        }
        temp.push(order)
        setOrdersArr(temp)
        console.log(ordersArr)
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
                                return <Cleaner openForm={openOrder} orderDone={setformOrderDone} name={setName}
                                                time={setTime} cleaners={item}
                                                key={index} day={day}/>
                            })}
                        </div>
                    </div>
                </div>
            </div>
            {
                formOpen &&
                <Order close={openOrder} add={addOrger} name={orderName} time={orderTime} day={day} cleaning={cleaning}
                       forCalendar={dayButton} error={setError}openDobe={setformOrderDone} order={setOrder}/>
            }
            {
                formOrderDone && order.P &&
                <OrderDone close={setformOrderDone} order={order} name={orderName} time={orderTime} day={day}
                           cleaning={cleaning} />
            }
            {
                error &&
                <NotOrder close={setError}/>
            }
        </div>
    );
}

export default BookNow;