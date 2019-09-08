import React from 'react';
import './Header.css';

export default function Header() {
   return (
      <div className="Header">
         <div className="header-content container">
            <p className="lead header-text">
               Hi I'm Kevin, A Fullstack Web Developer.
            </p>
            <a href="#about">
               <i className="arrow fa fa-angle-down"></i>
            </a>
         </div>
      </div>
   );
}
