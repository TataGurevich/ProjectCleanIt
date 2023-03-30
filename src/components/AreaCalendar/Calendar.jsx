import React, { useState } from 'react';
import RCalendar from 'react-calendar';
// import 'react-calendar/dist/Calendar.css'
import './Calendar.css'


const MyCalendar = () => {
    const [value, onChange] = useState(new Date());

    return (
        <div>
            {/*<span> Choose available dates:</span>*/}
            <RCalendar onChange={onChange} value={value}/>


        </div>


    );
};

export default MyCalendar;
