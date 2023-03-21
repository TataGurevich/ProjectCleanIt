import React from 'react';
// import NavBar from "./Content/Slider/NavBar";
// import Content from "./Content/Content";
// import BookNow from "./Content/Book/BookNow";
import Regularly from "../../components/Main/Content/Slider/TypesOfCleaning/Regularly";
import Deep from "../../components/Main/Content/Slider/TypesOfCleaning/Deep";
import Office from "../../components/Main/Content/Slider/TypesOfCleaning/Office";
import Windows from "../../components/Main/Content/Slider/TypesOfCleaning/Windows";
import {deepPage, officePage, windowsPage} from "../../Constants/constants";

const Main = (props) => {

    switch (props.page)
    {
        case deepPage: return(<Deep/>)
        case officePage: return (<Office/>)
        case windowsPage: return (<Windows/>)
        default: return (<Regularly/>)
    }

};


// const Main = (props) => {
//
//     switch (props.page)
//     {
//         case deepPage: return(<Deep/>)
//         case officePage: return (<Office/>)
//         case windowsPage: return (<Windows/>)
//         default: return (<Regularly/>)
//     }
//
// };

export default Main;