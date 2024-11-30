import React from 'react';
// import Landing from './components/Landing/Landing';
import Landing from '../Landing/Landing';
import Services from '../Services/Services';
import Review from '../Review/Review';
import Why from '../Why/Why';
import Team from '../Team/Team';
 
const Home = () => {
    return (
        <div>
          <Landing></Landing>
          {/* <Services></Services> */}
           <Services></Services>
           <Review></Review>
           <Why></Why>
           <Team></Team>
           
        </div>
    );
};

export default Home;