import React from 'react';
import {regularlyPage, deepPage, officePage, windowsPage} from "../../../../Constants/constants";
import './navBar.css'

const NavBar = (props) => {
    return (
        <div className="rectangle">
            <div className="nav_bar">
                <a className="regularly" onClick={() => props.changePage(regularlyPage)} >Regularly Cleaning</a>
                <a className="deep" onClick={() => props.changePage(deepPage)}>Deep Cleaning</a>
                <a className="office" onClick={() => props.changePage(officePage)}>Office Cleaning</a>
                <a className="windows" onClick={() => props.changePage(windowsPage)}>Windows Cleaning</a>
            </div>
            <div className="rectangle2"/>
        </div>
    );
};

export default NavBar;