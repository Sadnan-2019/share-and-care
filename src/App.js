import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav/Nav';
import Landing from './components/Landing/Landing';
import Footer from './components/Footer/Footer';
import Services from './components/Services/Services';
import Why from './components/Why/Why';
import Review from './components/Review/Review';

function App() {
  return (
    <div className="">
      <Nav></Nav>
      <Landing></Landing>
      <Services></Services>
      <Why></Why>
      <Review></Review>
      <Footer></Footer>
    </div>
  );
}

export default App;
