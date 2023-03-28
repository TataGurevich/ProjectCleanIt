import React from 'react';
import Regularly from "./Content/Cleanings/TypesOfCleaning/Regularly";
import Deep from "./Content/Cleanings/TypesOfCleaning/Deep";
import Office from "./Content/Cleanings/TypesOfCleaning/Office";
import Windows from "./Content/Cleanings/TypesOfCleaning/Windows";
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