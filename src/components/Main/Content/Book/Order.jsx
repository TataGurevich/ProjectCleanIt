import React, {useState} from 'react';
import style from './order.module.css'
import { format } from 'date-fns'
const Order = (props) => {
    const [address,setAddress]=useState("Shovei Tsion 1 ")
const buttonSibmit=()=>{
    if(props.forCalendar.style.color!="blue"){
        props.forCalendar.style.color="blue";//"#6882EF";
        props.close();
    }
    else{
        alert("You chose unavailable date.")
        props.close();
    }

}
    return (
        <div className={style.pos}>
            <form className={style.form}>
                <button id={style.btn_close} onClick={() => props.close()}></button>
                <p>Your order</p>
                <div className={style.inputs_area}>
                    <div>
                        <label>Cleaner</label>
                        <input placeholder="Name" type="text" value={props.name}/>
                        <label>Address</label>
                        <input placeholder="Address" type="text" value={address} onChange={event => setAddress(event.target.value)}/>
                        <label>Time</label>
                        <input type={"time"} value={props.time}/>
                    </div>
                    <div>
                        <label>Date</label>
                        <input type={"text"} value={format(props.day, 'PP')}/>
                        <label>Phone number</label>
                        <input placeholder={"Phone"} type={"text"} />
                        <label>Email</label>
                        <input placeholder="Enter email" type="email"/>
                    </div>
                </div>
                <button type={"button"} onClick={()=>buttonSibmit()}>Book</button>
            </form>
        </div>
    );
};

export default Order;