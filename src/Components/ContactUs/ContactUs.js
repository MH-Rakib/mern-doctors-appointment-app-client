import React from "react";
import "./ContactUS.css";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";

const ContactUs = () => {
  return (
    <Container className="contactUs">
      <Row>
        <Col lg={7} className="mx-auto">
          <div className="contactUs-header">
            <p>Conatct US</p>
            <h3>Always Connect With Us</h3>
          </div>
        </Col>
      </Row>
      <Row>
        <Col lg={7} className="mx-auto">
          <div className="contactUs-form">
            <form action="">
              <input type="email" placeholder="Your Email" />
              <input type="text" placeholder="Subject" />
              <textarea type="message" placeholder="Write Your Message" />
              <button>Submit</button>
            </form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactUs;
