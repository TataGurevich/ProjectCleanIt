import React, {useState} from 'react';
import img1 from '../../img/logo.svg';
import {HashLink as Link} from 'react-router-hash-link';
// import {Route, Routes} from 'react-router-dom';
import {book, homePage, joinOurTeam, signUp} from '../../Constants/constants';
import Home from "./Home/Home";
import SignUp from "./SignUp/SignUp";
import BookNow from "../Main/Content/Book/BookNow";
import Join from "./Join/Join";
import PageSignIn from "./SignIn/PageSignIn";


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
                        <Link onClick={()=>close()}>
                        <img src={img1} alt="ClearIt"/>
                        </Link>
                    </div>
                    <ul>
                        <li>
                            <Link onClick={()=>close()}>Home</Link>
                        </li>
                        <li>
                            <Link to={'/Book#bookNow'} onClick={()=>close()}>Book</Link>
                        </li>
                        <li>
                            <Link onClick={()=>openJ()}>Join our team</Link>
                        </li>
                        <li>
                            <button id={"SingUp"} onClick={()=>openS()}><Link>SignUp</Link></button>
                        </li>
                    </ul>
                </nav>
                <Home/>
                {isOpenJoin && <Join close={close}/>}
                {isOpenSing && <SignUp close={close}/>}
                {isOpenJoin && <Join/>}
                {isOpenSing && <PageSignIn/>}
            </section>
        </div>
    );
};

export default NavBarHeader;
