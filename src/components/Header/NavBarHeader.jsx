import React, {useState} from 'react';
import img1 from '../../img/logo.svg';
import {HashLink as Link} from 'react-router-hash-link';
import {Route, Routes} from 'react-router-dom';

// import {Link, Route, Routes} from 'react-router-dom';
import {book, homePage, joinOurTeam, signUp} from '../../Constants/constants';
import Home from "./Home/Home";
import SignUp from "./SignUp/SignUp";
import BookNow from "../Main/Content/Book/BookNow";
import Join from "./Join/Join";

const NavBarHeader = () => {
    const [isOpenJoin, setIsOpenJoin] = useState(false)
    const[isOpenSing, setIsOpenSing]=useState(false)
    const openJ = () => {
        setIsOpenSing(false)
        setIsOpenJoin(!isOpenJoin)
    }
    const openS=()=>{
        setIsOpenJoin(false)
        setIsOpenSing(!isOpenSing)
    }
    const close=()=>{
        setIsOpenJoin(false)
        setIsOpenSing(false)
    }

    return (
        <div>
            <section className="upSection">
                <nav className="nav">
                    <div>
                        {/*<Link to={homePage}>*/}
                        {/*    <img src={img1} alt="ClearIt"/>*/}
                        {/*</Link>*/}
                        {/*<Link to={'/Home#home'}>*/}
                        <Link onClick={()=>close()}>
                        <img src={img1} alt="ClearIt"/>
                        </Link>
                    </div>
                    <ul>
                        <li>
                            {/*<Link to={homePage}>Home</Link>*/}
                            {/*<Link to={'/Home#home'}>Home</Link>*/}
                            <Link onClick={()=>close()}>Home</Link>
                        </li>
                        <li>
                            {/*<Link to={book} >Book</Link>*/}
                            <Link to={'/Book#bookNow'} onClick={()=>close()}>Book</Link>
                        </li>
                        <li>
                            {/*<Link to={joinOurTeam}>Join our team</Link>*/}
                            <Link onClick={()=>openJ()}>Join our team</Link>
                        </li>
                        <li>
                            {/*<button id={"SingUp"}><Link to={signUp}>SignUp</Link></button>*/}
                            <button id={"SingUp"} onClick={()=>openS()}><Link>SignUp</Link></button>
                        </li>
                    </ul>
                </nav>
                <Home/>
                {isOpenJoin && <Join/>}
                {isOpenSing&&<SignUp/>}
                {/*<Routes>*/}
                {/*    {['/', homePage].map(path =>*/}
                {/*        <Route path={path} key={path} element={<Home/>}/>)}*/}
                {/*        <Route path={signUp} element={<SignUp/>}/>*/}
                {/*        /!*<Route path={joinOurTeam} element={<Join/>}/>*!/*/}

                {/*    /!*<Route path={book} element={<BookNow/>}/>*!/*/}
                {/*</Routes>*/}
            </section>
        </div>
    );
};

export default NavBarHeader;
