import React from "react";

import "./Crousel.css";
import { Carousel } from "react-bootstrap";
import { Fragment } from "react";

const Crousel2 = () => {
  return (
    <Fragment>
      <div className="crousel2">
        <Carousel fade>
          <Carousel.Item>
            <img
              className="f-block   w-30"
              src="https://www.revv.co.in/assets/RentalImages/HomeScreen/safeCars/banner-sanitised02.png"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-30 " src="imge2.JPG" alt="Second slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-30"
              src="imagenew.JPG"
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
      </div>
    </Fragment>
  );
};
export default Crousel2;
