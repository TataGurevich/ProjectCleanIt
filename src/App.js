import './App.css';
import NavBarHeader from "./components/Header/NavBarHeader";
import Footer from "./components/Footer/Footer";
import Main from "./components/Main/Main";



function App() {
  return (
    <div className="App">
            <NavBarHeader/>
            <Main/>
            <Footer/>
    </div>
  );
}

export default App;
