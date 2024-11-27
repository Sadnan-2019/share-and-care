import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav/Nav';
import Landing from './components/Landing/Landing';
import Footer from './components/Footer/Footer';
import Services from './components/Services/Services';
import Why from './components/Why/Why';
import Review from './components/Review/Review';
import Clients from './components/Clients/Clients';
import Team from './components/Team/Team';

function App() {
  return (
    <div className="">
      <Nav></Nav>
      <Landing></Landing>
      <Services></Services>
      <Why></Why>
      {/* <Clients></Clients> */}
      <Review></Review>
      <Team></Team>
      <Footer></Footer>
    </div>
  );
}

export default App;
