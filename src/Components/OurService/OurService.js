import React, { useState, useEffect } from "react";
import data from "./../../Assets/Data/Services";
import { Container, Row, Col } from "react-bootstrap";
import "./OurService.css";

const OurService = () => {
  const [service, setService] = useState([]);
  useEffect(() => {
    setService(data);
  }, []);

  return (
    <Container className="ourServices">
      <Row>
        <Col>
          <div className="ourServices-header">
            <p>Our Services</p>
            <h3>Services We Provide</h3>
          </div>
        </Col>
      </Row>
      <Row>
        {service.map((obj) => (
          <Col lg={4}>
            <div className="service">
              <img src={obj.image} className="img-fluid" alt="" />
              <h3>{obj.title}</h3>
              <p>{obj.description}</p>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default OurService;
