import React, {Component} from 'react';
import style from './BookNow.module.css';

class BookNow extends Component {
    render() {
        return (
            <div className={style.bookNow}>
                <div className={style.cleanSection}>
                    <h1>Book now</h1>
                    <button>Regulary Cleaning</button>
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
}

export default BookNow;