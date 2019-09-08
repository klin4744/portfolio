/* eslint-disable no-useless-constructor */
import React from 'react';
import './Home.css';

class Home extends React.Component {
   constructor(props) {
      super(props);
   }
   render() {
      return (
         <div className="home">
            <h1>Kevin Lin</h1>
         </div>
      );
   }
}

export default Home;
