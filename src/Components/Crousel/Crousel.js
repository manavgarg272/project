import React from "react";

import "./Crousel.css";
import { Carousel } from "react-bootstrap";

const Crousel = () => {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img className="d-block   w-100" src="imagenew.JPG" alt="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100 " src="imge2.JPG" alt="Second slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src="imagenew.JPG" alt="Third slide" />
      </Carousel.Item>
    </Carousel>
  );
};
export default Crousel;
