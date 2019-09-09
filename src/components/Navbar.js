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
            <Nav className="ml-auto">
               <Nav.Link href="#home">Home</Nav.Link>
               <Nav.Link href="#about">About Me</Nav.Link>
               <Nav.Link href="#projects">My Projects</Nav.Link>
               <Nav.Link
                  href="https://medium.com/@kevinlin_71519"
                  target="_blank"
               >
                  My Articles
               </Nav.Link>
            </Nav>
         </Navbar.Collapse>
      </Navbar>
   );
}
