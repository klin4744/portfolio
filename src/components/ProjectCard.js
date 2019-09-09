import React from 'react';
import './ProjectCard.css';
import Carousel from 'react-bootstrap/Carousel';

export default function ProjectCard(props) {
   return (
      <Carousel.Item>
         <img className="img-fluid" alt="" src={props.imgUrl} />

         <Carousel.Caption>
            <p className="display-4">{props.title}</p>
            <p>{props.description}</p>
         </Carousel.Caption>
      </Carousel.Item>
   );
}
