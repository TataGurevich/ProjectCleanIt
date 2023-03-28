import React, {useState} from 'react';
import style from './BookNow.module.css';
import Cleaners from "./Cleaners";

const BookNow = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [cleaning, setClean]=useState('Regulary Cleaning')
    const open = () => {
        setIsOpen(!isOpen)
    }
    const chouseClean = name =>{
        setClean(name);
        setIsOpen(!isOpen)
    }
    return (
        <div id={'bookNow'} className={style.bookNow}>
            <div className={style.cleanSection}>
                <h1>Book now</h1>
                <button  onClick={() => open()}>{cleaning}</button>
                {isOpen && (
                    // <div className={style.cleanSection}  >
                    <div className={style.cleanSectionList}>
                        <button onClick={()=>chouseClean('Deep Cleaning')}>Deep Cleaning</button>
                        <button onClick={()=>chouseClean('Office Cleaning')}>Office Cleaning</button>
                        <button onClick={()=>chouseClean('Windows Cleaning')}>Windows Cleaning</button>
                        <button onClick={()=>chouseClean('Regulary Cleaning')}>Regulary Cleaning</button>

                    </div>)}
                {/*<div style={{display: !isOpen ? 'block' : 'none'}}>*/}
                <div className={style.calendar2}>
                    <p>Choose available dates:</p>
                    <div className={style.calendar}>
                        <h1>March 2021</h1>
                        <div className={style.dataZone}>
                            <button></button>
                            <div id={style.weeks}>
                            </div>
                            <button></button>
                        </div>
                        </div>
                    </div>
                </div>
                <div className={style.peopleSection}>
                    <p>Choose available expert and time:</p>
                    <div className={style.peoples}>
                        <Cleaners/>
                    {/*    тут надо сделать массив с карточками людей*/}
                    {/*я начала делать для этого css .card{}*/}
                    </div>

                </div>
            </div>
        );
}

export default BookNow;