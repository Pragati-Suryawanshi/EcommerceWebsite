import React from "react";
import Navbar from "./Navbar";
import Products from "./Products";
import { Carousel } from "react-bootstrap";
import Footer from "./Footer";

const Home = () => {
  return (
    <div className="hero">
      <Navbar></Navbar>
      
      <Carousel>
        <Carousel.Item interval={1500} className="card bg-dark text-light border-0 ">
          <img
            className="d-block w-100"
            src="/assets/shopping1.jpg"
            alt="First slide"
            height={520}
          />
          <Carousel.Caption>
            <h5 className="card-title display-3 fw-bolder mb-0">
              NEW SEASONS ARRIVAL
            </h5>
            <p className=" card-text lead fs-2">CHECKOUT ALL THE TRENDS.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1500}>
          <img
            className="d-block w-100"
            src="/assets/shopping7.jpg"
            alt="Second slide"
            height={520}
          />
          <Carousel.Caption>
            <h5 className="card-title display-3 fw-bolder mb-0">
              NEW SEASONS ARRIVAL
            </h5>
            <p className=" card-text lead fs-2">CHECKOUT ALL THE TRENDS.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1500}>
          <img
            className="d-block w-100"
            src="/assets/shopping3.jpg"
            alt="Third slide"
            height={520}
          />
          <Carousel.Caption>
            <h5 className="card-title display-3 fw-bolder mb-0">
              NEW SEASONS ARRIVAL
            </h5>
            <p className=" card-text lead fs-2">CHECKOUT ALL THE TRENDS.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1500}>
          <img
            className="d-block w-100"
            src="/assets/background2.jpg"
            alt="Third slide"
            height={520}
          />
          <Carousel.Caption>
            <h5 className="card-title display-4 fw-bolder mb-0 text-dark">
              NEW SEASONS ARRIVAL
            </h5>
            <p className=" card-text lead fs-2 text-dark">CHECKOUT ALL THE TRENDS.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <Products></Products>
      <Footer></Footer>
    </div>
  );
};

export default Home;
