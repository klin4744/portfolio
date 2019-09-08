import React from 'react';
import './About.css';

export default function About() {
   return (
      <div id="about" className="About bg-light text-black py-4">
         <h1 className="display-4">About Me</h1>
         <div className="row w-90">
            <div className="col-6">
               <img
                  className="img-fluid"
                  alt=""
                  src={require('../assets/myFace.jpg')}
               />
            </div>
            <div className="col-6">
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
            </div>
         </div>
      </div>
   );
}
