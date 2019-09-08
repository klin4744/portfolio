/* eslint-disable no-useless-constructor */
import React from 'react';
import './Home.css';
import Navbar from './Navbar';
import Header from './Header';
import About from './About';
import Resume from './Resume';

class Home extends React.Component {
   constructor(props) {
      super(props);
   }
   render() {
      return (
         <div id="home" className="Home">
            <Navbar />
            <div className="content">
               <Header />
               <About />
            </div>
         </div>
      );
   }
}

export default Home;
