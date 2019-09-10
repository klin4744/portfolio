import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './Navbar.css';

export default function NavigationBar() {
   return (
      <Navbar className="Navbar" bg="white" expand="lg">
         <Navbar.Brand href="#home">
            <img alt="" src={require('../assets/portfolioLogo.png')} />
         </Navbar.Brand>
         <Navbar.Toggle aria-controls="basic-navbar-nav" />
         <Navbar.Collapse id="basic-navbar-nav">
            <ul className="ml-auto navbar-nav">
               <li className="nav-item ml-2">
                  <a href="#home">Home</a>
               </li>
               <li className="nav-item ml-2">
                  <a href="#about">About Me</a>
               </li>
               <li className="nav-item ml-2">
                  <a href="#projects">My Projects</a>
               </li>
               <li className="nav-item ml-2">
                  <a href="https://medium.com/@kevinlin_71519" target="_blank">
                     My Articles
                  </a>
               </li>
            </ul>
         </Navbar.Collapse>
      </Navbar>
   );
}
