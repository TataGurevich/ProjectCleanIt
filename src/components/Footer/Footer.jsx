import React from 'react';
import style from './Footer.module.css'
import img1 from '../../img/Group_101.svg';

const Footer = () => {
    return (
        <div className={style.footer}>
            <img src={img1} alt="ClearIt" />
            <div>
                <p>Plaut, 10</p>
                <p> Science Park 76706, Rehovot Israel</p>
                <br/>
                <p> Phone: 054-56-99-350</p>
                <p> E-mail: go@tel-ran.com</p>
            </div>

        </div>
    );
};

export default Footer;