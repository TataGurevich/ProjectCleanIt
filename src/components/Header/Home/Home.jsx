import React from 'react';
import img2 from '../../../img/mainImg.svg';

const Home = () => {
    return (
        <div>
            <div className="description">
                <div id="mainPart">
                    <p id="always_clean">always clean</p>
                    <p id="home_office">HOME &amp; OFFICE</p>
                    <div>
                        <p>
                            It’s hard to find someone who enjoys cleaning. It takes a lot of energy, time, and you always have to do it
                            when there are so many other things to do around you.
                        </p>
                        <p>
                            <br />
                            Is it possible to make it so that your surroundings are clean, but not to create a constant torture of
                            cleaning? Of course it is!
                        </p>
                    </div>
                    <button id="book_now">Book now</button>
                </div>
                <img src={img2} alt="women cleaning" />
            </div>
        </div>
);
};

export default Home;
