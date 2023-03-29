import React from 'react'
import './cleaners.css'
import {cleaners} from '../../../../Constants/constants'
import Cleaner from "./Cleaner";

const Cleaners = () => {
    return(
        <div>
            {cleaners.map((item, index) => {
                return <Cleaner cleaners= {item} key ={index}/>
                })}
        </div>
    )
}

export default Cleaners;