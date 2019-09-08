import React from 'react';
import './About.css';
import Button from 'react-bootstrap/Button';

export default function About() {
   return (
      <div id="about" className="About bg-light text-black py-4">
         <h1 className="display-4">About Me</h1>
         <div className="container row w-90 bg-dark mx-auto p-2 rounded about-content">
            <div className="col-6">
               <img
                  className="img-fluid"
                  alt=""
                  src={require('../assets/myFace.jpg')}
               />
            </div>
            <div className="col-6 about-right">
               <p className="lead">
                  In college, I built an application for my senior design
                  project tailored to solve an issue in the medical industry.
                  While working on that specific project, I developed an
                  interest in software engineering and spent several hours self
                  learning it through online resources like freeCodeCamp and
                  Udemy. Afterwards, I was drawn to go to Fullstack Academy in
                  New York to refine the skills that I developed after a
                  thousand hours of self-learning. While I did learn new
                  technolgies and refine my technical skills at Fullstack, the
                  most important skill I gained there was learning how to work
                  with a team of programmers, which became invaluable as we
                  developed applications with strict deadlines and new
                  technologies.{' '}
               </p>
               <div className="row mx-auto">
                  <div className="col-4">
                     <a href="https://github.com/klin4744" target="_blank">
                        <i className="fa fa-github" aria-hidden="true"></i>
                     </a>
                  </div>
                  <div className="col-4">
                     <a href="https://www.linkedin.com/in/kevin-lin-b1a126111/">
                        <i
                           className="fa fa-linkedin-square"
                           aria-hidden="true"
                        ></i>
                     </a>
                  </div>
                  <div className="col-4">
                     <a
                        href="https://medium.com/@kevinlin_71519"
                        target="_blank"
                     >
                        <i className="fa fa-medium" aria-hidden="true"></i>
                     </a>
                  </div>
               </div>
               <Button
                  variant="light"
                  id="resume-btn"
                  className="mt-5"
                  href={require('../assets/resume.pdf')}
                  download="resume.pdf"
               >
                  <i className="fa fa-cloud-download" aria-hidden="true"></i>
                  {'   '}
                  <p>Download my Resume</p>
               </Button>
            </div>
         </div>
      </div>
   );
}
