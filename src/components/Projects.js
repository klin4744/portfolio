import React from 'react';
import Project from './ProjectCard';
import Carousel from 'react-bootstrap/Carousel';
import './Projects.css';

export default function Projects() {
   return (
      <div className="mx-auto p-5 my-5" id="projects">
         <h3 className="display-4 project-text mb-4">Projects</h3>
         <Carousel>
            <Carousel.Item>
               <div className="row w-75 mx-auto">
                  <div className="col-12 col-lg-5">
                     <img
                        className="img-fluid"
                        alt=""
                        src={require('../assets/a-maze-thing.png')}
                     />
                  </div>
                  <div className="col-12 col-lg-7 my-auto">
                     <p className="display-4">A Maze Thing</p>
                     <p>
                        An Augmented Reality application where players navigate
                        a maze to collect coins in a race against time. Players
                        can also build their own maze to challenge friends and
                        search for user-built mazes.
                     </p>

                     <div className="row mb-4">
                        <div className="mx-auto">
                           <span className="border border-dark px-2 rounded m-1 d-inline-block">
                              <small>React Native</small>
                           </span>
                           <span className="border border-dark px-2 rounded m-1 d-inline-block">
                              <small>PostgreSQL</small>
                           </span>
                           <span className="border border-dark px-2 rounded m-1 d-inline-block">
                              <small>ViroAR</small>
                           </span>
                           <span className="border border-dark px-2 rounded m-1 d-inline-block">
                              <small>Sequelize</small>
                           </span>
                           <span className="border border-dark px-2 rounded m-1 d-inline-block">
                              <small>Express JS</small>
                           </span>
                           <span className="border border-dark px-2 rounded m-1 d-inline-block">
                              <small>Node JS</small>
                           </span>
                        </div>
                     </div>
                     <a
                        href="https://github.com/kirby-s-keystones/A-Maze-Thing"
                        className="btn btn-dark"
                        target="_blank"
                     >
                        <i
                           className="fa fa-github fa-lg"
                           aria-hidden="true"
                        ></i>{' '}
                        View Source Code
                     </a>
                  </div>
               </div>
            </Carousel.Item>
            <Carousel.Item>
               <div className="row w-75 mx-auto">
                  <div className="col-lg-5 col-12">
                     <img
                        className="img-fluid"
                        alt=""
                        src={require('../assets/athletipal.png')}
                     />
                  </div>
                  <div className="col-lg-7 col-12 my-auto">
                     <p className="display-4">Athletipal</p>
                     <p>
                        Athletipal is a TensorFlow project built directly on top
                        of Google's PoseNet model demo which acquires real-time
                        pose data. This project uses simple kinetic and
                        potential energy calculations as well as relativity
                        equations to estimate the total amount of calories a
                        person is burning by movement in real-time.
                     </p>

                     <div className="row mb-4">
                        <div className="mx-auto">
                           <span className="border border-dark px-2 rounded m-1 d-inline-block">
                              <small>TensorFlowJS</small>
                           </span>
                           <span className="border border-dark px-2 rounded m-1 d-inline-block">
                              <small>PoseNet</small>
                           </span>
                           <span className="border border-dark px-2 rounded m-1 d-inline-block">
                              <small>NutritionX API</small>
                           </span>
                        </div>
                     </div>
                     <a
                        href="https://github.com/klin4744/Athletipal"
                        className="btn btn-dark"
                        target="_blank"
                     >
                        <i
                           className="fa fa-github fa-lg"
                           aria-hidden="true"
                        ></i>{' '}
                        View Source Code
                     </a>
                  </div>
               </div>
            </Carousel.Item>
            <Carousel.Item>
               <div className="row w-75 mx-auto">
                  <div className="col-lg-5 col-12">
                     <img
                        className="img-fluid"
                        alt=""
                        src={require('../assets/book-worm.png')}
                     />
                  </div>
                  <div className="col-lg-7 col-12 my-auto">
                     <p className="display-4">Book Worm</p>
                     <p>
                        An ecommerce website for books featuring guess carts,
                        user carts, route protection, orders, authentication,
                        and checkout.
                     </p>

                     <div className="row mb-4">
                        <div className="mx-auto">
                           <span className="border border-dark px-2 rounded m-1 d-inline-block">
                              <small>React</small>
                           </span>
                           <span className="border border-dark px-2 rounded m-1 d-inline-block">
                              <small>Redux</small>
                           </span>
                           <span className="border border-dark px-2 rounded m-1 d-inline-block">
                              <small>Local Storage</small>
                           </span>
                           <span className="border border-dark px-2 rounded m-1 d-inline-block">
                              <small>Express JS</small>
                           </span>
                           <span className="border border-dark px-2 rounded m-1 d-inline-block">
                              <small>Node JS</small>
                           </span>
                           <span className="border border-dark px-2 rounded m-1 d-inline-block ">
                              <small>Travis CI</small>
                           </span>
                           <span className="border border-dark px-2 rounded m-1 d-inline-block ">
                              <small>Stripe API</small>
                           </span>
                        </div>
                     </div>
                     <a
                        href="https://github.com/team-kram/BookWorm"
                        className="btn btn-dark m-2"
                        target="_blank"
                     >
                        <i
                           className="fa fa-github fa-lg"
                           aria-hidden="true"
                        ></i>{' '}
                        View Source Code
                     </a>
                     <a
                        href="https://book-worm-kram.herokuapp.com/"
                        className="btn btn-dark m-2"
                        target="_blank"
                     >
                        <i className="fa fa-globe fa-lg" aria-hidden="true"></i>{' '}
                        View Deployed Site
                     </a>
                  </div>
               </div>
            </Carousel.Item>
         </Carousel>
      </div>
   );
}
