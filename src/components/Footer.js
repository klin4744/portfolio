import React from 'react';
import './Footer.css';

export default function Footer() {
   return (
      <div className="Footer w-100 bg-dark mt-5">
         <div className="row m-auto">
            <div className="col-4">
               <a href="https://github.com/klin4744" target="_blank">
                  <i className="fa fa-github fa-lg" aria-hidden="true"></i>
               </a>
            </div>
            <div className="col-4">
               <a
                  href="https://www.linkedin.com/in/kevin-lin-b1a126111/"
                  target="_blank"
               >
                  <i
                     className="fa fa-linkedin-square fa-lg"
                     aria-hidden="true"
                  ></i>
               </a>
            </div>
            <div className="col-4">
               <a href="https://medium.com/@kevinlin_71519" target="_blank">
                  <i className="fa fa-medium fa-lg" aria-hidden="true"></i>
               </a>
            </div>
         </div>
      </div>
   );
}
