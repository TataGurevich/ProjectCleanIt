import React from 'react';
import windows from '../../../../../img/windows.svg'
import './windows.css'
import backgroundContext from '../../../../../img/backgroundSlider.png'
import BookNow from "../../Book/BookNow";


const Windows = () => {
    return (
        <div>
            <div className="triangle4"/>
            <div className="gradient04">
                <img src={backgroundContext} alt="gradient2"/></div>
            <div className="vac_clean4">
                <img src={windows} className="vac_clean004" alt="vac_clean4"/>
                <div className="description6">
                    <a className="ws">Windows</a>
                    <div className="desc10"><a className="desc10">
                        The cleaner comes every morning or evening to<br/>
                        restore cleanliness and order.</a></div>
                    <div className="desc11"><a className="desc11">
                        Wipe all accessible surfaces, switches and door handles<br/>
                        Washing windows, mirrors and glass surfaces<br/>
                        Washing furniture inside and outside<br/>
                        Wiping the walls<br/>
                        Washing chandeliers and lamps<br/>
                        We wash the floor, wipe the baseboards and vacuum the carpet<br/>
                        We take out the garbage</a></div>
                    <div><a href="src/components/Main/Content#" className="check_availability3"><button className="btn6">Check availability</button></a></div>
                </div>
            </div>
            <BookNow/>
        </div>
    );
};

export default Windows;