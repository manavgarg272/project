import React, { useState, useEffect } from "react";
// import Sidebar from "../../Components/sodebar/sidebar";
import "./photo.css";
import { Container, Row, Col, Image } from "react-bootstrap";

const photo = () => {
  //state

  return (
    <div className="box">
      <Container>
        <Row>
          <Col xs={6} md={4}>
            <div className="box1"></div>
            <div className="box1"></div>
            <div className="box1"></div>
          </Col>
          <Col xs={6} md={4}>
            <div className="box1"></div>
            <div className="box1"></div>
            <div className="box1"></div>
          </Col>
          <Col xs={6} md={4}>
            <div className="box1"></div>
            <div className="box1"></div>
            <div className="box1"></div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default photo;
