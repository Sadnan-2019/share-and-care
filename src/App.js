import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav/Nav';

import Footer from './components/Footer/Footer';

import TopNav from './components/TopNav/TopNav';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';

function App() {
  return (
    <div className="">

<Routes>

<Route path="/home" element={<Home />}></Route>
<Route path="/" element={<Home />}></Route>
  </Routes>
      <TopNav></TopNav>
      <Nav></Nav>
      
      <Footer></Footer>
      {/* <Route path="/*" element={<FourZeroFour />} />  */}
    </div>
  );
}

export default App;
