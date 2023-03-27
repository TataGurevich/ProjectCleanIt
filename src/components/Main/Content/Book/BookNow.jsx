import React, {useState} from 'react';
import style from './BookNow.module.css';
import { Calendar } from 'react-calendar';
import  'react-calendar/dist/Calendar.css';

const BookNow = () => {
    const [isOpen,setIsOpen] = useState(false)
    const open = () => {
        setIsOpen(!isOpen)
    }

        return (
            <div className={style.bookNow}>
                <div className={style.cleanSection} >
                    <h1>Book now</h1>
                    <button onClick={() => open()}>Regulary Cleaning</button>
                    {isOpen && (
                        <div className={style.cleanSection}  >
                            <button>Deep Cleaning</button>
                            <button>Office Cleaning</button>
                            <button>Windows Cleaning</button>
                        </div>)}
                    <div  style={{ display: !isOpen ? 'block' : 'none' }}>
                    <p>Choose available dates:</p>
                    <div >

                        <h1>March 2021</h1>
                        <div >

                            <div >
                                    <Calendar />

                            </div>

                        </div>
                        </div>
                    </div>
                </div>
                <div className={style.peopleSection}>
                    <p>Choose available expert and time:</p>
                    <div className={style.peoples}>
                    {/*    тут надо сделать массив с карточками людей*/}
                    {/*я начала делать для этого css .card{}*/}
                    </div>

                </div>
            </div>
        );
}

export default BookNow;