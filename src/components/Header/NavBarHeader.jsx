import React, {useState} from 'react';
import img1 from '../../img/logo.svg';
import {HashLink as Link} from 'react-router-hash-link';
import Home from "./Home/Home";
import Join from "./Join/Join";
import PageSignIn from "./SignIn/PageSignIn";
import {useAuth} from '../../hooks/use-auth'
import {useDispatch} from 'react-redux';
import {removeUser} from "../../store/slices/userSlice";
// import {clientData} from "./Registration/ClientsList";


const NavBarHeader = () => {
    const [isOpenJoin, setIsOpenJoin] = useState(false)
    const[isOpenSing, setIsOpenSing]=useState(false)
    const {isAuth} = useAuth();
    const dispatch = useDispatch();
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
    // const handle = () => {
    //     //
    // }

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
                            {isAuth ?
                                (<button id={"SingUp"} onClick={()=>dispatch(removeUser())}><Link>Logout</Link></button>)
                                :
                                (<button id={"SingUp"} onClick={()=>openS()}><Link>SignUp</Link></button>)
                            }
                        </li>
                    </ul>
                </nav>
                <Home/>
                {/*{isOpenJoin && <Join close={close}/>}*/}
                {/*{isOpenSing && <SignUp close={close}/>}*/}
                {isOpenJoin && <Join close={close}/>}
                {isOpenSing && <PageSignIn close={close}/>}
            </section>
        </div>
    );
};

export default NavBarHeader;
