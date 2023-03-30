import React from 'react'
import './cleaners.css'
import {cleaners} from '../../../../Constants/constants'
import Cleaner from "./Cleaner";

const Cleaners = (props) => {
    return(
        <div>
            {cleaners.map((item, index) => {
                return <Cleaner openForm={props.openForm} cleaners= {item} key ={index}/>
                })}
        </div>
    )
}

export default Cleaners;