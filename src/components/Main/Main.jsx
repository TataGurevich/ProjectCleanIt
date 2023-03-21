import React from 'react';
import NavBar from "./NavBar";
import Content from "./Content/Content";
import BookNow from "./Content/Book/BookNow";

const Main = () => {
    return (
        <div>
            <NavBar/>
            <Content/>
            <BookNow/>

        </div>
    );
};

export default Main;