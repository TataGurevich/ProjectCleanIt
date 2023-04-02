import React, { useState } from 'react';
import RCalendar from 'react-calendar';
// import 'react-calendar/dist/Calendar.css'
import './Calendar.css'


const MyCalendar = (props) => {    const [value, onChange] = useState(new Date());
    const Day=(event, value)=>{
        props.SetDay(event,value)
    }

    return (
        <div>
            {/*<span> Choose available dates:</span>*/}

            <RCalendar onChange={onChange} value={value} onClickDay={(value, event) => Day(value, event)}/>



        </div>


    );
};

export default MyCalendar;
