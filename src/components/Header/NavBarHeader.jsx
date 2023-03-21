import React from 'react';
import img1 from '../../img/logo.svg';
import {Link, Route, Routes} from 'react-router-dom';
import { book, homePage, joinOurTeam, signUp } from '../../Constants/constants';
import Home from "./Home/Home";
import SignUp from "./SignUp/SignUp";

const NavBarHeader = () => {
    return (
        <div>
            <section className="upSection">
                <nav className="nav">
                    <div>
                        <Link to={homePage}>
                            <img src={img1} alt="ClearIt" />
                        </Link>
                    </div>
                    <ul>
                        <li>
                            <Link to={homePage}>Home</Link>
                        </li>
                        <li>
                            <Link to={book}>Book</Link>
                        </li>
                        <li>
                            <Link to={joinOurTeam}>Join our team</Link>
                        </li>
                        <li>
                            {/*<Link to={signUp}>*/}
                            {/*    <button> SignUp</button>*/}
                            {/*</Link>*/}

                                <button id={"SingUp"}> <Link to={signUp}>SignUp</Link></button>

                        </li>
                    </ul>
                </nav>
                <Routes>
                    {['/', homePage].map(path =>
                        <Route path={path} key={path} element={<Home/>}/>)}
                    <Route path={signUp} element={<SignUp/>}/>
                </Routes>
            </section>
        </div>
    );
};

export default NavBarHeader;
