import React from 'react';
import office from '../../../../../img/office.svg'
import './office.css'
import backgroundContext from '../../../../../img/backgroundSlider.png'
import BookNow from "../../Book/BookNow";

const Office = () => {
    return (
        <div>
            <div className="triangle3"/>
            <div className="gradient03">
                <img src={backgroundContext} alt="gradient2"/></div>
            <div className="vac_clean3">
                <img src={office} className="vac_clean003" alt="vac_clean3"/>
                <div className="description5">
                    <a className="oc">Office</a>
                    <div className="desc8"><a className="desc8">
                        The cleaner comes every morning or evening to<br/>
                        restore cleanliness and order.</a></div>
                    <div className="desc9"><a className="desc9">
                        Wipe all accessible surfaces, switches and door handles<br/>
                        Washing windows, mirrors and glass surfaces<br/>
                        Washing furniture inside and outside<br/>
                        Wiping the walls<br/>
                        Washing chandeliers and lamps<br/>
                        We wash the floor, wipe the baseboards and vacuum the carpet<br/>
                        We take out the garbage</a></div>
                    <div><a href="src/components/Main/Content#" className="check_availability2"><button className="btn5">Check availability</button></a></div>
                </div>
            </div>
            <BookNow/>
        </div>
    );
};

export default Office;