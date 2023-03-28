import React from 'react';

const Cleaner = (props) => {
    return (
        <div>
            <div>
        <img src={props.cleaners.Image} alt={'photo'}/>
            </div>
            <div>
            <h2>{props.cleaners.Name}</h2>
                <h3>{props.cleaners.Role}<br/>
                    {props.cleaners.Rating}</h3>
            </div>
            <div>
                <h4>{props.cleaners.Time}</h4>
                <h4>{props.cleaners.Salary}</h4>
            </div>

        </div>
    )
};
export default Cleaner;

