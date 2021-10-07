import React from "react";
import "./DentalCare.css";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import img from "../../Assets/images/Mask Group 3.png";

const DentalCare = () => {
  return (
    <Container className="dentalCare">
      <Row className="d-flex align-items-center">
        <Col lg={5}>
          <div>
            <img src={img} alt="" className="img-fluid w-100" />
          </div>
        </Col>
        <Col lg={6} className="offset-lg-1 dentalCare-description">
          <h3>Exceptional Dental Care On Your Terms.</h3>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their default
            model text, and a search for 'lorem ipsum' will uncover many web
            sites still in their infancy.
          </p>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters.
          </p>
          <button>LEARN MORE</button>
        </Col>
      </Row>
    </Container>
  );
};

export default DentalCare;
