import React, {useState} from "react";
import './App.css';
import NavBarHeader from "./components/Header/NavBarHeader";
import Footer from "./components/Footer/Footer";
import Main from "./components/Main/Main";
import NavBar from "./components/Main/Content/Slider/NavBar";
import {regularlyPage} from "./Constants/constants";


const App = () => {

    const [page, setPage] = useState(regularlyPage)
    const changeActivePage = (page) => {
        setPage(page)
    }
  return (
    <div className="App">
            <NavBarHeader/>
        <NavBar changePage={changeActivePage}/>
        <Main page={page}/>
            <Footer/>
    </div>
  );
};

export default App;
