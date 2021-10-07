import React from "react";
import "./Footer.css";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";

const Footer = () => {
  return (
    <div className="footer">
      <Container>
        <Row>
          <Col>
            <p>Copyright All Rights Reserved By MHRaakib</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
