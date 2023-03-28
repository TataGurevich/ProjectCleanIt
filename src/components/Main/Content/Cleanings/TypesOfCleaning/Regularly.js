import React from 'react';
import regularly from '../../../../../img/regularly.svg'
import './regularly.css'
import backgroundContext from '../../../../../img/backgroundSlider.png'
import BookNow from "../../Book/BookNow";

const Regularly = () => {
    return (
        <div>
            <div className="triangle"/>
            <div className="gradient01">
                <img src={backgroundContext} alt="gradient2"/></div>
            <div className="vac_clean">
                <img src={regularly} className="vac_clean001" alt="vac_clean"/>
                <div className="description2">
                    <a className="rl">REGULARLY</a>
                    <div className="desc3"><a className="desc3">
                        This is our standard – what we do with every order.
                        We can also add custom services to customize your cleaning offer.</a></div>
                    <div className="desc4"><a className="desc4">
                        We wash the floor and wipe the baseboards<br/>
                        Carpets vacuuming (with your vacuum cleaner if you don’t have a<br/>
                        vacuum cleaner don’t worry, we brush carpets)<br/>
                        Wipe all accessible surfaces<br/>
                        Wipe the switches and door handles<br/>
                        We clean mirrors and glass surfaces<br/>
                        We collect and take out the garbage</a></div>
                    <div><a href="src/components/Main/Content#" className="check_availability"><button className="btn3">Check availability</button></a></div>
                </div>
            </div>
            <BookNow/>
        </div>


    );
};

export default Regularly;