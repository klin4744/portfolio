/* eslint-disable no-useless-constructor */
import React from 'react';
import './Home.css';
import Navbar from './Navbar';
import Header from './Header';

class Home extends React.Component {
   constructor(props) {
      super(props);
   }
   render() {
      return (
         <div className="Home">
            <Navbar />
            <div className="content">
               <Header />
            </div>
         </div>
      );
   }
}

export default Home;
