import logo from "./logo.svg";
import "./App.css";
import Nav from "./components/Nav/Nav";

import Footer from "./components/Footer/Footer";

import TopNav from "./components/TopNav/TopNav";
import { Route, Routes } from "react-router-dom";
import Landing from "./components/Landing/Landing";
import Services from "./components/Services/Services";
import Why from "./components/Why/Why";
import Review from "./components/Review/Review";
import Contact from "./components/Contact/Contact";
import  Team from "./components/Team/Team";
// import Contact from './components/Contact/Contact';
import FourZeroFour from "./components/FourZeroFour/FourZeroFour";
import Home from "./components/Home/Home";

function App() {
  return (
    <div className="">
      

      <TopNav></TopNav>
      <Nav></Nav>
      <Routes>
      
        <Route path="/" element={< Home></ Home>}></Route>
        <Route path="/home" element={< Home></ Home>}></Route>
          <Route path="*" element={<FourZeroFour></FourZeroFour>}></Route>
      </Routes>
       
      <Contact></Contact>
      <Footer></Footer>
      {/* <Route path="/*" element={<FourZeroFour />} />  */}
    </div>
  );
}

export default App;
