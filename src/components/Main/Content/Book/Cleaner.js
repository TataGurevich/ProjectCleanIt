import React from 'react';
import style from './cleaner.module.css'

const Cleaner = (props) => {
    return (
        <div className={style.card}>
            {/*<div>*/}
            {/*    <img src={props.cleaners.Image} alt={'photo'}/>*/}
            {/*</div>*/}
            <div>
                <img src={props.cleaners.Image} alt={'photo'}/>
                <div className={style.inf}>
                    <div style={{display:"flex", flexDirection:"column"}}>
                        <h2 style={{fontSize: "24px", fontWeight: "600"}}>{props.cleaners.Name}</h2>
                        <h3>{props.cleaners.Role}</h3>
                    </div>
                    <div style={{display:"flex", flexDirection:"row"}}>
                        <h3>Rating{"  "}</h3>
                           <p> {props.cleaners.Rating}</p>

                    </div>
                </div>
            </div>

            <div className={style.time}>
                <h4>{props.cleaners.Time}</h4>
                <h3>{props.cleaners.Salary}</h3>
            </div>

        </div>
    )
};
export default Cleaner;

